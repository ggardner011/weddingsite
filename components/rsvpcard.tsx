import React from "react";
import { useEffect, useState } from "react";
import { Guests } from "@prisma/client";

interface RsvpCardProps {
  guest: Guests;
  onGuestUpdate: (updatedGuest: Guests) => void;
}

const RsvpCard: React.FC<RsvpCardProps> = React.memo(function RsvpCard({
  guest,
  onGuestUpdate,
}) {
  const [guestState, setGuestState] = useState(guest);

  const rsvpOptions = ["I Can Attend", "I Cannot Attend"];
  const foodOptions = ["Beef", "Chicken", "Fish", "Vegetarian"];

  //If the value in database is not valid, fill with a defailt value
  useEffect(() => {
    if (!rsvpOptions.includes(guestState.rsvpstatus)) {
      setGuestState((prev) => ({ ...prev, rsvpstatus: rsvpOptions[0] }));
    }
    if (!foodOptions.includes(guestState.foodpreference || "")) {
      setGuestState((prev) => ({ ...prev, foodpreference: foodOptions[0] }));
    }
  }, [rsvpOptions, foodOptions]);

  // When guestState changes, notify the parent
  useEffect(() => {
    onGuestUpdate(guestState);
  }, [guestState]);

  return (
    <div
      key={guestState.id}
      className="border-2 border-brown-dark bg-brown text-yellow-dark font-bold rounded-lg p-6 space-y-4"
    >
      <h2 className="text-xl text-center">
        {guestState.firstname} {guestState.lastname}
      </h2>

      {/* Attending Dropdown */}
      <div className="flex flex-col space-y-2">
        <label htmlFor={`attending-${guestState.id}`} className="text-lg">
          Attending
        </label>
        <select
          id={`attending-${guestState.id}`}
          name="attending"
          value={guestState.rsvpstatus}
          onChange={(e) =>
            setGuestState({ ...guest, rsvpstatus: e.target.value })
          }
          className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown-light px-4 py-2 rounded focus:outline-none w-full md:w-128"
        >
          {rsvpOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Meal Selection */}
      <div className="flex flex-col space-y-2">
        <label htmlFor={`meal-${guestState.id}`} className="text-lg">
          Meal Preference
        </label>
        <select
          id={`meal-${guestState.id}`}
          name="meal"
          value={guestState.foodpreference || ""}
          onChange={(e) =>
            setGuestState({ ...guest, foodpreference: e.target.value })
          }
          className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown-light px-4 py-2 rounded focus:outline-none w-full md:w-128"
        >
          {foodOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Email Input */}
      <div className="flex flex-col space-y-2">
        <label htmlFor={`email-${guestState.id}`} className="text-lg">
          Email (optional)
        </label>
        <input
          type="email"
          id={`email-${guestState.id}`}
          name="email"
          value={guestState.email || ""}
          onChange={(e) => setGuestState({ ...guest, email: e.target.value })}
          className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown-light px-4 py-2 rounded focus:outline-none w-full md:w-128"
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
});

export default RsvpCard;
