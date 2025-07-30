import React from 'react';

const DOMAIN_OPTIONS = [
  'Web Development',
  'Full Stack Development',
  'AI',
  'ML',
  'Data Science',
  'Cloud Computing',
  'Cybersecurity',
  'Blockchain',
  'App Development',
];

const DomainsOfInterest = ({ selectedDomains, onChange, othersValue }) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    onChange(value, checked);
  };

  const handleOthersChange = (e) => {
    onChange('others', e.target.value);
  };

  return (
    <div className="domains-container p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Domains of Interest</h3>
      <div className="domains-list grid grid-cols-2 gap-4 mb-4">
        {DOMAIN_OPTIONS.map((domain) => (
          <div key={domain} className="form-group checkbox-group flex items-center space-x-2">
            <input
              type="checkbox"
              id={`domain_${domain}`}
              value={domain}
              checked={selectedDomains.includes(domain)}
              onChange={handleCheckboxChange}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label htmlFor={`domain_${domain}`} className="text-gray-700">{domain}</label>
          </div>
        ))}
      </div>
      <div className="form-group">
        <label htmlFor="others" className="block mb-2 font-medium text-gray-700">Others</label>
        <input
          type="text"
          id="others"
          name="others"
          value={othersValue || ''}
          onChange={handleOthersChange}
          placeholder="Please specify other domains"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default DomainsOfInterest;
