import React from 'react';

const FormActions = () => {
  const handleReset = () => {
    window.location.reload();
  };

  const handleSave = () => {
    alert('Form saved successfully!');
  };

  return (
    <div className="flex gap-3 mt-6 form-actions">
      <button
        className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg font-semibold transition-colors duration-300 hover:bg-gray-300 focus:outline-none"
        onClick={handleReset}
      >
        Reset
      </button>
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition-transform duration-200 hover:bg-blue-700 hover:scale-105 focus:outline-none"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default FormActions;
