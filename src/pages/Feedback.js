import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Feedback = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-grow px-6 md:px-20 py-10">
                <h1 className="text-3xl md:text-4xl font-semibold text-center mb-2 text-shadow-md">
                    Feedback & Approvals
                </h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-shadow-sm">
                    Guide and support your students’ milestones through approval and thought-provoking feedback.
                </p>

                <form className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <label className="text-lg font-medium mb-2 md:mb-0 text-shadow-sm">
                            Student
                        </label>
                        <select
                            className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                            defaultValue="Badaas Ravi Kumar"
                        >
                            <option>Badaas Ravi Kumar</option>
                            <option>Mahesh Bagul</option>
                            <option>Ashwini Sharma</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-medium mb-2 text-shadow-sm">
                            Milestone
                        </label>
                        <input
                            type="text"
                            placeholder="Enter milestone"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-medium mb-2 text-shadow-sm">
                            Feedback
                        </label>
                        <textarea
                            rows="8"
                            placeholder="Enter feedback"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="text-white bg-activity px-4 py-2 rounded shadow hover:bg-activity-hover transition duration-300 delay-50"
                        >
                            Approve
                        </button>
                    </div>
                </form>
            </main>

            <Footer />
        </div>
    );
};

export default Feedback;
