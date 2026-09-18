import { useState, useEffect } from "react";

function About() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>About Page</h2>
      <h3>Current Time</h3>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default About;