import React from "react";
import { Outlet } from "react-router-dom";

function About() {
    return (
      <>
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          We are a passionate team dedicated to delivering top-notch solutions for your business.
          Our goal is to help you succeed by providing innovative and reliable services tailored
          to your needs.
        </p>
        <p className="text-gray-600">
          With years of experience in web development, mobile app creation, and SEO optimization, we
          strive to exceed expectations and ensure customer satisfaction.
        </p>
      </div>
    </div>
    <Outlet />
    </>
    );
}

export default About;