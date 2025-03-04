import { useEffect, useState } from "react";

interface Star {
  id: number;
  size: number;
  top: number;
  left: number;
  animationDuration: number;
  opacity: number;
}

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]); // Explicit type for state

  useEffect(() => {
    const generateStars = (count: number) => {
      const starArray: Star[] = [];
      for (let i = 0; i < count; i++) {
        starArray.push({
          id: i,
          size: Math.random() * 3 + 1, // Random size between 1px and 3px
          top: Math.random() * 100, // Random position (0 to 100vh)
          left: Math.random() * 100, // Random position (0 to 100vw)
          animationDuration: Math.random() * 50 + 5,
          opacity: Math.random() * 0.5 + 0.5,
        });
      }
      setStars(starArray);
    };

    generateStars(200); // Adjust number of stars here
  }, []);

  return (
    <div className="absolute w-full h-full overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-primary-pink rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}vh`,
            left: `${star.left}vw`,
            opacity: star.opacity,
            animation: `animStar ${star.animationDuration}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
