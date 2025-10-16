import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Clock, Globe } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering businesses through innovative technology and strategic solutions.',
    },
    {
      icon: Eye,
      title: 'Visionary Approach',
      description: 'Leading the future of business transformation with cutting-edge solutions.',
    },
    {
      icon: Award,
      title: 'Excellence First',
      description: 'Committed to delivering exceptional quality in every project we undertake.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships with our clients.',
    },
  ]



  


  return (
    <div className="min-h-screen relative bg-[#050517] text-[#F9FAFB] overflow-hidden">
      
      {/* ------------------- Cosmic Background ------------------- */}
      <div className="absolute inset-0 z-0">
        {/* Twinkling Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.5, 0.5] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
          />
        ))}

         {/* Nebula Effect */}
    <motion.div
      className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full"
      style={{
        background: `radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)`,
      }}
      animate={{
        x: [0, 30, 0],
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

        {/* Shooting Stars */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-2 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ x: [0, 300], y: [0, 150], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: Math.random() * 10 }}
          />
        ))}

        {/* Nebula */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)' }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* AI Circuits */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32"
          style={{
            background: 'linear-gradient(45deg, transparent 40%, rgba(0,255,214,0.1) 50%, transparent 60%)',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24"
          style={{
            background: 'linear-gradient(135deg, transparent 30%, rgba(255,77,109,0.1) 50%, transparent 70%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
          animate={{ rotate: [0, -360], scale: [1, 0.8, 1], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
        />

        {/* Data Streams */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FFD6]/20 to-transparent"
          animate={{ x: ['-100%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF4D6D]/20 to-transparent"
          animate={{ x: ['100%', '-100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#00FFD6]/20 to-[#FF4D6D]/20 blur-sm"
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-[#FFB200]/20 to-[#9333EA]/20 blur-sm"
          animate={{ y: [0, 40, 0], x: [0, -15, 0], scale: [1, 0.8, 1], rotate: [0, -180, -360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Floating Orbs */}
        <motion.div className="absolute top-20 right-1/3 w-8 h-8 rounded-full bg-[#00FFD6]/30 shadow-lg shadow-[#00FFD6]/20"
          animate={{ y: [0, -60, 0], x: [0, 40, 0], scale: [1, 1.3, 1], boxShadow: ['0 0 20px rgba(0,255,214,0.2)','0 0 40px rgba(0,255,214,0.4)','0 0 20px rgba(0,255,214,0.2)'] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div className="absolute bottom-32 left-1/5 w-10 h-10 rounded-full bg-[#FF4D6D]/30 shadow-lg shadow-[#FF4D6D]/20"
          animate={{ y: [0, 50, 0], x: [0, -30, 0], scale: [1, 0.8, 1], boxShadow: ['0 0 20px rgba(255,77,109,0.2)','0 0 50px rgba(255,77,109,0.5)','0 0 20px rgba(255,77,109,0.2)'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>
      {/* ---------------------------------------------------------- */}

      {/* ------------------ Foreground Content ------------------ */}
      <div className="relative z-10">
        {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#050517] text-center px-4 overflow-hidden py-32">
  {/* === Cosmic Animated Background (Behind Card) === */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {/* Decorative background gradient */}
    {/* Twinkling Stars */}
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.5, 0.5] }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      />
    ))}

    {/* Shooting Stars */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`shoot-${i}`}
        className="absolute w-2 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{ x: [0, 300], y: [0, 150], opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: Math.random() * 10,
        }}
      />
    ))}

    {/* Nebula and Glow Layers */}
    <motion.div
      className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)",
      }}
      animate={{
        x: [0, 30, 0],
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute top-1/3 left-1/4 w-32 h-32"
      style={{
        background:
          "linear-gradient(45deg, transparent 40%, rgba(0,255,214,0.1) 50%, transparent 60%)",
        clipPath:
          "polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%)",
      }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />

    {/* Floating Orbs */}
    <motion.div
      className="absolute top-20 right-1/3 w-8 h-8 rounded-full bg-[#00FFD6]/30 shadow-lg shadow-[#00FFD6]/20"
      animate={{
        y: [0, -60, 0],
        x: [0, 40, 0],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-32 left-1/5 w-10 h-10 rounded-full bg-[#FF4D6D]/30 shadow-lg shadow-[#FF4D6D]/20"
      animate={{
        y: [0, 50, 0],
        x: [0, -30, 0],
        scale: [1, 0.8, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3,
      }}
    />
  </div>

  {/* === Foreground Content (Card + Heading) === */}
  <div className="relative z-10">
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-12 bg-clip-text text-transparent 
                 bg-gradient-to-r from-[#00FFD5] via-[#FD019C] to-[#FFB200]"
    >
      About Us
    </motion.h1>

    {/* Floating Glowing Card */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-[900px] p-12 rounded-3xl 
                 shadow-[0_0_50px_rgba(0,255,214,0.2),0_0_80px_rgba(255,77,109,0.15)]
                 text-center overflow-hidden"
    >
      {/* Decorative floating gradient circles inside card */}
      <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-r from-[#00FFD5] to-[#FF4D6D] opacity-30 animate-spin-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-r from-[#FD019C] to-[#FFB200] opacity-20 animate-ping-slow"></div>

      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-[#00FFD5] via-[#FD019C] to-[#FFB200] rounded-full flex items-center justify-center mb-6 mx-auto relative z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#F9FAFB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2" />
        </svg>
      </div>

      {/* Title */}
      <h3 className="text-3xl font-bold text-[#00FFD5] mb-8 relative z-10">Who We Are</h3>

      {/* Paragraph */}
      <p className="text-[#F9FAFB]/80 text-xl leading-relaxed relative z-10">
        We empower businesses to excel in the digital era by harnessing the power of artificial intelligence.
        Our AI-driven solutions streamline processes, enhance decision-making, and unlock new opportunities for growth.
        From intelligent automation to data-driven insights, we help companies transform challenges into competitive advantages and stay ahead in an ever-evolving technological landscape.
      </p>
    </motion.div>
  </div>
</section>


       


<section className="relative py-24 bg-[#050517] overflow-hidden mt-[-10px]">
  {/* Decorative background gradient behind particles */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/10 via-[#3B82F6]/10 to-[#9333EA]/10 blur-3xl -z-20"></div>
  

  {/* Universe Stars Animation */}
  <div className="absolute inset-0 z-0">
    {/* Twinkling Stars */}
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      />
    ))}
    
 {/* Shooting Stars */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`shooting-${i}`}
        className="absolute w-2 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, 300],
          y: [0, 150],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: Math.random() * 10,
        }}
      />
    ))}

 {/* Constellation Lines */}
    <motion.div
      className="absolute top-20 left-20 w-40 h-40"
      style={{
        background: `radial-gradient(circle, transparent 0%, transparent 50%, rgba(255,255,255,0.1) 100%)`,
      }}
      animate={{
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Nebula Effect */}
    <motion.div
      className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full"
      style={{
        background: `radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)`,
      }}
      animate={{
        x: [0, 30, 0],
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* AI Circuit Patterns */}
    <motion.div
      className="absolute top-1/3 left-1/4 w-32 h-32"
      style={{
        background: `linear-gradient(45deg, transparent 40%, rgba(0, 255, 214, 0.1) 50%, transparent 60%)`,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%)',
      }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    <motion.div
      className="absolute bottom-1/3 right-1/4 w-24 h-24"
      style={{
        background: `linear-gradient(135deg, transparent 30%, rgba(255, 77, 109, 0.1) 50%, transparent 70%)`,
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      }}
      animate={{
        rotate: [0, -360],
        scale: [1, 0.8, 1],
        opacity: [0.1, 0.5, 0.1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: 2,
      }}
    />

    {/* AI Neural Network Lines */}
    <motion.div
      className="absolute top-1/2 left-1/2 w-80 h-80"
      style={{
        background: `conic-gradient(from 0deg, transparent, rgba(0, 255, 214, 0.1), transparent, rgba(255, 77, 109, 0.1), transparent)`,
        borderRadius: '50%',
      }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Data Stream Lines */}
    <motion.div
      className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FFD6]/20 to-transparent"
      animate={{
        x: ['-100%', '100%'],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    <motion.div
      className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF4D6D]/20 to-transparent"
      animate={{
        x: ['100%', '-100%'],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3,
      }}
    />


    {/* Floating Data Particles */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={`data-${i}`}
        className="absolute w-2 h-2 bg-gradient-to-r from-[#00FFD6] to-[#FF4D6D] rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -100, 0],
          x: [0, Math.random() * 50 - 25, 0],
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: Math.random() * 4 + 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 5,
        }}
      />
    ))}

   
   
    {/* Planets */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`planet-tech-${i}`}
        className="absolute rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 40 + 20}px`,
          height: `${Math.random() * 40 + 20}px`,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          y: [0, Math.random() * 30 - 15, 0],
        }}
        transition={{
          duration: Math.random() * 20 + 15,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 3,
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${
              ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'][Math.floor(Math.random() * 6)]
            } 0%, ${
              ['#FF5252', '#26A69A', '#2196F3', '#81C784', '#FFD54F', '#BA68C8'][Math.floor(Math.random() * 6)]
            } 100%)`,
            boxShadow: `inset -10px -10px 20px rgba(0,0,0,0.3), 0 0 20px ${
              ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'][Math.floor(Math.random() * 6)]
            }40`,
          }}
        />
      </motion.div>
    ))}
  </div>

  {/* Floating Geometric Shapes */}
  <div className="absolute inset-0 z-0">
    {/* Large floating circles */}
    <motion.div
      className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#00FFD6]/20 to-[#FF4D6D]/20 blur-sm"
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div
      className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-[#FFB200]/20 to-[#9333EA]/20 blur-sm"
      animate={{
        y: [0, 40, 0],
        x: [0, -15, 0],
        scale: [1, 0.8, 1],
        rotate: [0, -180, -360]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />

    
    <motion.div
      className="absolute top-1/2 right-1/3 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-[#FF4D6D]/30"
      animate={{
        y: [0, 60, 0],
        x: [0, -25, 0],
        rotate: [0, -120, -240, -360]
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />

   
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-r from-[#FFB200]/20 to-[#EF4444]/20"
      animate={{
        rotate: [0, -90, -180, -270, -360],
        scale: [1, 0.7, 1.3, 1],
        x: [0, 30, -30, 0]
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5
      }}
    />

    
    {/* Pulsing dots */}
    <motion.div
      className="absolute top-16 right-1/2 w-4 h-4 rounded-full bg-[#00FFD6]/40"
      animate={{
        scale: [1, 2, 1],
        opacity: [0.4, 1, 0.4]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    <motion.div
      className="absolute bottom-20 left-1/2 w-6 h-6 rounded-full bg-[#FF4D6D]/40"
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.8, 0.3]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />

    <motion.div
      className="absolute top-1/2 left-16 w-3 h-3 rounded-full bg-[#FFB200]/50"
      animate={{
        scale: [1, 2.5, 1],
        opacity: [0.2, 1, 0.2]
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
    />

  

    {/* Floating orbs with glow */}
    <motion.div
      className="absolute top-20 right-1/3 w-8 h-8 rounded-full bg-[#00FFD6]/30 shadow-lg shadow-[#00FFD6]/20"
      animate={{
        y: [0, -60, 0],
        x: [0, 40, 0],
        scale: [1, 1.3, 1],
        boxShadow: [
          '0 0 20px rgba(0, 255, 214, 0.2)',
          '0 0 40px rgba(0, 255, 214, 0.4)',
          '0 0 20px rgba(0, 255, 214, 0.2)'
        ]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    <motion.div
      className="absolute bottom-32 left-1/5 w-10 h-10 rounded-full bg-[#FF4D6D]/30 shadow-lg shadow-[#FF4D6D]/20"
      animate={{
        y: [0, 50, 0],
        x: [0, -30, 0],
        scale: [1, 0.8, 1],
        boxShadow: [
          '0 0 20px rgba(255, 77, 109, 0.2)',
          '0 0 50px rgba(255, 77, 109, 0.5)',
          '0 0 20px rgba(255, 77, 109, 0.2)'
        ]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3
      }}
    />
  </div>

  {/* Content on top */}
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left Side - Glass Effect Wrapper */}
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[900px] p-12 rounded-3xl 
                 shadow-[0_0_50px_rgba(0,255,214,0.2),0_0_80px_rgba(255,77,109,0.15)]
                 text-center overflow-hidden"
      >
        {/* Decorative floating gradient circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-r from-[#00FFD5] to-[#FF4D6D] opacity-30 animate-spin-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-r from-[#FD019C] to-[#FFB200] opacity-20 animate-ping-slow"></div>

        {/* Robo Image */}
        <img
          src="robo3.png"
          alt="logo"
          className="relative mx-auto md:ml-0 md:mt-0 h-24 md:h-32 lg:h-[300px] object-contain block z-10"
        />

        {/* Heading */}
        <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-snug mt-6 text-center md:text-left">
          <span className="bg-gradient-to-r from-[#00FFD5] via-[#FD019C] to-[#FFB200] bg-clip-text text-transparent">
            SNS
          </span>{" "}
          <span className="text-[#F5F5F5]">Web</span>
        </h2>

        {/* Paragraphs */}
        <p className="relative z-10 text-[#E5E7EB] mb-4 md:mb-6 leading-relaxed text-base md:text-lg text-center md:text-left">
          We are a forward-thinking company dedicated to empowering businesses through innovative AI-driven solutions. 
          Though newly established, we have already completed 100+ successful projects, earning the trust of 100+ happy clients with a 
          remarkable
          <span className="bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] bg-clip-text text-transparent">
            <br/> 98% success rate
          </span>.
        </p>

        <p className="relative z-10 text-[#D1D5DB] mb-4 md:mb-6 leading-relaxed text-base md:text-lg text-center md:text-left">
          Our mission is to help businesses harness the power of artificial intelligence to streamline operations,
          make smarter decisions, and unlock new opportunities for growth. From intelligent automation to data-driven insights,
          we deliver end-to-end solutions tailored to meet the unique needs of each client.
        </p>

        <p className="relative z-10 text-[#F9FAFB] leading-relaxed text-base md:text-lg text-center md:text-left">
          At the core of our work is a commitment to quality,
          innovation, and customer satisfaction. We believe in turning challenges into competitive advantages, 
          helping companies stay ahead in a rapidly evolving digital landscape.
        </p>
      </motion.div>


      {/* Right Side - Animated Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group flex justify-center lg:justify-start"
      >
        <motion.img
          src="robo2.png"
          alt="Technology"
          className="w-full h-96 sm:h-80 md:h-72 lg:h-[600px] object-cover cursor-pointer ml-0 lg:ml-[70px] rounded-2xl"
          animate={{ y: [0, -50, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

    </div>
  </div>
</section>


        {/* Core Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-[#101426]/70 backdrop-blur-md rounded-xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(255,77,109,0.6)]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00FFD5] via-[#FD019C] to-[#FFB200] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#F9FAFB]" />
                </div>
                <h3 className="text-xl font-semibold text-[#00FFD5] mb-3">{value.title}</h3>
                <p className="text-[#F9FAFB]/80 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

<section className="relative flex items-center justify-center min-h-screen bg-[#050517] px-4 overflow-hidden">

  {/* Decorative background gradient behind particles */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/10 via-[#3B82F6]/10 to-[#9333EA]/10 blur-3xl -z-20"></div>

  {/* Universe Stars and Particles */}
  <div className="absolute inset-0 z-0">
    {/* Twinkling Stars */}
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
      />
    ))}

    {/* Shooting Stars */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`shooting-${i}`}
        className="absolute w-2 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ x: [0, 300], y: [0, 150], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: Math.random() * 10 }}
      />
    ))}

    {/* Nebula, AI Circuit, Neural Network, Data Streams */}
    <motion.div
      className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full"
      style={{ background: `radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)` }}
      animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1,1.1,1], opacity: [0.1,0.3,0.1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute top-1/3 left-1/4 w-32 h-32"
      style={{ background: `linear-gradient(45deg, transparent 40%, rgba(0,255,214,0.1) 50%, transparent 60%)`, clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      animate={{ rotate: [0,360], scale: [1,1.2,1], opacity: [0.2,0.6,0.2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />

    <motion.div
      className="absolute bottom-1/3 right-1/4 w-24 h-24"
      style={{ background: `linear-gradient(135deg, transparent 30%, rgba(255,77,109,0.1) 50%, transparent 70%)`, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      animate={{ rotate: [0,-360], scale: [1,0.8,1], opacity: [0.1,0.5,0.1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
    />

    <motion.div
      className="absolute top-1/2 left-1/2 w-80 h-80"
      style={{ background: `conic-gradient(from 0deg, transparent, rgba(0,255,214,0.1), transparent, rgba(255,77,109,0.1), transparent)`, borderRadius: '50%' }}
      animate={{ rotate: [0,360], scale: [1,1.1,1], opacity: [0.1,0.3,0.1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />

    {/* Floating Data Particles */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={`data-${i}`}
        className="absolute w-2 h-2 bg-gradient-to-r from-[#00FFD6] to-[#FF4D6D] rounded-full"
        style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }}
        animate={{ y: [0, -100, 0], x: [0, Math.random()*50-25, 0], opacity: [0,1,0], scale: [0.5,1,0.5] }}
        transition={{ duration: Math.random()*4+3, repeat: Infinity, ease: "easeInOut", delay: Math.random()*5 }}
      />
    ))}

    {/* Planets */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`planet-tech-${i}`}
        className="absolute rounded-full"
        style={{
          left: `${Math.random()*100}%`,
          top: `${Math.random()*100}%`,
          width: `${Math.random()*40+20}px`,
          height: `${Math.random()*40+20}px`
        }}
        animate={{ rotate: [0,360], scale: [1,1.1,1], y: [0, Math.random()*30-15,0] }}
        transition={{ duration: Math.random()*20+15, repeat: Infinity, ease: "linear", delay: Math.random()*3 }}
      >
       
      </motion.div>
    ))}

    {/* Floating Orbs with Glow */}
    <motion.div
      className="absolute top-20 right-1/3 w-8 h-8 rounded-full bg-[#00FFD6]/30 shadow-lg shadow-[#00FFD6]/20"
      animate={{ y:[0,-60,0], x:[0,40,0], scale:[1,1.3,1], boxShadow:['0 0 20px rgba(0,255,214,0.2)','0 0 40px rgba(0,255,214,0.4)','0 0 20px rgba(0,255,214,0.2)'] }}
      transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
    />

    <motion.div
      className="absolute bottom-32 left-1/5 w-10 h-10 rounded-full bg-[#FF4D6D]/30 shadow-lg shadow-[#FF4D6D]/20"
      animate={{ y:[0,50,0], x:[0,-30,0], scale:[1,0.8,1], boxShadow:['0 0 20px rgba(255,77,109,0.2)','0 0 50px rgba(255,77,109,0.5)','0 0 20px rgba(255,77,109,0.2)'] }}
      transition={{ duration:8, repeat:Infinity, ease:"easeInOut", delay:3 }}
    />
  </div>

  {/* Mission Card */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative w-full max-w-[900px] p-12 rounded-3xl 
                 shadow-[0_0_50px_rgba(0,255,214,0.2),0_0_80px_rgba(255,77,109,0.15)]
                 text-center overflow-hidden"
  >
    {/* Decorative floating gradient circles */}
    <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-r from-[#00FFD5] to-[#FF4D6D] opacity-30 animate-spin-slow"></div>
    <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-r from-[#FD019C] to-[#FFB200] opacity-20 animate-ping-slow"></div>

    {/* Icon */}
    <div className="w-16 h-16 bg-gradient-to-br from-[#00FFD5] via-[#FD019C] to-[#FFB200] rounded-full flex items-center justify-center mb-6 mx-auto relative z-10">
      <Target className="w-8 h-8 text-[#F9FAFB]" />
    </div>

    {/* Title */}
    <h3 className="text-3xl font-bold text-[#00FFD5] mb-8 relative z-10">Our Mission</h3>

    {/* Paragraph */}
    <p className="text-[#F9FAFB]/80 text-xl leading-relaxed relative z-10">
      Our mission is to empower businesses of all sizes by providing comprehensive service solutions that combine innovation, expertise, and reliability. We are dedicated to delivering exceptional support across digital marketing, web development, HR solutions, sales, and business strategy, helping our clients achieve sustainable growth and stay ahead in a rapidly evolving market. Through a client-focused approach and commitment to excellence, we aim to turn challenges into opportunities and drive measurable success for every business we serve.
    </p>
  </motion.div>
</section>



<section className="relative flex items-center justify-center min-h-screen bg-[#050517] px-4 mt-[20px] overflow-hidden">
  {/* Decorative background gradient behind particles */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/10 via-[#3B82F6]/10 to-[#9333EA]/10 blur-3xl -z-20"></div>

  {/* Universe Stars and Particles */}
  <div className="absolute inset-0 z-0">
    {/* Twinkling Stars */}
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
      />
    ))}

    {/* Shooting Stars */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`shooting-${i}`}
        className="absolute w-2 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ x: [0, 300], y: [0, 150], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: Math.random() * 10 }}
      />
    ))}

    {/* Nebula, AI Circuit, Neural Network, Data Streams */}
    <motion.div
      className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full"
      style={{ background: `radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)` }}
      animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute top-1/3 left-1/4 w-32 h-32"
      style={{ background: `linear-gradient(45deg, transparent 40%, rgba(0,255,214,0.1) 50%, transparent 60%)`, clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      animate={{ rotate: [0, 360], scale: [1, 1.2, 1], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />

    <motion.div
      className="absolute bottom-1/3 right-1/4 w-24 h-24"
      style={{ background: `linear-gradient(135deg, transparent 30%, rgba(255,77,109,0.1) 50%, transparent 70%)`, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      animate={{ rotate: [0, -360], scale: [1, 0.8, 1], opacity: [0.1, 0.5, 0.1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
    />

    <motion.div
      className="absolute top-1/2 left-1/2 w-80 h-80"
      style={{ background: `conic-gradient(from 0deg, transparent, rgba(0,255,214,0.1), transparent, rgba(255,77,109,0.1), transparent)`, borderRadius: '50%' }}
      animate={{ rotate: [0, 360], scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />

    {/* Floating Data Particles */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={`data-${i}`}
        className="absolute w-2 h-2 bg-gradient-to-r from-[#00FFD6] to-[#FF4D6D] rounded-full"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ y: [0, -100, 0], x: [0, Math.random() * 50 - 25, 0], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
        transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 5 }}
      />
    ))}

    {/* Planets */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`planet-tech-${i}`}
        className="absolute rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 40 + 20}px`,
          height: `${Math.random() * 40 + 20}px`,
        }}
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1], y: [0, Math.random() * 30 - 15, 0] }}
        transition={{ duration: Math.random() * 20 + 15, repeat: Infinity, ease: "linear", delay: Math.random() * 3 }}
      />
    ))}

    {/* Floating Orbs with Glow */}
    <motion.div
      className="absolute top-20 right-1/3 w-8 h-8 rounded-full bg-[#00FFD6]/30 shadow-lg shadow-[#00FFD6]/20"
      animate={{ y: [0, -60, 0], x: [0, 40, 0], scale: [1, 1.3, 1], boxShadow: ['0 0 20px rgba(0,255,214,0.2)', '0 0 40px rgba(0,255,214,0.4)', '0 0 20px rgba(0,255,214,0.2)'] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute bottom-32 left-1/5 w-10 h-10 rounded-full bg-[#FF4D6D]/30 shadow-lg shadow-[#FF4D6D]/20"
      animate={{ y: [0, 50, 0], x: [0, -30, 0], scale: [1, 0.8, 1], boxShadow: ['0 0 20px rgba(255,77,109,0.2)', '0 0 50px rgba(255,77,109,0.5)', '0 0 20px rgba(255,77,109,0.2)'] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
    />
  </div>

<div className="flex justify-center items-center w-full">
  <img
    src="services.svg"
    alt="logo"
    className="mx-auto h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover z-10"
  />
</div>




</section>



<section className="relative flex items-center justify-center min-h-screen bg-[#050517] px-4 overflow-hidden ">

  {/* Decorative background gradient behind particles */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/10 via-[#3B82F6]/10 to-[#9333EA]/10 blur-3xl -z-20"></div>

  {/* Universe Stars and Particles */}
  <div className="absolute inset-0 z-0">
    {/* Twinkling Stars */}
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
      />
    ))}

    {/* Shooting Stars */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`shooting-${i}`}
        className="absolute w-2 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ x: [0, 300], y: [0, 150], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: Math.random() * 10 }}
      />
    ))}

    {/* Nebula, AI Circuit, Neural Network, Data Streams */}
    <motion.div
      className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full"
      style={{ background: `radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)` }}
      animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1,1.1,1], opacity: [0.1,0.3,0.1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute top-1/3 left-1/4 w-32 h-32"
      style={{ background: `linear-gradient(45deg, transparent 40%, rgba(0,255,214,0.1) 50%, transparent 60%)`, clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      animate={{ rotate: [0,360], scale: [1,1.2,1], opacity: [0.2,0.6,0.2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />

    <motion.div
      className="absolute bottom-1/3 right-1/4 w-24 h-24"
      style={{ background: `linear-gradient(135deg, transparent 30%, rgba(255,77,109,0.1) 50%, transparent 70%)`, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      animate={{ rotate: [0,-360], scale: [1,0.8,1], opacity: [0.1,0.5,0.1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
    />

    <motion.div
      className="absolute top-1/2 left-1/2 w-80 h-80"
      style={{ background: `conic-gradient(from 0deg, transparent, rgba(0,255,214,0.1), transparent, rgba(255,77,109,0.1), transparent)`, borderRadius: '50%' }}
      animate={{ rotate: [0,360], scale: [1,1.1,1], opacity: [0.1,0.3,0.1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />

    {/* Floating Data Particles */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={`data-${i}`}
        className="absolute w-2 h-2 bg-gradient-to-r from-[#00FFD6] to-[#FF4D6D] rounded-full"
        style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }}
        animate={{ y: [0, -100, 0], x: [0, Math.random()*50-25, 0], opacity: [0,1,0], scale: [0.5,1,0.5] }}
        transition={{ duration: Math.random()*4+3, repeat: Infinity, ease: "easeInOut", delay: Math.random()*5 }}
      />
    ))}

    {/* Planets */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`planet-tech-${i}`}
        className="absolute rounded-full"
        style={{
          left: `${Math.random()*100}%`,
          top: `${Math.random()*100}%`,
          width: `${Math.random()*40+20}px`,
          height: `${Math.random()*40+20}px`
        }}
        animate={{ rotate: [0,360], scale: [1,1.1,1], y: [0, Math.random()*30-15,0] }}
        transition={{ duration: Math.random()*20+15, repeat: Infinity, ease: "linear", delay: Math.random()*3 }}
      >
       
      </motion.div>
    ))}

    {/* Floating Orbs with Glow */}
    <motion.div
      className="absolute top-20 right-1/3 w-8 h-8 rounded-full bg-[#00FFD6]/30 shadow-lg shadow-[#00FFD6]/20"
      animate={{ y:[0,-60,0], x:[0,40,0], scale:[1,1.3,1], boxShadow:['0 0 20px rgba(0,255,214,0.2)','0 0 40px rgba(0,255,214,0.4)','0 0 20px rgba(0,255,214,0.2)'] }}
      transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
    />

    <motion.div
      className="absolute bottom-32 left-1/5 w-10 h-10 rounded-full bg-[#FF4D6D]/30 shadow-lg shadow-[#FF4D6D]/20"
      animate={{ y:[0,50,0], x:[0,-30,0], scale:[1,0.8,1], boxShadow:['0 0 20px rgba(255,77,109,0.2)','0 0 50px rgba(255,77,109,0.5)','0 0 20px rgba(255,77,109,0.2)'] }}
      transition={{ duration:8, repeat:Infinity, ease:"easeInOut", delay:3 }}
    />
  </div>

  {/* Mission Card */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
     className="relative w-full max-w-[900px] p-12 rounded-3xl 
                 shadow-[0_0_50px_rgba(0,255,214,0.2),0_0_80px_rgba(255,77,109,0.15)]
                 text-center overflow-hidden"
  >
    {/* Decorative floating gradient circles */}
    <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-r from-[#00FFD5] to-[#FF4D6D] opacity-30 animate-spin-slow"></div>
    <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-r from-[#FD019C] to-[#FFB200] opacity-20 animate-ping-slow"></div>

    {/* Icon */}
    <div className="w-16 h-16 bg-gradient-to-br from-[#00FFD5] via-[#FD019C] to-[#FFB200] rounded-full flex items-center justify-center mb-6 mx-auto relative z-10">
       <Eye className="w-8 h-8 text-[#F9FAFB]" />
    </div>

    {/* Title */}
    <h3 className="text-3xl font-bold text-[#00FFD5] mb-8 relative z-10">Our Vision</h3>

    {/* Paragraph */}
     <p className="text-[#F9FAFB]/80 text-lg md:text-xl leading-relaxed relative z-10">
      We envision a future where every business, regardless of size or industry, has access to cutting-edge services and expert guidance. Our goal is to empower organizations to transform challenges into opportunities, leverage technology effectively, and achieve sustainable growth through our unwavering commitment to quality and integrity.
    </p>
  </motion.div>
</section>



<section className="relative flex items-center justify-center min-h-screen bg-[#050517] px-4  overflow-hidden">
  {/* Decorative background gradient behind particles */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/10 via-[#3B82F6]/10 to-[#9333EA]/10 blur-3xl -z-20"></div>

  {/* Universe Stars and Particles */}
  <div className="absolute inset-0 z-0">
    {/* Twinkling Stars */}
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
      />
    ))}

    {/* Shooting Stars */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`shooting-${i}`}
        className="absolute w-2 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ x: [0, 300], y: [0, 150], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: Math.random() * 10 }}
      />
    ))}

    {/* Nebula, AI Circuit, Neural Network, Data Streams */}
    <motion.div
      className="absolute top-1/4 right-1/4 w-60 h-60 rounded-full"
      style={{ background: `radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)` }}
      animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute top-1/3 left-1/4 w-32 h-32"
      style={{ background: `linear-gradient(45deg, transparent 40%, rgba(0,255,214,0.1) 50%, transparent 60%)`, clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      animate={{ rotate: [0, 360], scale: [1, 1.2, 1], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />

    <motion.div
      className="absolute bottom-1/3 right-1/4 w-24 h-24"
      style={{ background: `linear-gradient(135deg, transparent 30%, rgba(255,77,109,0.1) 50%, transparent 70%)`, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      animate={{ rotate: [0, -360], scale: [1, 0.8, 1], opacity: [0.1, 0.5, 0.1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
    />

    <motion.div
      className="absolute top-1/2 left-1/2 w-80 h-80"
      style={{ background: `conic-gradient(from 0deg, transparent, rgba(0,255,214,0.1), transparent, rgba(255,77,109,0.1), transparent)`, borderRadius: '50%' }}
      animate={{ rotate: [0, 360], scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />

    {/* Floating Data Particles */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={`data-${i}`}
        className="absolute w-2 h-2 bg-gradient-to-r from-[#00FFD6] to-[#FF4D6D] rounded-full"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ y: [0, -100, 0], x: [0, Math.random() * 50 - 25, 0], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
        transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 5 }}
      />
    ))}

    {/* Planets */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`planet-tech-${i}`}
        className="absolute rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 40 + 20}px`,
          height: `${Math.random() * 40 + 20}px`,
        }}
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1], y: [0, Math.random() * 30 - 15, 0] }}
        transition={{ duration: Math.random() * 20 + 15, repeat: Infinity, ease: "linear", delay: Math.random() * 3 }}
      />
    ))}

    {/* Floating Orbs with Glow */}
    <motion.div
      className="absolute top-20 right-1/3 w-8 h-8 rounded-full bg-[#00FFD6]/30 shadow-lg shadow-[#00FFD6]/20"
      animate={{ y: [0, -60, 0], x: [0, 40, 0], scale: [1, 1.3, 1], boxShadow: ['0 0 20px rgba(0,255,214,0.2)', '0 0 40px rgba(0,255,214,0.4)', '0 0 20px rgba(0,255,214,0.2)'] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute bottom-32 left-1/5 w-10 h-10 rounded-full bg-[#FF4D6D]/30 shadow-lg shadow-[#FF4D6D]/20"
      animate={{ y: [0, 50, 0], x: [0, -30, 0], scale: [1, 0.8, 1], boxShadow: ['0 0 20px rgba(255,77,109,0.2)', '0 0 50px rgba(255,77,109,0.5)', '0 0 20px rgba(255,77,109,0.2)'] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
    />
  </div>
 {/* Glowing Background Aura */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#00FFD5]/30 via-[#FD019C]/30 to-[#FFB200]/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Floating Foreground Image */}
    <motion.img
          src="robo.svg"
          alt="Technology"
          className="w-full h-96 sm:h-80 md:h-72 lg:h-[700px] object-cover cursor-pointer ml-0 lg:ml-[70px] rounded-2xl"
          animate={{ y: [0, -50, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

    
</section>


      </div>
    </div>
  )
}

export default About
