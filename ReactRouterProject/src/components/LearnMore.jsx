import React from "react";

function LearnMore() {
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src="https://imgs.search.brave.com/-ljSC6LRBaY50SswEDbEFV7bBiJrSZn1rPKk4TFOw2U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saXRz/bGluay5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDEv/QWdpbGUtU29mdHdh/cmUtRGV2ZWxvcG1l/bnQtQ29tbXVuaWNh/dGlvbi1Jcy1hLVBy/aW9yaXR5XyVEMCU5/QyVEMCVCRSVEMCVC/RCVEMSU4MiVEMCVC/MCVEMCVCNiVEMCVC/RCVEMCVCMCVEMSU4/Ri0lRDAlQkUlRDAl/QjElRDAlQkIlRDAl/QjAlRDElODElRDEl/ODIlRDElOEMtMS5w/bmc" 
          alt="Learn More" 
          className="w-full h-48 object-cover rounded-lg transform transition duration-700 ease-in-out hover:scale-110" 
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">Learn More</h2>
      <p className="mt-4 text-gray-600">
        Discover more about the features and services we offer. Explore in-depth information to understand how we can help you grow and succeed. 
        We provide tailored solutions to meet your needs.
      </p>
    </div>
    );
}

export default LearnMore;