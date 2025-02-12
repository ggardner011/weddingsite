"use client";
import { useSearchParams } from "next/navigation";
import RsvpForm from "@/components/rsvpform";
import SearchBar from "@/components/search";
import { useEffect, useState } from "react";
import { Guests } from "@prisma/client";

const RsvpComponent: React.FC = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || ""; //set code to empty string if null

  const [guests, setGuests] = useState<Guests[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    setGuests(null);
    if (code) {
      fetch("/api/getGuestsByGroupcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ groupcode: code }),
      })
        .then((response) => response.json())
        .then((data) => {
          setGuests(data); // Store API response in state
        })
        .catch((err) => {
          console.error("Error fetching guests:", err);
          setError("Failed to load guests. Please try again.");
        });
    }
  }, [code]);

  return (
    <div>
      <h1 className="text-green-dark text-2xl md:text-4xl  font-bold p-4">
        RSVP Here!
      </h1>

      <SearchBar intialCode={code} />
      {code === "" ? (
        <p className="text-brown-dark text-md md:text-text-lg  p-4">
          Please enter your invitation code to RSVP. The code will come printed
          on your invitation.
        </p>
      ) : (
        <>
          {error ? (
            <p className="text-red-500 text-md md:text-text-lg  p-4">
              Error: {error}
            </p> // ✅ Only show error after loading completes
          ) : guests !== null && guests.length === 0 ? (
            <p className="text-red-500 text-md md:text-text-lg  p-4">
              Invitation code not found.
            </p>
          ) : guests !== null ? (
            <>
              <RsvpForm guests={guests} />
              <p className="text-brown-dark text-md md:text-text-lg  p-4">
                {" "}
                Code found for{" "}
                {guests.map((guest) => guest.firstname).join(", ")}{" "}
              </p>
            </>
          ) : (
            <p className="text-brown-dark text-md md:text-text-lg  p-4">
              Loading...
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default RsvpComponent;
