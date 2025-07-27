import React, { useState } from "react";
import { Mail, Lock, UserPlus, User } from "lucide-react";

const UserCards = ({ darkMode, users }) => {
  return (
    <section
      id="usercard"
      className={`min-h-screen py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            This is{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              UserCard Section
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Accepts "Name and Email" props
          </p>
        </div>

        {/* User Cards Grid */}
        {users.length === 0 ? (
          <div className="text-center py-20">
            <div
              className={`w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6`}
            >
              <Users size={32} />
            </div>
            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              No users yet
            </h3>
            <p
              className={`text-lg mb-8 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Be the first to join our community!
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("signup")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sign Up Now
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {users.map((user, index) => (
              <div
                key={user.id}
                className={`group rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700 hover:bg-gray-750"
                    : "bg-white border border-gray-200 hover:shadow-xl"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* User Avatar */}
                <div className="flex items-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold`}
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-4">
                    <h3
                      className={`text-xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {user.name}
                    </h3>
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Member
                    </p>
                  </div>
                </div>

                {/* User Info */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail
                      className={`mr-3 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                      size={18}
                    />
                    <span
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {user.email}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                <div
                  className={`mt-6 pt-4 border-t transition-all duration-300 ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <span
                    className={`text-sm font-medium ${
                      darkMode
                        ? "text-gray-400 group-hover:text-gray-300"
                        : "text-gray-500 group-hover:text-gray-700"
                    } transition-colors duration-300`}
                  >
                    Joined recently
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        {/*End task */}
        <footer className="text-center py-6 mt-10 ">
          <p className="text-sm text-gray-600 dark:text-gray-400 px-4">
            Check my portfolio
            <span className="mt-1 font-semibold text-blue-600 dark:text-blue-400">
              <a
                href="https://harsh-portfolioo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Harsh Nimbalkar
              </a>
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              Frontend Assignment Task Completed – July 2025
            </span>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default UserCards;
