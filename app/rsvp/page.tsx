import RsvpComponent from "@/components/rsvpcomponent";
import { Suspense } from "react";

const Rsvp: React.FC = () => {
  return (
    <div>
      <h1 className="text-green-dark text-2xl md:text-4xl  font-bold p-4">
        RSVP Here!
      </h1>
      <Suspense
        fallback={
          <p className="text-brown-dark text-md md:text-text-lg  p-4">
            Loading RSVP page...
          </p>
        }
      >
        <RsvpComponent />
      </Suspense>
    </div>
  );
};

export default Rsvp;
