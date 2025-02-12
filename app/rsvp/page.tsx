"use client";
import { useSearchParams } from "next/navigation";
import RsvpForm from "@/components/rsvpform";
import SearchBar from "@/components/search";

const Rsvp: React.FC = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  if (code === null) {
    return (
      <div>
        <h1 className="text-green-dark text-2xl md:text-4xl  font-bold p-4">
          RSVP Here!
        </h1>

        <SearchBar />
        <p className="text-brown-dark text-md md:text-text-lg  p-4">
          Please enter your invitation code to RSVP. The code will come printed
          on your invitation.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-green-dark text-2xl md:text-4xl  font-bold p-4">
          RSVP Here!
        </h1>
        <SearchBar />
        <RsvpForm code={code} />
      </div>
    );
  }
};

export default Rsvp;
