import React from "react";
import { useFetch } from "../services/useFetch";
import UserCard from "../components/UsersCard";
import Navbar from "../components/Navbar";

const UsersProducts = () => {
  const { data, loading } = useFetch("https://fakestoreapi.com/users");

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <p className="mb-4 text-cyan-700 font-semibold text-lg animate-pulse">
          Loading your Experience
        </p>

        {/* points */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce"></span>
        </div>
      </div>
    );
  }
  return (
    <section className="bg-gray-50 min-h-screen pt-20 pb-10 select-none">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        {/* title */}
        <h1 className="text-3xl font-bold text-neutral-800 text-center mb-8">
          🏆 Premium customers who have purchased the most in the year
        </h1>
        {/* user grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center max-w-6xl mx-auto px-6">
          {data?.map((user) => (
            <UserCard
              key={user.id}
              username={user.username}
              email={user.email}
              phone={user.phone}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsersProducts;
