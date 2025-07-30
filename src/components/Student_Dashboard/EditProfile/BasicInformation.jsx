import React, { useRef } from 'react';

const BasicInformation = () => {
  const fileInputRef = useRef(null);

  const openFileDialog = (event) => {
    event.stopPropagation();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUploadAreaClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
        Basic Information
      </h2>
      <div className="flex gap-4 mb-5">
        <div className="flex-1">
          <label className="block mb-2 font-medium text-gray-700">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-2 font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-5">
        <div className="flex-1">
          <label className="block mb-2 font-medium text-gray-700">Gender</label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer font-normal">
              <input type="radio" name="gender" value="male" defaultChecked />
              Male
            </label>
            <label className="flex items-center gap-2 cursor-pointer font-normal">
              <input type="radio" name="gender" value="female" />
              Female
            </label>
          </div>
        </div>
        <div
          className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 cursor-pointer"
          onClick={handleUploadAreaClick}
        >
          <input type="file" ref={fileInputRef} className="hidden" />
          <div className="text-gray-400 mb-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
          </div>
          <p className="mb-3 text-gray-500">Drop your files to upload</p>
          <button
            type="button"
            className="border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={openFileDialog}
          >
            Select files
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-5">
        <div className="flex-1">
          <label className="block mb-2 font-medium text-gray-700">Date of Birth</label>
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <select
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Class</option>
          </select>
        </div>
        <div className="flex-1">
          <select
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Section</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default BasicInformation;
