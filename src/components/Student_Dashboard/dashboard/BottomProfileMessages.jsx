import React from 'react';

function BottomProfileMessages() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Profile Progress */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Profile Completion</h4>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
        </div>
        <span className="text-sm text-gray-600">80%</span>

        <h4 className="text-lg font-semibold mt-4 mb-2">Profile Strength</h4>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-yellow-400 h-4 rounded-full" style={{ width: '45%' }}></div>
        </div>
        <span className="text-sm text-gray-600">45%</span>
      </div>

      {/* Messages */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-semibold">Messages</h4>
          <button className="text-blue-500 hover:text-blue-700 focus:outline-none">→</button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <img src="https://csspicker.dev/api/image/?q=person+avatar&image_type=photo" alt="Jane Cooper" className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-medium">Jane Cooper</div>
              <div className="text-sm text-gray-600">Hey, how's your project going?</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <img src="https://csspicker.dev/api/image/?q=woman+avatar&image_type=photo" alt="Kristin Watson" className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-medium">Kristin Watson</div>
              <div className="text-sm text-gray-600">Can you help me with...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomProfileMessages;
