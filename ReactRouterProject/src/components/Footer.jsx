import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold">
          &copy; 2024 MyWebsite. All rights reserved.
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="" className="hover:text-blue-400">Privacy Policy</Link>
          <Link to="" className="hover:text-blue-400">Terms of Service</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/" target="_blank" className="hover:text-blue-500">
            <i className="fab fa-facebook-f">
              <img src="data:image/png;base64,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"
              alt="facebook" 
              className="w-10 h-10 object-contain" />
            </i>
          </a>
          <a href="https://x.com/?lang=en" target="_blank" className="hover:text-blue-400">
            <i className="fab fa-twitter">
              <img src="data:image/jpeg;base64,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" 
              alt="twitter"
              className="w-10 h-10 object-contain" />
            </i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="hover:text-pink-500">
            <i className="fab fa-instagram">
              <img src="data:image/jpeg;base64,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"
              alt="instagram"
              className="w-10 h-10 object-contain" />
            </i>
          </a>
        </div>
      </div>
    </footer>
    );
}

export default Footer;