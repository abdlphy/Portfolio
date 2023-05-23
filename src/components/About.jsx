import React from "react";

const About = () => {
  return (
    <div name="about"  className="w-full h-screen snap-both bg-white text-black">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 pt-8">
            <p className="text-8xl  border-gray-500">
             About
            </p>
            </div>

            <p className="text-xl mt-20 pb-8">
            I am a graduate and a passionate developer.I like to create and contribute Apps and Websites projects
            to the companies and open source.
            </p>

            <br/>

            <p className="text-xl py-16">
           I am also interested on doing projects on MI/AL and Game Development and learn and contribute 
           my work to the companies.
            </p>

        </div>
    </div>
    
  );
};

export default About;