import React, { useState } from 'react';
import InputField from './InputField';
import { MapPin, Phone, Mail } from 'lucide-react';
import useSubmitContactForm from '../hooks/useSubmitContactForm'; 

const Contact = () => {
  const { submitForm, loading, response, error } = useSubmitContactForm();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm('https://your-backend-url.com/api/contact', formData);
  };

  return (
    <>
      {/* Contact Info Section */}
      <section className="max-w-[1280px] mx-auto py-16 px-4 text-center bg-white">
        <p className="text-orange-500 font-semibold uppercase">Our Contacts</p>
        <h2 className="text-4xl font-bold mt-2">We're here to Help You</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Got a project in mind? We’d love to hear about it. Take five minutes to fill out our project form
          so that we can get to know you and understand your project.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <MapPin className="text-orange-500 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Visit Us Daily:</h3>
            <p className="text-gray-600">Palam, New Delhi, Delhi 110077</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <Phone className="text-orange-500 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Phone Us 24/7:</h3>
            <p className="text-gray-600">+91 (931) 977 2294</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <Mail className="text-orange-500 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Mail Us 24/7:</h3>
            <p className="text-gray-600">info@uptoskills.com</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-[1280px] mx-auto py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Form Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">Have some suggestions or just want to say hi? Contact us:</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <InputField
                id="name"
                type="text"
                label="Your Name *"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                isRequired
              />
              <InputField
                id="email"
                type="email"
                label="Your Email *"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                isRequired
              />
              <div className="relative w-full">
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="peer w-full border border-zinc-300 py-3 px-4 rounded-xl bg-white text-zinc-900 focus:outline-none focus:border-black"
                >
                  <option value="" disabled hidden>Select Inquiry Type</option>
                  <option value="student">Student Inquiry</option>
                  <option value="company">Company Partnership</option>
                  <option value="general">General Support</option>
                </select>
                <label
                  htmlFor="inquiryType"
                  className="absolute left-4 top-3 text-zinc-500 text-base transition-all bg-white px-1
                  peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-orange-500
                  peer-valid:top-[-10px] peer-valid:text-sm peer-valid:text-orange-500"
                >
                  Select Inquiry Type
                </label>
              </div>

              <InputField
                id="message"
                label="Message"
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
                textarea
              />

              <button
                type="submit"
                className="bg-orange-500 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-md transition-color duration-300"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send a Message'}
              </button>

              {error && <p className="text-red-500">{error}</p>}
              {response && <p className="text-green-500">Message sent successfully!</p>}
            </form>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <img
              src="/images/contact-illustration.png"
              alt="Contact Support Illustration"
              className="w-[90%] max-w-md md:max-w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
