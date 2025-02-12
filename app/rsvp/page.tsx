import RsvpComponent from "@/components/rsvpcomponent";
import { Suspense } from "react";

const Rsvp: React.FC = () => {
  return (
    <Suspense
      fallback={
        <p className="text-brown-dark text-md md:text-text-lg  p-4">
          Loading RSVP page...
        </p>
      }
    >
      <RsvpComponent />
    </Suspense>
  );
};

export default Rsvp;
