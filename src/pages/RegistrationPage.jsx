import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/ET-logo.jpeg';

const RegistrationPage = () => {
  return (
    <>
      <section className="bg-indigo-50 rounded-xl shadow-md relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto m-14">
          <div className="g-6 flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full max-w-lg">
              <div className="block rounded-lg bg-white shadow-md">
                <div className="px-4 md:px-0">
                  <div className="md:mx-6 md:p-8 text-center">
                    <div>
                      <img className="mx-auto w-28" src={logo} alt="logo" />
                      <h4 className="mb-6 mt-1 text-4xl font-semibold text-gray-700">
                        Register
                      </h4>
                    </div>
                    <form>
                      <p className="mb-6 text-xl text-gray-700">
                        Please create a new account
                      </p>
                      {/* Role select field*/}
                      <div className="mb-4 text-left">
                        <label
                          htmlFor="type"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Role
                        </label>
                        <select
                          id="type"
                          name="type"
                          className="border rounded w-full py-2 px-3 mb-2 text-black"
                          required
                        >
                          <option value="Recruiter">Recruiter</option>
                          <option value="Job Seeker">Job Seeker</option>
                        </select>
                      </div>
                      {/* Email input */}
                      <div className="mb-4 text-left">
                        <label className="block font-bold mb-2 text-gray-700">
                          Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="border rounded w-full py-2 px-3 mb-2 text-black"
                          placeholder="test@example.com"
                          required
                        />
                      </div>

                      {/* First name input */}
                      <div className="mb-4 text-left">
                        <label className="block font-bold mb-2 text-gray-700">
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="border rounded w-full py-2 px-3 mb-2 text-black"
                          placeholder="John"
                          required
                        />
                      </div>

                      {/* Last name input */}
                      <div className="mb-4 text-left">
                        <label className="block font-bold mb-2 text-gray-700">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="border rounded w-full py-2 px-3 mb-2 text-black"
                          placeholder="Doe"
                          required
                        />
                      </div>

                      {/* Phone input */}
                      <div className="mb-4 text-left">
                        <label className="block font-bold mb-2 text-gray-700">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="border rounded w-full py-2 px-3 mb-2 text-black"
                          placeholder="+92 1112223334"
                          required
                        />
                      </div>

                      {/* Password input */}
                      <div className="mb-6 text-left">
                        <label className="block font-bold mb-2 text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="border rounded w-full py-2 px-3 mb-2 text-black"
                          placeholder="*********"
                          required
                        />
                      </div>

                      {/* Confirm Password input */}
                      <div className="mb-6 text-left">
                        <label className="block font-bold mb-2 text-gray-700">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          className="border rounded w-full py-2 px-3 mb-2 text-black"
                          placeholder="*********"
                          required
                        />
                      </div>

                      {/* Submit button */}
                      <div className="mb-8 pb-2 text-center text-xl">
                        <button
                          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      {/* Register button */}
                      <div className="flex items-center justify-center pb-6">
                        <p className="mb-0 mr-2 text-gray-700">
                          Have an account?
                        </p>
                        <Link
                          to={`/login`}
                          className="inline-block rounded border-2 border-indigo-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-indigo-500 transition duration-150 ease-in-out hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600 focus:border-indigo-600 focus:text-indigo-600 focus:outline-none focus:ring-0 active:border-indigo-700 active:text-indigo-700"
                        >
                          Login
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationPage;
