/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!targetDate || isNaN(new Date(targetDate).getTime())) {
      console.error("Invalid or missing target date:", targetDate);
      return;
    }

    let timer;

    const calculateTimeLeft = () => {
      const now = new Date(); // Get the current time
      const target = new Date(targetDate); // Convert target date to Date object
      const difference = target - now; // Calculate the difference in milliseconds

      // If the target date is in the future, update the time left
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // If the target date is passed, set everything to 0
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer); // Stop the timer
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Set an interval to update the timer every second
    timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup: clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-between w-full sm:w-[250px] md:w-[302px] h-[50px] pt-4 sm:pt-6 md:pt-8 gap-x-2 md:gap-x-4">
      {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
        <div key={unit} className="text-center">
          <p className="text-xs md:text-sm">{unit}</p>
          <strong className="text-3xl md:text-2xl">
            {Object.values(timeLeft)[index]}
            {index < 3 && <span className="text-[#E07575]"> : </span>}
          </strong>
        </div>
      ))}
    </div>
  );
};
