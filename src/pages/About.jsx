import React from "react";
import { FaHandshake, FaBullseye, FaUsers, FaAward } from "react-icons/fa";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <section className="bg-gray-50 min-h-screen pt-20 pb-12 select-none">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        {/* title */}
        <h1 className="text-3xl font-bold text-center text-neutral-800 mb-10">
          About <span className="text-cyan-600">TrendyMart</span>
        </h1>

        {/* introduction */}
        <p className="text-center text-neutral-600 max-w-3xl mx-auto mb-12">
          At TrendyMart, we believe that shopping should be a simple, safe, and
          exciting experience. Since our inception, we have been dedicated to
          offering quality products and service that exceeds expectations.
        </p>

        {/* section grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* mission */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <FaBullseye className="text-cyan-600 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">our mission</h2>
            <p className="text-neutral-600 text-sm">
              Provide carefully selected products at fair prices and exceptional
              customer service.
            </p>
          </div>

          {/* values */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <FaHandshake className="text-cyan-600 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Our Values</h2>
            <p className="text-neutral-600 text-sm">
              Honesty, commitment, and passion for what we do, always with our
              customers in mind.
            </p>
          </div>

          {/* team */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <FaUsers className="text-cyan-600 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Our Team</h2>
            <p className="text-neutral-600 text-sm">
              A group of passionate people working to make your shopping
              experience unique.
            </p>
          </div>

          {/* achievements */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <FaAward className="text-cyan-600 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">our achievements</h2>
            <p className="text-neutral-600 text-sm">
              More than 5,000 satisfied customers and constant growth thanks to
              your trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
