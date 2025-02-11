"use client";
import SearchBar from "@/components/search";

const Rsvp: React.FC = () => {
  return (
    <div className="bg-yellow-light min-h-screen">
      <h1 className="text-green-dark text-2xl md:text-4xl  font-bold p-8">
        RSVP Here!
      </h1>
      <p className="text-brown-dark text-md md:text-text-lg  p-4">
        Please enter your invitation code to RSVP. The code will come printed on
        your invitation.
      </p>
      <SearchBar />
    </div>
  );
};

export default Rsvp;
