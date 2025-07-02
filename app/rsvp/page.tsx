import RsvpComponent from "@/components/rsvpcomponent";
import { Suspense } from "react";

const Rsvp: React.FC = () => {
  return (
    <div>
      <h1>RSVP Here</h1>
      <Suspense fallback={<p>Loading RSVP page...</p>}>
        <RsvpComponent />
      </Suspense>
    </div>
  );
};

export default Rsvp;
