import React from "react";

function Services() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-5xl">
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Web Development</h2>
          <p className="text-gray-600">
            Build modern, responsive, and user-friendly websites tailored to your needs.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Mobile Apps</h2>
          <p className="text-gray-600">
            Develop robust and scalable mobile applications for Android and iOS.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">SEO Optimization</h2>
          <p className="text-gray-600">
            Improve your website's visibility with our expert SEO services.
          </p>
        </div>
      </div>
    </div>
    );
}

export default Services;