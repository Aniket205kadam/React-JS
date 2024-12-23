import React from "react";

function Contact() {
    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <form>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
          ></textarea>
          <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
    );
}

export default Contact;