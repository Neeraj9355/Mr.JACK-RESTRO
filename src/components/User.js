import { useState } from "react";
import { useEffect } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("Timer on");
    // }, 1000);
    // console.log("UseEffect ");
    return () => {
      // clearInterval(timer);
      // console.log("UseEffect Return");
    };
  }, []);
  // console.log("render");

  return (
    <div className="userCard">
      <span>
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </span>
      <h2>Name :{props.name}</h2>
      <h3>Location : Indirapuram</h3>
      <h4>Contact : @Neeraj123</h4>
    </div>
  );
};

export default User;
