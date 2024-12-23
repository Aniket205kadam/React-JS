import React from "react";

function Features() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Services</h1>
          <p className="text-lg text-gray-600">
            Discover a wide range of solutions that are designed to make your business better.
          </p>
        </div>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12">
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <img
              src="https://imgs.search.brave.com/D2YKTcB4l5_WhSgtov7LoaW0jBQCpSY0RIID7q2e13s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzk3LzYzLzAw/LzM2MF9GXzg5NzYz/MDAzNl80aGJvYUNn/YjhDSElrWjc4dWRE/TWhMM1pZa2lwaHBp/dy5qcGc"
              alt="Service 1"
              className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center text-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl font-semibold">Web Development</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <img
              src="https://imgs.search.brave.com/6uM2v-yM3Hb2Vt0MfENmLCKDJUzgrvTmoJCj3T8pbM0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjI4/NTgwNDQ2L3Bob3Rv/L2FwcGxpY2F0aW9u/LWRldmVsb3BlcnMt/YXQtd29yay5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Q2dS/eHB5WUM5Yk5jSWJa/R0ZXRGRDbnhRUXpD/dWxiZHJOYTdXMnl3/eGg3MD0"
              alt="Service 2"
              className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center text-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl font-semibold">Mobile Apps</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
            <img
              src="https://imgs.search.brave.com/iZOTBZNF9G47hN9JLUSivGiukIBVTnqlvWaY62UzDHQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hcGku/YmFja2xpbmtvLmNv/bS9hcHAvdXBsb2Fk/cy8yMDIxLzA1L3Nl/by1pcy1hYm91dC1p/bXByb3ZpbmctYS1z/aXRlcy1vcmdhbmlj/LXJhbmtpbmcucG5n"
              alt="Service 3"
              className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center text-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl font-semibold">SEO Optimization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Features;