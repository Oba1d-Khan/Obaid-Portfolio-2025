"use client";
import React from "react";
const Contact: React.FC = () => {
  return (
    <>
      <section className="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8  mx-auto ">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-[2.5rem] text-whitish font-bold leading-[3.2rem] ">
              Contact Me
            </h1>
            <p className="text-sm md:text-xl font-firaCode mt-3 text-brightGray leading-5 tracking-wide ">
              Got an inspiring project concept?
              <br />
              Let&apos;s Connect!
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto font-firaCode">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
            <h2 className="mb-8 text-xl font-semibold text-whitish ">
              Fill in the form
            </h2>

            <form>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-whitish ">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="user_firstName"
                      id="hs-firstname-contacts-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-200 dark:border-gray-700 dark:text-gray-800 dark:focus:ring-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm  font-medium text-whitish ">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="user_lastName"
                      id="hs-lastname-contacts-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-200 dark:border-gray-700 dark:text-gray-800 dark:focus:ring-gray-600"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block mb-2 text-sm  font-medium text-whitish ">
                      Email
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      id="hs-email-contacts-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-200 dark:border-gray-700 dark:text-gray-800 dark:focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-whitish ">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="user_contact"
                      id="hs-phone-number-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-200 dark:border-gray-700 dark:text-gray-800 dark:focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm  font-medium text-whitish ">
                    Message
                  </label>
                  <textarea
                    required
                    name="user_message"
                    rows={6}
                    id="hs-about-contacts-1"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-200 dark:border-gray-700 dark:text-gray-800 dark:focus:ring-gray-600"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="button"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-coolCyan text-gray-900 hover:bg-cyan-300 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Send Email !
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-brightGray">
                  This is a demo form. Email functionality is disabled.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
