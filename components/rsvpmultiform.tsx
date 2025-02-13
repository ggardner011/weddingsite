import { Guests } from "@prisma/client";

interface RsvpMultiFormProps {
  guests: Guests[];
}

const RsvpMultiForm: React.FC<RsvpMultiFormProps> = ({ guests }) => {
  console.log(guests);
  return (
    <>
      <p className="text-brown-dark text-md md:text-text-lg  p-4">
        {" "}
        Code found for {guests.map((guest) => guest.firstname).join(", ")}{" "}
      </p>

      <form className="space-y-6 px-6 ">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guests.map((guest) => (
            <div
              key={guest.id}
              className="border-2 border-brown-dark bg-brown text-yellow-dark font-bold rounded-lg p-6 space-y-4"
            >
              <h2 className="text-xl text-center">
                {guest.firstname} {guest.lastname}
              </h2>

              {/* Attending Dropdown */}
              <div className="flex flex-col space-y-2">
                <label htmlFor={`attending-${guest.id}`} className="text-lg">
                  Attending
                </label>
                <select
                  id={`attending-${guest.id}`}
                  name="attending"
                  className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown-light px-4 py-2 rounded focus:outline-none w-full md:w-128"
                >
                  <option value="yes">I Can Attend</option>
                  <option value="no">I Cannot Attend</option>
                </select>
              </div>

              {/* Meal Selection */}
              <div className="flex flex-col space-y-2">
                <label htmlFor={`meal-${guest.id}`} className="text-lg">
                  Meal Preference
                </label>
                <select
                  id={`meal-${guest.id}`}
                  name="meal"
                  className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown-light px-4 py-2 rounded focus:outline-none w-full md:w-128"
                >
                  <option value="beef">Beef</option>
                  <option value="chicken">Chicken</option>
                  <option value="fish">Fish</option>
                  <option value="vegetarian">Vegetarian</option>
                </select>
              </div>

              {/* Email Input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor={`email-${guest.id}`} className="text-lg">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id={`email-${guest.id}`}
                  name="email"
                  className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown-light px-4 py-2 rounded focus:outline-none w-full md:w-128"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown px-6 py-3 rounded-lg hover:bg-yellow-dark hover:text-brown-dark transition"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default RsvpMultiForm;
