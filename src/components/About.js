import React from "react";
// Assuming you still want to demonstrate UserClass or User components
// You might adjust these to represent the individual developer's profile
import UserClass from "./UserClass";
// import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor +++++++");
  }
  componentDidMount(){
        window.scrollTo(0, 0);
  }

  render() {
    // console.log("Parent Render ++++++");
    return (
      <div className="min-h-[calc(100vh-200px)] bg-gray-50 p-6 md:p-10 lg:p-12 flex flex-col items-center">
        {/* Main About Content Section */}
        <section className="bg-white rounded-lg shadow-xl p-8 md:p-10 max-w-4xl w-full text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            About <span className="text-blue-600">This Project</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            Hello! I'm **Neeraj Sharma**, the individual developer behind this Swiggy Clone project. This application is a testament to my passion for building robust and user-friendly web experiences.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            My goal with this project was to demonstrate proficiency in **React.js, Tailwind CSS, and modern web development practices**. I've focused on creating an intuitive interface, efficient data handling, and a seamless user experience, all built from the ground up by a single pair of hands.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
            Thank you for exploring! Feel free to connect or provide feedback.
          </p>
        </section>

        {/* Developer Profile Section (using UserClass or User) */}
        <section className="max-w-xl w-full flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Meet the Developer</h2>
          
          {/* You can choose to use UserClass or User here to display your own profile */}
          <UserClass name={"Neeraj Sharma"} location={"Ghaziabad, India"} />
          
          {/* Or if you prefer the functional component (User) for your own details: */}
          {/* <User name={"Neeraj Sharma"} location={"Ghaziabad, India"} /> */}

          {/* If you wanted to include a generic "User" component that might show other info: */}
          {/* <User /> */}
        </section>
      </div>
    );
  }
}

export default About;