import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

 import { ChevronDown } from "lucide-react"; // make sure it's imported
import {
  Globe,
  Bot,
  Wifi,
  ShieldCheck,
  User,
  Users,
  Circle,
  CircleDot,
  CircleSlash,
  SlidersHorizontal
} from "lucide-react";
const dummyProjects = [
  {
    title: "AI Chatbot",
    date: "2024-03-15",
    duration:"4 weeks",
    projectType: "Uptoskills Company Project",
    description: "Chatbot Built with Python and TensorFlow.",
    github: "https://github.com/kushagra/project",
    domain: "Ai/ML",
    type: "Group",
    difficulty: "Medium",
    contributors: ["Kushagra", "Shikhar", "Akshit"],
    image:"https://cdn-icons-png.freepik.com/512/1698/1698535.png"
    
  },
  {
    title: "Portfolio Website",
    date: "2024-06-25",
    duration:"2 weeks",
    projectType: "Open Source",
    description: "Show profile using React and TailwindCSS.",
    github: "https://github.com/kushagra/project",
    domain: "Web",
    type: "Individual",
    difficulty: "Easy",
    contributors: ["Kushagra"],
    image:"https://cdn-icons-png.freepik.com/256/7867/7867446.png?semt=ais_hybrid"

    
  },
  {
    title: "Airbnb Clone",
    date: "2024-07-15",
    duration:"2 weeks",
    projectType: "Open Source",
    description: "Made using React, Nodejs and TailwindCSS.",
    github: "https://github.com/kushagra/project",
    domain: "Web",
    type: "Individual",
    difficulty: "Easy",
    contributors: ["Kushagra"],
    image:"https://img.freepik.com/premium-vector/bubbly-stays-vector-icon-airbnb_720724-3093.jpg"
  },
  {
    title: "Netflix Clone",
    date: "2024-01-11",
    duration:"2 weeks",
    projectType: "Open Source",
    description: "Made using React, Nodejs and TailwindCSS.",
    github: "https://github.com/kushagra/project",
    domain: "Web",
    type: "Group",
    difficulty: "Medium",
    contributors: ["Kushagra", "Nandani", "Janhavi", "Nitu"],
    image:"https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
  },
  {
    title: "Resume Builder",
    date: "2024-03-25",
    duration:"2 weeks",
    projectType: "Open Source",
    description: "Helps to build resumes,made using React.",
    github: "https://github.com/kushagra/project",
    domain: "Web",
    type: "Group",
    difficulty: "Easy",
    contributors: ["Kushagra", "Harnish"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcP_S0nBLZhsn6wn4LftrklqpArQLFh_49g&s"
  },
  {
    title: "Hack Prevention",
    date: "2024-08-18",
    duration:"2 weeks",
    projectType: "Open Source",
    description: "Prevent hack activities using cryptography.",
    github: "https://github.com/kushagra/project",
    domain: "Cyber",
    type: "Group",
    difficulty: "Easy",
    contributors: ["Nandani", "Janhavi","Nitu" ,"Kushagra"],
    image:"https://www.shutterstock.com/shutterstock/photos/758748727/display_1500/stock-vector-stop-hacker-ransomware-forbidden-signal-icon-on-white-background-vector-illustration-cybercrime-758748727.jpg"
  },
  {
    title: "ChatGPT Clone",
    date: "2025-02-19",
    duration:"2 weeks",
    projectType: "Open Source",
    description: "Generative AI built using HTML, CSS, Javascript.",
    github: "https://github.com/kushagra/project",
    domain: "Web",
    type: "Group",
    difficulty: "Hard",
    contributors: ["Kushagra", "Harnish"],
    image:"https://img.icons8.com/?size=512&id=kTuxVYRKeKEY&format=png"
  },
  {
    title: "IoT Plant Monitor",
    date: "2025-03-27",
    duration:"2 weeks",
    projectType: "Open Source",
    description: "Monitors soil moisture and temp using NodeMCU.",
    github: "https://github.com/kushagra/project",
    domain: "IoT",
    type: "Group",
    difficulty: "Hard",
    contributors: ["Shikhar", "Rizwan", "Kushagra"],
    image:"https://play-lh.googleusercontent.com/0iQhGlgBmUqD_CJ1sglSdppVocP0_VXruGrE5nitXotFqlZosvZcJqF_AmgFsmh-W6Q=w240-h480-rw"
  },
  {
    title: "IoT Water Purifier",
    date: "2025-04-14",
    duration:"2 weeks",
    projectType: "Open Source",
    description: "Purifies Water with Advanced iot tools and Techniques.",
    github: "https://github.com/kushagra/project",
    domain: "IoT",
    type: "Group",
    difficulty: "Hard",
    contributors: ["Shikhar", "Rizwan", "Kushagra"],
    image:"https://cdn-icons-png.flaticon.com/512/4992/4992693.png"
  },
];

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({
    domain: "All",
    type: "All",
    difficulty: "All",
  });
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(dummyProjects);
    // Future: fetch('/api/projects')
  }, []);

  const filtered = projects.filter((p) => {
    const domainMatch = filters.domain === "All" || p.domain === filters.domain;
    const typeMatch = filters.type === "All" || p.type === filters.type;
    const diffMatch =
      filters.difficulty === "All" || p.difficulty === filters.difficulty;
    return domainMatch && typeMatch && diffMatch;
  });

  const handleFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };


