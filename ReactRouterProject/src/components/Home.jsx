import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GrGde5Gl7XWeEh-c63E19H2BaFyCmfdZxA&s"
          alt="Welcome"
          className="mx-auto mb-6 w-40 h-40 rounded-full object-cover"
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover amazing content, stay updated, and explore new possibilities.
        </p>

        <div className="flex justify-center space-x-4">
          <button 
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            <Link to="/about/features">Get Started</Link>
          </button>
          <button className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400">
           <Link to="/learn">Learn More</Link>
          </button>
        </div>
      </div>
    </div>
    );
}

export default Home;