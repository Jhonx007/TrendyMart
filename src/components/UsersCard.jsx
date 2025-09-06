import React from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const UserCard = ({ username, email, phone }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-60 hover:shadow-lg transition-shadow duration-300">
      {/* icons */}
      <div className="flex items-center gap-3 mb-4">
        <FaUser className="text-cyan-600 text-3xl" />
        <h2 className="text-xl font-semibold text-neutral-800">{username}</h2>
      </div>

      {/* email*/}
      <div className="flex items-center gap-2 text-neutral-600 mb-2">
        <FaEnvelope className="text-cyan-500" />
        <span className="break-all">{email}</span>
      </div>

      {/* phone */}
      <div className="flex items-center gap-2 text-neutral-600">
        <FaPhone className="text-cyan-500" />
        <span>{phone}</span>
      </div>
    </div>
  );
};

export default UserCard;
