import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const students = [
    {
        name: "Angat Mali",
        email: "angat.mali@example.com",
        project: "Learning Platform",
        progress: 40,
        avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
        name: "Pragya Jha",
        email: "pragya.jha@example.com",
        project: "Portfolio Website",
        progress: 70,
        avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
        name: "Freddy Fernandes",
        email: "freddy.fernandes@example.com",
        project: "Mobile App",
        progress: 60,
        avatar: "https://i.pravatar.cc/100?img=3",
    },
    {
        name: "Pravin Goswami",
        email: "pravin.goswami@example.com",
        project: "Learning Platform",
        progress: 30,
        avatar: "https://i.pravatar.cc/100?img=4",
    },
    {
        name: "Shruti Biradar",
        email: "shruti.biradar@example.com",
        project: "Learning Platform",
        progress: 80,
        avatar: "https://i.pravatar.cc/100?img=5",
    },
];

const ProjectsProgress = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 px-6 py-10 text-center">
                <h1 className="text-4xl font-bold mb-2">
                    Track Assigned Students <br /> and Progress
                </h1>
                <p className="text-gray-600 mb-8">
                    View and manage the students assigned to you with detailed profiles and progress logs.
                </p>

                <div className="max-w-5xl mx-auto overflow-hidden rounded-xl border border-gray-200">
                    <table className="w-full table-auto border-collapse">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="text-left px-6 py-4 text-base font-semibold text-gray-800 w-2/5">Student</th>
                                <th className="text-left px-6 py-4 text-base font-semibold text-gray-800">Project</th>
                                <th className="text-left px-6 py-4 text-base font-semibold text-gray-800">Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index} className="border-b border-gray-100">
                                    <td className="px-6 py-4 text-gray-700 text-left">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={student.avatar}
                                                alt={student.name}
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <div className="text-left">
                                                <div className="font-medium">{student.name}</div>
                                                <div className="text-sm text-gray-500">{student.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-left text-gray-700">{student.project}</td>
                                    <td className="px-6 py-4">
                                        <div className="bg-gray-200 rounded-full h-2.5 w-full">
                                            <div
                                                className="bg-blue-600 h-full rounded-full"
                                                style={{ width: `${student.progress}%` }}
                                            ></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectsProgress;
