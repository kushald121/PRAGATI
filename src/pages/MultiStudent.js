import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Sample JSON data for demo
const studentsData = [
    {
        name: "Mahesh Bagul",
        platform: "GitHub",
        repository: "UptoSkill’s LMS",
        milestones: "Final Review Submitted",
        progress: "8.5 out of 10",
        status: "Ongoing",
        lastActive: "July 11, 2025",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
        name: "Riya Sharma",
        platform: "Bitbucket",
        repository: "Student Tracker App",
        milestones: "Code Freeze",
        progress: "9.0 out of 10",
        status: "Completed",
        lastActive: "July 8, 2025",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Aman Verma",
        platform: "GitHub",
        repository: "Online Exam Portal",
        milestones: "Testing Phase",
        progress: "7.2 out of 10",
        status: "Ongoing",
        lastActive: "July 25, 2025",
        image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
        name: "Sneha Kulkarni",
        platform: "GitLab",
        repository: "E-Learning Platform",
        milestones: "Design Approval",
        progress: "6.8 out of 10",
        status: "In Progress",
        lastActive: "July 23, 2025",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
        name: "Kunal Joshi",
        platform: "Azure DevOps",
        repository: "Virtual Classroom",
        milestones: "Backend Integration",
        progress: "8.0 out of 10",
        status: "Ongoing",
        lastActive: "July 20, 2025",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
];


const MultiStudent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentStudent = studentsData[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? studentsData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === studentsData.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-2">Multi-Student View</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Monitor and manage all your students with their essential details in one glance.
                    </p>
                </div>

                <div className="mt-10 flex items-center justify-center">
                    <button
                        onClick={handlePrev}
                        className="text-3xl p-3 rounded-full border border-black hover:bg-gray-100 mr-4"
                    >
                        ❮
                    </button>

                    <div className="max-w-md w-full border p-6 rounded-lg shadow-sm text-center">
                        <img
                            src={currentStudent.image}
                            alt={currentStudent.name}
                            className="mx-auto mb-4 rounded-full h-24 w-24 object-cover"
                        />
                        <h2 className="text-xl font-semibold underline mb-4">
                            {currentStudent.name}
                        </h2>

                        <div className="text-left space-y-2">
                            <div className="flex justify-between">
                                <span className="font-medium">Platform</span>
                                <span>{currentStudent.platform}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Repository</span>
                                <span>{currentStudent.repository}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Milestones</span>
                                <span>{currentStudent.milestones}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Progress</span>
                                <span>{currentStudent.progress}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Status</span>
                                <span>{currentStudent.status}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Last Active</span>
                                <span>{currentStudent.lastActive}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleNext}
                        className="text-3xl p-3 rounded-full border border-black hover:bg-gray-100 ml-4"
                    >
                        ❯
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MultiStudent;
