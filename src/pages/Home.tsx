import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/data/servicesData";
import CountUp from "react-countup";



import {
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { 
  Cpu,Code, ShoppingCart, 
  Megaphone, Video, Target, Globe, 
  Layers, Brush, Wrench, Server, 
  Bot, UserCog, Headphones, 
  LineChart, Briefcase 
} from "lucide-react"
import { useEffect, useState } from "react";

const Home = () => {
  const services = servicesData.slice(0, 6);

  const stats = [
  { icon: Users, value: 100, suffix: "+", label: "Happy Clients", animation: "bounce" },
  { icon: Award, value: 5, suffix: "+", label: "Years Experience", animation: "rotate" },
  { icon: CheckCircle, value: 500, suffix: "+", label: "Projects Completed", animation: "pulse" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Success Rate", animation: "float" },
];


const functions = [
  { title: "Social Media Marketing", icon: Megaphone },
  { title: "Video Marketing & YouTube Growth", icon: Video },
  { title: "Marketing Strategy Consulting", icon: Target },
  { title: "Website Design & Development", icon: Code },
  { title: "E-commerce Development", icon: ShoppingCart },
  { title: "Web Application Development", icon: Layers },
  { title: "UI/UX Design", icon: Brush },
  { title: "Website Maintenance & Support", icon: Wrench },
  { title: "Custom Software Solutions", icon: Cpu },
  { title: "Web Hosting & Domain Services", icon: Server },
  { title: "Chatbot Development", icon: Bot },
  { title: "Lead Generation", icon: LineChart },
  { title: "Customer Relationship Management", icon: Users },
  { title: "IT Services", icon: Globe },
  { title: "Digital Marketing", icon: Megaphone },
  { title: "HR and Recruitment", icon: UserCog },
  { title: "Customer Support", icon: Headphones },
]

  const [gifPlaying, setGifPlaying] = useState(false);
  useEffect(() => {
    let timer;
    if (gifPlaying) {
      timer = setTimeout(() => setGifPlaying(false), 60000); // stop after 1 min
    }
    return () => clearTimeout(timer);
  }, [gifPlaying]);


  

  return (
    <div className="min-h-screen bg-[black] text-[#E6B4B9] overflow-x-hidden">
      {/* Hero Section */}
   <section className="relative min-h-screen flex items-center pt-24" style={{ backgroundColor: "#050517" }}>
  {/* Video Background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
  >
    <source src="/bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content Container */}
  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 text-left max-[768px]:text-center"
      >
        <h1
  className="
    relative text-5xl md:text-7xl lg:text-8xl 
    font-extrabold tracking-tight mb-6 leading-tight 
    text-[#F9FAFB] drop-shadow-lg
  "
>
  {/* Mobile Version (only visible below md) */}
  <span className="block md:hidden text-center w-full">
    All Your Business{" "}
    <span className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-transparent bg-clip-text shiny-effect">
      Solutions
    </span>
  </span>

  {/* Desktop Version (hidden on mobile, visible md+) */}
  <span className="hidden md:block">
    All Your Business{" "}
    <span className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-transparent bg-clip-text whitespace-nowrap shiny-effect">
      Solutions In One Place
    </span>
  </span>
</h1>


        <p
          className="
            text-xl md:text-2xl text-[#F9FAFB]/90 mb-12 drop-shadow-md 
            max-[480px]:text-sm max-[640px]:text-base max-[640px]:mb-6
          "
        >
          Start your journey with SNSweb — Designed for speed & solution.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-start items-center max-[768px]:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] hover:from-[#3B82F6] hover:to-[#10B981] text-[#F9FAFB] px-8 py-3 rounded-xl shadow-xl transition-all transform hover:-translate-y-1 max-[480px]:px-5"
          >
            <Link to="/services">
              Explore Services
              <ArrowRight className="ml-2 w-6 h-6 inline-block max-[480px]:w-5 max-[480px]:h-5" />
            </Link>
          </Button>
         <Button
  asChild
  variant="outline"
  size="lg"
  className="
    border-[#9333EA] 
    text-[#9333EA] 
    bg-white/5          /* very subtle semi-transparent background */
    backdrop-blur-sm     /* soft, semi-blur effect */
    shadow-lg 
    hover:bg-white/10    /* slightly stronger on hover */
    hover:text-[#F9FAFB] 
    px-8 py-3 rounded-xl 
    transition-all transform hover:-translate-y-1 
    max-[480px]:px-5
  "
>
  <Link to="/contact">Start Your Journey</Link>
</Button>

        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/3 flex justify-center mt-8 lg:mt-0"
      >
        <motion.img
          src="Art.png"
          alt="Premium Visual"
          className="
            w-full max-w-lg rounded-3xl 
            max-[480px]:max-w-[200px] max-[640px]:max-w-[260px]
          "
          animate={{ y: [0, -40, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

    </div>
  </div>
</section>




<section
  className="py-12 relative overflow-hidden cursor-pointer"
  style={{ backgroundColor: "#050517" }}
>
  {/* Animated Gradient Glow Background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#00FFD6/15,#8B5CF6/10,#FF4D6D/10)] animate-[pulse_6s_ease-in-out_infinite]" />
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
    <style>
      {`
        @keyframes pulse {
          0%,100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>

  {/* Floating Hex Particles */}
  {[...Array(8)].map((_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-[#00FFD6]/50 rounded-full blur-[1px]"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  ))}

  {/* Scrolling Feature List */}
  <div className="relative w-full overflow-hidden py-4">
    <motion.div
      className="flex items-center space-x-8 w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
    >
      {[...functions, ...functions].map((fn, index) => {
        const Icon = fn.icon;
        return (
          <Link to="/services" key={index}>
            <motion.div
              whileHover={{
                scale: 1.12,
                rotate: 1,
                transition: { duration: 0.3 },
              }}
              className="flex flex-col items-center space-y-2 min-w-[120px] group"
            >
              {/* Icon Container */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5 + index * 0.05,
                  ease: "easeInOut",
                }}
                className="relative p-3.5 rounded-2xl bg-gradient-to-br from-[#00FFD6]/30 via-[#6A00FF]/20 to-[#FF4D6D]/30 backdrop-blur-xl shadow-[0_0_15px_rgba(0,255,214,0.2)] hover:shadow-[0_0_25px_rgba(255,77,109,0.4)] transition-all duration-500"
              >
                {/* Orbit Effect */}
                <div className="absolute inset-0 border border-[#00FFD6]/40 rounded-2xl animate-[rotate_6s_linear_infinite]" />
                <Icon className="w-7 h-7 text-[#00FFD6] drop-shadow-[0_0_10px_#00FFD6]" />
              </motion.div>

              {/* Title */}
              <h3 className="text-[11px] md:text-sm font-semibold text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] group-hover:scale-105 transition-transform">
                {fn.title}
              </h3>
            </motion.div>
          </Link>
        );
      })}
    </motion.div>
  </div>

  {/* Soft Bottom Glow */}
  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#00FFD6]/10 via-transparent to-transparent pointer-events-none" />
</section>





      
      {/* Stats Section */}
   <section
  className="py-32 relative overflow-hidden bg-[#050517] smooth-scroll "
>
  {/* Background gradient overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00FFD6]/10 via-transparent to-[#FF4D6D]/10 blur-3xl -z-20"></div>

  {/* Universe Stars Animation */}
  <div className="absolute inset-0 z-0" style={{ willChange: 'transform' }}>
    {/* Twinkling Stars */}
    {[...Array(35)].map((_, i) => (
      <motion.div
        key={`star-achievements-${i}`}
        className="absolute w-1 h-1 bg-white rounded-full animation-optimized"
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
          delay: Math.random() * 6,
        }}
      />
    ))}

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

    {/* Shooting Stars */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={`shooting-achievements-${i}`}
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

    


    {/* AI Circuit Patterns */}
    <motion.div
      className="absolute top-1/4 left-1/6 w-28 h-28"
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
      className="absolute bottom-1/4 right-1/6 w-20 h-20"
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

    {/* Floating Data Particles */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={`data-achievements-${i}`}
        className="absolute w-2 h-2 bg-gradient-to-r from-[#00FFD6] to-[#FF4D6D] rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -80, 0],
          x: [0, Math.random() * 40 - 20, 0],
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 4,
        }}
      />
    ))}

  
   
{/* Meteoroids/Shooting Stars */}
{[...Array(3)].map((_, i) => (
  <motion.div
    key={`meteor-achievements-${i}`}
    className="absolute w-1 h-1 bg-white rounded-full"
    style={{
      left: `${Math.random() * 100}%`, // random horizontal start
      bottom: `-10px`,                 // start just below visible area
    }}
    animate={{
      y: [-10, -200],                  // move upwards
      opacity: [0, 1, 0.8, 0],         // fade in/out
      x: [0, Math.random() * 50 - 25], // small horizontal drift
    }}
    transition={{
      duration: Math.random() * 2 + 2, // random speed
      repeat: Infinity,
      ease: "easeOut",
      delay: Math.random() * 5,
    }}
      >
        <div className="relative">
          {/* Meteor Head */}
          <div className="w-2.5 h-2.5 bg-white rounded-full shadow-md shadow-white/40"></div>
          {/* Meteor Tail */}
          <div 
            className="absolute top-1 left-1 w-16 h-0.5 bg-gradient-to-r from-white via-[#00FFD6] to-transparent rounded-full"
            style={{
              transform: 'rotate(45deg)',
              transformOrigin: 'left center',
            }}
          />
          <div 
            className="absolute top-1 left-1 w-12 h-0.5 bg-gradient-to-r from-white via-[#FF4D6D] to-transparent rounded-full opacity-60"
            style={{
              transform: 'rotate(45deg)',
              transformOrigin: 'left center',
            }}
          />
        </div>
      </motion.div>
    ))}
  </div>

<div className="relative w-full text-center py-16 z-10">
  {/* Left side background image */}
  <img
    src="left.png"
    alt="logo"
    className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 h-[500px] object-contain z-0"
  />

  {/* Right side background image */}
  <img
    src="right2.png"
    alt="logo"
    className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 h-[500px] object-contain z-0"
  />

  {/* Heading with spaceman and side logos */}
  <div className="relative flex flex-col items-center justify-center z-10">
    
{/* Spaceman on top */}
<img
  src="spaceman.svg"
  alt="Technology"
  className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 h-auto object-contain cursor-pointer ml-0 lg:ml-[70px] rounded-2xl mt-[-50px]"
/>




{/* Heading with side logos */}
<div className="flex items-center justify-center flex-nowrap">
  {/* Left logo */}
  <img
    src="R.svg"
    alt="logo"
    className="h-20 sm:h-24 md:h-[190px] object-contain -mr-12 sm:-mr-6 md:-mr-28 -mt-4 sm:-mt-2 md:-mt-16"
  />



 
{/* Heading with gradient highlight box */}
<h2
  className="inline-block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide
             text-transparent bg-clip-text 
             bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
             px-6 py-3 rounded-lg
             bg-gradient-to-tr from-[#00FFD6] to-[#FF4D6D]
             shadow-[0_0_25px_rgba(255,77,109,0.6)]"
>
  Achievement Hub
</h2>


 {/* Right logo */}
<img
  src="L.svg"
  alt="logo"
  className="h-20 sm:h-24 md:h-[190px] object-contain -ml-12 sm:-ml-6 md:-ml-28 -mt-4 sm:-mt-2 md:-mt-16"
/>

</div>


</div>







  {/* GIF */}
  <div className="flex justify-center mt-8 relative z-10">
    <img
      src={gifPlaying ? 'mini.gif' : 'min.png'}
      alt="interactive GIF"
      className="w-40 sm:w-48 md:w-60 lg:w-72 cursor-pointer"
      onClick={() => setGifPlaying(true)}
    />
  </div>

  {/* "Activate Me" span */}
  {!gifPlaying && (
    <span
      className="mt-4 font-bold text-lg sm:text-xl md:text-2xl bg-clip-text text-transparent
                 bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] relative z-10 block"
    >
      &gt;&gt;ACTIVATE ME&lt;&lt;
    </span>
  )}
</div>


  {/* Background Orbs */}
  <div className="absolute top-10 left-20 w-96 h-96 bg-[#00FFD6]/20 rounded-full blur-3xl -z-10"></div>
  <div className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-[#FF4D6D]/15 rounded-full blur-3xl -z-10"></div>

  <div className="container mx-auto px-8 relative z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-center">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group p-8 rounded-3xl 
                       bg-[#101426]/60 border border-[#00FFD6]/50 
                       backdrop-blur-xl shadow-[0_0_25px_rgba(0,255,214,0.4)]
                       hover:shadow-[0_0_45px_rgba(255,77,109,0.6)]
                       hover:scale-105 transition-all"
          >
            {/* Icon container */}
            <motion.div
              animate={
                stat.animation === 'bounce'
                  ? { y: [0, -6, 0] }
                  : stat.animation === 'rotate'
                  ? { rotate: [0, 360] }
                  : stat.animation === 'pulse'
                  ? { scale: [1, 1.1, 1] }
                  : stat.animation === 'float'
                  ? { y: [0, -8, 0] }
                  : {}
              }
              transition={{
                duration: stat.animation === 'rotate' ? 6 : 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-20 h-20 rounded-full 
                         bg-gradient-to-tr from-[#00FFD6] to-[#FF4D6D] 
                         flex items-center justify-center mx-auto mb-6 
                         shadow-[0_0_25px_rgba(255,77,109,0.6)]"
            >
              <Icon className="h-10 w-10 text-white drop-shadow-lg" />
            </motion.div>

            {/* CountUp number */}
            <div
              className="text-4xl md:text-5xl font-extrabold 
                         bg-gradient-to-r from-[#00FFD6] to-[#FF4D6D] 
                         bg-clip-text text-transparent mb-2 tracking-wide"
            >
              <CountUp end={stat.value} duration={4.5} enableScrollSpy />
              {stat.suffix}
            </div>

            <div className="text-[#fff]/90 text-lg font-medium">{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>







<section className="relative py-24 bg-[#050517] overflow-hidden">
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
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20"
      >
        <img
          src="111.png"
          alt="logo"
          className="hidden md:block h-24 md:h-32 lg:h-[300px] mt-0 md:mt-[-60px] lg:mt-[-175px] ml-0 md:ml-0 lg:ml-[-240px] object-contain mx-auto lg:mx-0"
        />

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-snug mt-4 md:mt-[-30px] lg:mt-[-65px] text-center lg:text-left">
          Technology:{" "}
          <span className="bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] bg-clip-text text-transparent">
            Shaping the Future
          </span>
        </h2>

        <p className="text-[#E5E7EB] mb-4 md:mb-6 leading-relaxed text-base md:text-lg text-center lg:text-left">
          Technology is not just about machines and devices—it’s about transforming the way we live, 
          work, and connect. From the early days of simple tools to today’s world of artificial intelligence, 
          every innovation has been driven by the need to solve problems and improve lives.
        </p>

        <p className="text-[#D1D5DB] mb-4 md:mb-6 leading-relaxed text-base md:text-lg text-center lg:text-left">
          Information technology powers businesses, medical breakthroughs save lives, and renewable 
          energy drives sustainability. In every industry, technology acts as the bridge between 
          challenges and opportunities, enabling people and organizations to reach new heights.
        </p>

        <p className="text-[#F9FAFB] leading-relaxed text-base md:text-lg text-center lg:text-left">
          At <span className="bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] bg-clip-text text-transparent">SNSweb</span>, we believe technology 
          is more than a tool—it’s a catalyst for growth and a partner in progress. By embracing innovation, 
          we create pathways to a smarter, more connected, and sustainable future.
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
          src="/tech.png"
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

     {/* Services Section */}
<section className="py-32 bg-[#050517] mt-[-30px] text-center relative overflow-hidden">
  {/* Universe Stars Animation */}
  <div className="absolute inset-0 z-0">
    {/* Twinkling Stars */}
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={`star-services-${i}`}
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
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`shooting-services-${i}`}
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

    {/* AI Circuit Patterns */}
    <motion.div
      className="absolute top-1/4 left-1/5 w-24 h-24"
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
      className="absolute bottom-1/4 right-1/5 w-20 h-20"
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

    {/* Floating Data Particles */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={`data-services-${i}`}
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

    
    {/* Meteoroids/Shooting Stars */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`meteor-services-${i}`}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, 350],
          y: [0, 180],
          opacity: [0, 1, 0.7, 0],
        }}
        transition={{
          duration: Math.random() * 2.5 + 1.5,
          repeat: Infinity,
          ease: "easeOut",
          delay: Math.random() * 6,
        }}
      >
        <div className="relative">
          {/* Meteor Head */}
          <div className="w-2.5 h-2.5 bg-white rounded-full shadow-md shadow-white/40"></div>
          {/* Meteor Tail */}
          <div 
            className="absolute top-1 left-1 w-16 h-0.5 bg-gradient-to-r from-white via-[#3B82F6] to-transparent rounded-full"
            style={{
              transform: 'rotate(45deg)',
              transformOrigin: 'left center',
            }}
          />
          <div 
            className="absolute top-1 left-1 w-12 h-0.5 bg-gradient-to-r from-white via-[#00FFD6] to-transparent rounded-full opacity-60"
            style={{
              transform: 'rotate(45deg)',
              transformOrigin: 'left center',
            }}
          />
        </div>
      </motion.div>
    ))}

    {/* Planets */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`planet-services-${i}`}
        className="absolute rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 35 + 15}px`,
          height: `${Math.random() * 35 + 15}px`,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
          y: [0, Math.random() * 20 - 10, 0],
        }}
        transition={{
          duration: Math.random() * 15 + 12,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 2,
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle at 25% 25%, ${
              ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'][Math.floor(Math.random() * 6)]
            } 0%, ${
              ['#FF5252', '#26A69A', '#2196F3', '#81C784', '#FFD54F', '#BA68C8'][Math.floor(Math.random() * 6)]
            } 100%)`,
            boxShadow: `inset -8px -8px 15px rgba(0,0,0,0.2), 0 0 15px ${
              ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'][Math.floor(Math.random() * 6)]
            }30`,
          }}
        />
      </motion.div>
    ))}
  </div>

  <div className="container mx-auto px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
     <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFD5] via-[#FD019C] to-[#FFB200]  mb-4 drop-shadow-lg">
  Professional Services
</h2>
      <p className="text-xl text-[#F9FAFB] max-w-3xl mx-auto drop-shadow-md">
      "Transform your operations with intelligent solutions built for tomorrow’s challenges,
unlocking efficiency and driving exponential growth."
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
      {services.map((service, index) => (
        <ServiceCard key={service.id} {...service} delay={index * 0.1}  />
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-center mt-16"
    >
     <Button
  asChild
  size="lg"
  className="bg-gradient-to-r from-[#00FFD5] via-[#FD019C] to-[#FFB200] 
             hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,77,109,0.6)]
             text-white px-10 py-3 rounded-xl shadow-xl transition-all transform 
             hover:-translate-y-1 hover:scale-105"
>
  <Link to="/services" className="flex items-center">
    View All Services
    <ArrowRight className="ml-2 w-6 h-6 inline-block text-[#F9FAFB]" />
  </Link>
</Button>

    </motion.div>
  </div>
   
</section>




      {/* CTA Section */}
     <section className="py-32 bg-[#050517] text-white relative overflow-hidden text-center">
  {/* Universe Stars Animation */}
  <div className="absolute inset-0 z-0">
    {/* Twinkling Stars */}
    {[...Array(45)].map((_, i) => (
      <motion.div
        key={`star-cta-${i}`}
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
    {[...Array(7)].map((_, i) => (
      <motion.div
        key={`shooting-cta-${i}`}
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

    {/* AI Brain Visualization */}
    <motion.div
      className="absolute top-1/2 right-1/3 w-40 h-40"
      style={{
        background: `radial-gradient(circle, rgba(255, 178, 0, 0.1) 0%, rgba(0, 255, 214, 0.05) 50%, transparent 100%)`,
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      }}
      animate={{
        rotate: [0, 120, 240, 360],
        scale: [1, 1.3, 0.8, 1],
        opacity: [0.2, 0.6, 0.3, 0.2],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Floating Data Particles */}
    {[...Array(18)].map((_, i) => (
      <motion.div
        key={`data-cta-${i}`}
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

    {/* Meteoroids/Shooting Stars */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`meteor-cta-${i}`}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, 500],
          y: [0, 250],
          opacity: [0, 1, 0.9, 0],
        }}
        transition={{
          duration: Math.random() * 4 + 3,
          repeat: Infinity,
          ease: "easeOut",
          delay: Math.random() * 10,
        }}
      >
       
      </motion.div>
    ))}

    {/* Planets */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={`planet-cta-${i}`}
        className="absolute rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 50 + 25}px`,
          height: `${Math.random() * 50 + 25}px`,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 1],
          y: [0, Math.random() * 40 - 20, 0],
        }}
        transition={{
          duration: Math.random() * 25 + 18,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 4,
        }}
      >
       
      </motion.div>
    ))}
  </div>

  <div className="container mx-auto px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
    <h2
  className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00FFD5] via-[#FD019C] to-[#FFB200] neon-glow"

>
  Create something amazing Together Join us now!
</h2>

      <p className="text-xl text-[#F9FAFB]/90 mb-10 drop-shadow-md">
        "Empower your business with AI-intelligent solutions trusted by hundreds of innovators. Start your free consultation today."
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Button
          asChild
          size="lg"
          className="bg-[#10B981] hover:bg-[#059669] text-white px-10 py-3 rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-transform transform hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(16,185,129,0.6)]"
        >
          <Link to="/contact">Start Your Project</Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-[#3B82F6] text-white hover:bg-[#3B82F6] hover:text-[#050517] px-10 py-3 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1"
        >
          <Link to="/about">Learn More</Link>
        </Button>
      </div>
    </motion.div>

   
  </div>
</section>
    
    </div>

  );
};

export default Home;
