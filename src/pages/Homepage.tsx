import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import BackGround from "../imgs/bg.jpg";
import Enjoy from "../components/Enjoy";
import Download from "../components/Download";
import Streaming from "../components/Streaming";
import KidsZone from "../components/KidsZone";
import Frequently from "../components/Frequently";
import Login from "./Login";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <Router>
      <>
        <div style={{ backgroundImage: `url(${BackGround})` }}>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <div className="flex flex-col gap-5 justify-center items-center h-screen text-white">
            <h1 className="text-4xl  ">Unlimited movies, TV shows, and more</h1>
            <h2 className="text-2xl  ">Watch anywhere. Cancel anytime.</h2>
            <h2 className="text-1xl  ">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h2>

            <div className="flex gap-2 justify-center items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="input w-full bg-gray-800"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-600 hover:border-red-700 rounded  w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div>
          <Enjoy />
        </div>
        <div>
          <Download />
        </div>
        <div>
          <Streaming />
        </div>
        <div>
          <KidsZone />
        </div>
        <div>
          <Frequently />
        </div>
      </>
    </Router>
  );
};

export default Homepage;
