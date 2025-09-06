import React from "react";
import { FaMapMarkerAlt, FaStore } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section className="bg-gray-50 min-h-screen pt-20 select-none">
      <Navbar />
      {/* Wlcome */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <FaStore className="text-cyan-600 text-6xl" />
        </div>
        <h1 className="text-4xl font-bold text-neutral-800 mb-4">
          welcome to <span className="text-cyan-600">TrendyMart</span>
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Your trusted store for quality products at the best price. From
          fashion to technology, we have everything you need in one place.
        </p>
      </div>

      {/* Info Section */}
      <div className="bg-white shadow-md rounded-xl max-w-5xl mx-auto p-8 grid md:grid-cols-2 gap-8">
        {/* about the store */}
        <div>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
            About Us
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            En <strong>TrendyMart</strong> We are passionate about offering you
            a unique shopping experience. We focus on carefully selected
            products, fast shipping, and personalized service.
          </p>
        </div>

        {/* location */}
        <div>
          <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
            Our Location
          </h2>
          <div className="flex items-center gap-3 text-neutral-600">
            <FaMapMarkerAlt className="text-cyan-600 text-2xl" />
            <span>
              Sambil Paraguaná, Avenida Intercomunal Alí Primera, Punto Fijo,
              Falcón, Venezuela
            </span>
          </div>
          <iframe
            title="Ubicación Sambil Paraguaná"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3907.128421352817!2d-70.17366!3d11.68531!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses!2sve!4v1757187379254!5m2!1ses!2sve"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg mt-4"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Home;