return (
  <div className="px-4 py-6">
    {/* Filter Bar */}
    <div className="flex flex-wrap justify-center gap-6 mb-6">
      {[
        {
          label: "All Domains",
          value: "domain",
          options: ["All", "Web", "Ai/ML", "IoT", "Cyber"],
          icons: {
            Web: <Globe className="inline-block w-4 h-4 mr-1" />,
            "Ai/ML": <Bot className="inline-block w-4 h-4 mr-1" />,
            IoT: <Wifi className="inline-block w-4 h-4 mr-1" />,
            Cyber: <ShieldCheck className="inline-block w-4 h-4 mr-1" />,
          },
          icon: <Globe className="w-4 h-4" />,
        },
        {
          label: "All Types",
          value: "type",
          options: ["All", "Individual", "Group"],
          icons: {
            Individual: <User className="inline-block w-4 h-4 mr-1" />,
            Group: <Users className="inline-block w-4 h-4 mr-1" />,
          },
          icon: <Users className="w-4 h-4" />,
        },
        {
          label: "All Difficulties",
          value: "difficulty",
          options: ["All", "Easy", "Medium", "Hard"],
          icons: {
            Easy: <Circle className="inline-block w-4 h-4 text-green-500 mr-1" />,
            Medium: <CircleDot className="inline-block w-4 h-4 text-yellow-500 mr-1" />,
            Hard: <CircleSlash className="inline-block w-4 h-4 text-red-500 mr-1" />,
          },
          icon: <SlidersHorizontal className="w-4 h-4" />,
        },
      ].map((filter, idx) => (
        <div key={idx} className="relative w-44">
          <select
            onChange={(e) => handleFilter(filter.value, e.target.value)}
            className="appearance-none w-full px-4 py-2 pl-10 pr-10 bg-orange-100 text-gray-800 font-semibold text-sm rounded-xl border border-orange-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
          >
            {filter.options.map((opt, i) => (
              <option key={i} value={opt}>
                {opt === "All" ? filter.label : opt}
              </option>
            ))}
          </select>

          {/* Left icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600 pointer-events-none">
            {filter.icon}
          </div>

          {/* Dropdown arrow on right */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-600 pointer-events-none">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      ))}
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((proj, idx) => (
        <ProjectCard
          key={idx}
          project={proj}
          onClick={() => setSelectedProject(proj)}
        />
      ))}
    </div>

    {/* Modal */}
    {selectedProject && (
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    )}
  </div>
);



};

export default ProjectShowcase;
