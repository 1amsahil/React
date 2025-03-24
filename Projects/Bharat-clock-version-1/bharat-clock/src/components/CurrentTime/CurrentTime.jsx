import { useEffect, useState } from "react"

export default function CurrentTime() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      
      const intervalId = setInterval(() => {
        setTime(new Date());
      },1000)

      return () => {
        clearInterval(intervalId);
        console.log("Cancelled the interval");
      }

    }, [])

  return (
    <p>
        This is the Date and Time : {time.toLocaleDateString()}{" - "}{time.toLocaleTimeString()}
    </p>
  )
};
