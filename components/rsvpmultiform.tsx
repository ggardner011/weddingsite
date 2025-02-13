import { useState } from "react";
import { Guests } from "@prisma/client";
import RsvpCard from "./rsvpcard";

const RsvpMultiForm: React.FC<{ guests: Guests[] }> = ({ guests }) => {
  const [guestResponses, setGuestResponses] = useState(guests);
  const [formSuccess, setFormSuccess] = useState(false); //Track whether the submit is run, only update the parent compoenet when submitted
  const [error, setError] = useState("");

  // Update the guest reponse dynamically by filtering on guest ID and applying updates to the given field
  const updateGuestResponse = (guest: Guests) => {
    setGuestResponses((prev) =>
      prev.map((guestOld) => (guest.id === guestOld.id ? guest : guestOld))
    );
  };

  const handleFormSubmit = async () => {
    setError("");
    setFormSuccess(false);

    try {
      const response = await fetch("/api/updateGuestsByIDandGuestCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ guests: guestResponses }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }

      const data = await response.json();
      console.log("API Response:", data);

      setFormSuccess(true);
    } catch (err) {
      console.error("Error submitting:", err);
      setError((err as Error).message || "Failed to submit. Please try again.");
    }
  };

  return (
    <>
      {formSuccess ? (
        <p className="text-brown-dark text-md md:text-text-lg  p-4">
          Submission received, see you there!
        </p>
      ) : (
        <form
          className="space-y-6 px-4"
          onSubmit={async (e) => {
            e.preventDefault();
            await handleFormSubmit();
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guests.map((guest) => (
              <RsvpCard
                key={guest.id}
                guest={guest}
                onGuestUpdate={updateGuestResponse}
              />
            ))}
          </div>

          {error ? (
            <p className="text-red-500 text-md md:text-text-lg  p-4">
              Error submitting, please retry: {error}
            </p>
          ) : (
            <></>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown px-6 py-3 rounded-lg hover:bg-yellow-dark hover:text-brown-dark transition"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default RsvpMultiForm;
