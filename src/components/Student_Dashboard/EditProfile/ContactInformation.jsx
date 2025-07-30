import React from 'react';

const ContactInformation = () => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
        Contact Information
      </h2>
      <div className="flex gap-4 mb-5">
        <div className="flex-1">
          <label className="block mb-2 font-medium text-gray-700">Phone</label>
          <input
            type="text"
            placeholder="Contact number"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block mb-2 font-medium text-gray-700">Address</label>
        <input
          type="text"
          placeholder="Area and Street"
          className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-4 mb-5">
        <input
          type="text"
          placeholder="Location"
          className="flex-1 px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="District"
          className="flex-1 px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Pincode"
          className="flex-1 px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="State"
          className="flex-1 px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </section>
  );
};

export default ContactInformation;
