import React, { useRef } from 'react';

const Resume = () => {
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
        Resume
      </h2>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 cursor-pointer"
        onClick={handleUploadAreaClick}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
        />
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
    </section>
  );
};

export default Resume;
