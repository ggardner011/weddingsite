"use client";
import { useSearchParams } from "next/navigation";
import RsvpMultiForm from "@/components/rsvpmultiform";
import SearchBar from "@/components/searchbar";
import { useEffect, useState } from "react";
import { Guests } from "@prisma/client";

const RsvpComponent: React.FC = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || ""; //set code to empty string if null

  const [guests, setGuests] = useState<Guests[] | null>(null);
  const [error, setError] = useState("");
  const [toggle, setToggle] = useState(false); //toggle for triggering state update on button click, only changes when the search button is clicked but there is no code change to force a refresh

  const handleToggle = () => {
    setToggle(!toggle);
  };

  //Search for guests by groupcode when code changes
  useEffect(() => {
    const fetchGuests = async () => {
      try {
        setError("");
        setGuests(null);

        if (!code || code === "") return;

        const response = await fetch("/api/getGuestsByGroupcode", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ groupcode: code }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch guests");
        }

        const data = await response.json();
        setGuests(data);
      } catch (err) {
        console.error("Error fetching guests:", err);
        setError(
          (err as Error).message || "Failed to load guests. Please try again."
        );
      }
    };

    fetchGuests();
  }, [toggle, code]);

  return (
    <div className="pb-8">
      <SearchBar intialCode={code} handleToggle={handleToggle} />
      {!code ? (
        <p className="text-brown-dark text-md md:text-text-lg  p-4">
          Please enter your invitation code to RSVP. The code will come printed
          on your invitation.
        </p>
      ) : (
        <>
          {error ? (
            <p className="text-red-500 text-md md:text-text-lg  p-4">
              Error: {error}
            </p>
          ) : guests !== null && guests.length === 0 ? (
            <p className="text-red-500 text-md md:text-text-lg  p-4">
              Invitation code not found.
            </p>
          ) : guests !== null ? (
            <>
              <RsvpMultiForm guests={guests} />
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
