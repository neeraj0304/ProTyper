import React from "react";
import keyboard from "../assets/keyboard.png"; 
 
function About() {
  
  return (
    <div className=" w-full mb-6 items-center ">
      <div className="">
        <h1
          style={{ textDecoration: "underline .055rem white" }}
          className=" text-yellow-500 text-center text-sm md:text-2xl lg:text-4xl font-bold font-lobster pt-2 "
        >
          ABOUT
        </h1>
      </div>

      <div className=" flex justify-center items-center">
        <div className=" w-4/5  justify-center items-center border-2 border-white py-3 my-3">
          <p className=" text-white text-center text-sm md:text-lg lg:text-xl font-medium font-zilla px-2">
            <span className=" text-yellow-400">&#10132;</span>
            Mastering touch typing can revolutionize your productivity and
            efficiency. By learning to type instinctively, without relying on
            visual cues, you'll unlock a faster and more accurate way to work.
            This skill is essential in today's fast-paced digital landscape,
            where speed and precision are crucial.
            <br /> <br />
            <span className=" text-yellow-400">&#10132;</span>
            Touch typing offers numerous benefits, including increased
            productivity, reduced errors, and improved physical comfort. It
            enhances professional and personal communication, promotes better
            posture, and reduces eye strain. By investing time in learning touch
            typing, you'll reap long-term rewards, freeing you to focus on
            creative problem-solving, critical thinking, and innovation, and
            ultimately empowering you to succeed in today's digital landscape.
          </p>
          <div className=" flex items-start p-2">
          <h1 className=" text-cyan-500 text-center text-sm md:text-lg lg:text-xl font-medium font-zilla"> The right way to hold keys is:

          </h1>
          </div>
          <div className="  flex justify-center ">
             <img className=" px-2" src={keyboard} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
