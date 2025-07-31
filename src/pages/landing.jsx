
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">

      {/* Header */}
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm transition">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <img src="/uptoskill.jpeg" alt="Uptoskills Logo" className="h-10 transition-transform hover:scale-110" />
          <nav className="flex space-x-6 font-medium text-gray-800 text-sm">
            {["Home", "About", "Programs", "Contact"].map((link, i) => (
              <a key={i} href="#" className="relative group hover:text-[#00BDA6]">
                {link}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#00BDA6] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      {/* Hero Section */}
<section className="pt-32 md:pt-44 pb-20 px-6 md:px-16 bg-gradient-to-br from-[#e0fdf4] via-[#f7fffe] to-[#c1f6e8] relative overflow-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#00BDA6] leading-tight mb-6">
        Learn. Connect. <br /> Grow with Peers.
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Collaborate with passionate learners and build real-world tech skills through projects.
      </p>
      <a href="/login">
  <button className="bg-gradient-to-r from-[#00BDA6] to-[#1BBC9B] hover:from-[#f97316] hover:to-[#fb923c] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-500">
    🔐 Login
  </button>
</a>

    </motion.div>

    {/* Animated Illustrations */}
    <div className="relative flex justify-center items-center">
      <motion.img
        src="https://img.freepik.com/free-vector/online-world-concept-illustration_114360-1206.jpg"
        alt="Main Hero"
        className="w-72 md:w-80 rounded-xl shadow-2xl z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.9 }}
      />

      <motion.img
        src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
        alt="Secondary Hero"
        className="absolute top-[-40px] right-[-30px] w-40 md:w-48 shadow-xl rounded-lg z-0 opacity-80"
        initial={{ scale: 0.9, rotate: -5, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      />

      <motion.img
        src="https://img.freepik.com/free-vector/college-project-concept-illustration_114360-7793.jpg"
        alt="Floating Hero"
        className="absolute bottom-[-30px] left-[-30px] w-36 md:w-44 rounded-lg shadow-md opacity-90"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [20, 0, 20], opacity: 1 }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
    </div>
  </div>
</section>


      {/* Features */}
      {/* Features Section */}
<section className="py-20 px-6 md:px-16 bg-white text-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-10">What We Offer</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[
      {
        title: "For Learners",
        icon: "https://static.thenounproject.com/png/7914064-512.png",
        desc: "Sharpen your tech skills with projects and peer sessions."
      },
      {
        title: "For Companies",
        icon: "https://cdn-icons-png.flaticon.com/512/2858/2858749.png",
        desc: "Hire pre-vetted, job-ready talent from our community."
      },
      {
        title: "Success Stories",
        icon: "https://cdn-icons-png.flaticon.com/512/3159/3159980.png",
        desc: "Real journeys of learners growing into tech professionals."
      }
    ].map((box, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform transition 
          bg-gradient-to-br from-[#00BDA6] to-[#1BBC9B] 
          hover:from-[#f97316] hover:to-[#fb923c]"
      >
        <img
          src={box.icon}
          alt={box.title}
          className="h-14 mx-auto mb-4 bg-white p-2 rounded-full shadow-md"
        />
        <h3 className="text-xl font-semibold mb-2">{box.title}</h3>
        <p className="text-sm">{box.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* Partners */}
      <section className="py-16 bg-[#f9f9f9] text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Trusted by Top Companies</h3>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {[
            "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tata.svg",
            "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/infosys.svg",
            "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          ].map((logo, i) => (
            <motion.img key={i} src={logo} alt="partner" className="h-10 grayscale hover:grayscale-0 transition duration-300" />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 text-sm">
        <p>© 2025 Uptoskills. Built with 💻 by learners worldwide.</p>
      </footer>
    </div>
  );
}
