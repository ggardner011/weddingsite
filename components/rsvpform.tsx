import { Guests } from "@prisma/client";

interface RsvpFormProps {
  guests: Guests[];
}

const RsvpForm: React.FC<RsvpFormProps> = ({ guests }) => {
  console.log(guests);
  return <></>;
};

export default RsvpForm;
