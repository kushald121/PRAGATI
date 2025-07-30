import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contributionsData = [
    {
        platform: "GitHub",
        platformIcon: "github",
        repository: "UptoSkills LMS",
        summary: "Fixed bug in admin dashboard",
        date: "September 23, 2024",
    },
    {
        platform: "OpenPanda",
        platformIcon: "gitlab",
        repository: "OpenEdx Platform",
        summary: "Fixed issue error ants",
        date: "January 22, 2024",
    },
    {
        platform: "GitHub",
        platformIcon: "github",
        repository: "OpenEdx Platform",
        summary: "Fixed UI flaws",
        date: "August 31, 2023",
    },
    {
        platform: "GitLab",
        platformIcon: "gitlab",
        repository: "Grafana",
        summary: "Fixed UX progress",
        date: "February 14, 2023",
    },
    {
        platform: "OpenPanda",
        platformIcon: "github",
        repository: "OpenEdx Platform",
        summary: "Implementation of new client type",
        date: "December 11, 2022",
    },
    {
        platform: "OpenPanda",
        platformIcon: "github",
        repository: "Godotx",
        summary: "Adding the manual function",
        date: "November 2, 2022",
    },
];

const platformIcons = {
    github: (
        <svg
            height="20"
            width="20"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="inline-block mr-2 text-gray-600 dark:text-white"
        >
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c..."></path>
        </svg>
    ),
    gitlab: (
        <svg
            height="20"
            width="20"
            viewBox="0 0 36 36"
            fill="currentColor"
            className="inline-block mr-2 text-orange-600"
        >
            <path d="M18 0L12.8 10.666H1.2L15.2 35.333..."></path>
        </svg>
    ),
};

function OpenSourceContributions() {
    const [selectedUser, setSelectedUser] = useState("Mahesh Bagul");

    const onUserChange = (e) => {
        setSelectedUser(e.target.value);
    };

    return (
        <>
            <Navbar />

            <main className="px-6 py-10 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Open Source Contributions</h1>
                <p className="text-center text-gray-600 mb-8">
                    Monitor, review and approve your student’s commits, pull requests, and milestones across open-source platforms.
                </p>

                <section className="mb-10">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                        <button className="text-white bg-activity px-4 py-2 rounded shadow hover:bg-activity-hover transition duration-300 delay-50">
                            Activity
                        </button>


                        <select
                            value={selectedUser}
                            onChange={onUserChange}
                            className="border border-gray-300 rounded px-3 py-2 text-gray-700"
                            aria-label="Select user"
                        >
                            <option value="Mahesh Bagul">Mahesh Bagul</option>
                            {/* Add more users as needed */}
                        </select>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 shadow rounded-lg overflow-hidden">
                            <thead className="bg-gray-100 text-left text-gray-700">
                                <tr>
                                    <th className="px-4 py-3">Platform</th>
                                    <th className="px-4 py-3">Repository</th>
                                    <th className="px-4 py-3">Summary</th>
                                    <th className="px-4 py-3">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {contributionsData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition">
                                        <td className="px-4 py-3 flex items-center">

                                            <span>{item.platform}</span>
                                        </td>
                                        <td className="px-4 py-3">{item.repository}</td>
                                        <td className="px-4 py-3">{item.summary}</td>
                                        <td className="px-4 py-3">{item.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default OpenSourceContributions;
