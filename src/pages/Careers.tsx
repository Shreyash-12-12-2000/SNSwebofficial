import { motion } from "framer-motion"; 
import {
  MapPin,
  Users,
  TrendingUp,
  Heart,
  Target,
  HelpCircle,
  Briefcase,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Careers = () => {
  const openPositions: any[] = []; // Your open positions

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive medical, dental, and vision insurance plus wellness programs.",
      animation: "heartbeat",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Professional development opportunities, training programs, and clear advancement paths.",
      animation: "bounce",
    },
    {
      icon: Users,
      title: "Team Culture",
      description:
        "Collaborative, inclusive environment with team events and flexible work arrangements.",
      animation: "spin",
    },
    {
      icon: Target,
      title: "Work-Life Balance",
      description:
        "Flexible hours, remote work options, and generous PTO to maintain healthy balance.",
      animation: "pulse",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Senior":
        return "bg-red-800 text-red-300";
      case "Mid-level":
        return "bg-blue-800 text-blue-300";
      case "Junior":
        return "bg-green-800 text-green-300";
      default:
        return "bg-gray-800 text-gray-300";
    }
  };

  const iconAnimations = {
    heartbeat: { scale: [1, 1.3, 1], transition: { repeat: Infinity, duration: 1 } },
    bounce: { y: [0, -10, 0], transition: { repeat: Infinity, duration: 1 } },
    spin: { rotate: [0, 360], transition: { repeat: Infinity, duration: 4, ease: "linear" as any } },
    pulse: { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 1.2 } },
  };

  return (
    <div className="min-h-screen bg-[#050517] text-[#F9FAFB]">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">

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

   
  </div>

        <div className="container mx-auto px-4 text-center relative z-10 mt-[50px]">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Shape the<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFD5] via-[#FD019C] to-[#FFB200]"> Future With Us </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#D1D5DB]"
          >
           Be part of a team where innovation, collaboration, and impact drive everything we do.
          </motion.p>
          <Button className="bg-gradient-to-r from-[#00FFD5] via-[#FD019C] to-[#FFB200] text-[#050517] hover:opacity-80">
            <Link to={"/careers#positions"} onClick={() => { window.scrollTo(0, 1117); }}>View Open Positions</Link>
          </Button>
        </div>

      </section>

     
      {/* Stats Section */}
<section className="relative py-24 overflow-hidden">

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

  <div className="container mx-auto px-8 relative z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-center">
      {[
        { number: 100, label: "Team Members",suffix:"+", icon: Users, animation: "bounce" },
        { number: 99, label: "Employee Satisfaction", suffix: "%", icon: Heart, animation: "pulse" },
        { number: 1, label: "Countri",suffix: "-INDIA" ,icon: MapPin, animation: "float" },
        { number: 5, label: "Years Growing",suffix: "+" , icon: TrendingUp, animation: "rotate" },
      ].map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
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
            {/* Icon */}
            <motion.div
              animate={
                stat.animation === "bounce"
                  ? { y: [0, -6, 0] }
                  : stat.animation === "pulse"
                  ? { scale: [1, 1.05, 1] }
                  : stat.animation === "rotate"
                  ? { rotate: [0, 360] }
                  : stat.animation === "float"
                  ? { y: [0, -8, 0] }
                  : {}
              }
              transition={{
                duration: stat.animation === "rotate" ? 6 : 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-16 h-16 rounded-full 
                         bg-gradient-to-tr from-[#00FFD5] via-[#FD019C] to-[#FFB200]
                         flex items-center justify-center mx-auto mb-4 
                         shadow-[0_0_25px_rgba(255,77,109,0.6)]"
            >
              <Icon className="h-8 w-8 text-white drop-shadow-lg" />
            </motion.div>

            {/* Animated Number */}
            <div
              className="text-4xl md:text-5xl font-extrabold 
                         bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] 
                         bg-clip-text text-transparent mb-2 tracking-wide"
            >
              <CountUp end={stat.number} duration={2.5} suffix={stat.suffix || ""} enableScrollSpy />
            </div>

            {/* Label */}
            <div className="text-[#F9FAFB]/90 text-lg font-medium">{stat.label}</div>

            {/* Sparkle dots */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-[#00FFD6] rounded-full animate-ping opacity-70"></div>
            <div className="absolute bottom-5 right-6 w-2 h-2 bg-[#FF4D6D] rounded-full animate-ping opacity-60"></div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


     {/* Benefits Section */}
      <section className="py-20 container mx-auto px-4">
           <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
         <h2 className="text-4xl font-bold mb-4 text-white">
  Why{" "}
  <span className="bg-gradient-to-r from-[#00FFD5] via-[#FD019C] to-[#FFB200] bg-clip-text text-transparent">
    Work With Us?
  </span>
</h2>

          <p className="max-w-2xl mx-auto text-[#D1D5DB]">
          Our success begins with passionate people. We’ve built a workplace that nurtures ambition, celebrates ideas, and supports every step of your professional journey.
          </p>
        </motion.div>

      <div className="relative">


  <div className="container mx-auto px-8 relative z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-center">
      
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group p-8 rounded-3xl 
                       border border-[#00FFD6]/50 
                       backdrop-blur-xl shadow-[0_0_25px_rgba(0,255,214,0.4)]
                       hover:shadow-[0_0_45px_rgba(255,77,109,0.6)]
                       hover:scale-105 transition-all"
          >
            
            {/* Icon container */}
            <motion.div
              animate={
                benefit.animation === 'heartbeat'
                  ? { scale: [1, 1.3, 1] }
                  : benefit.animation === 'bounce'
                  ? { y: [0, -6, 0] }
                  : benefit.animation === 'spin'
                  ? { rotate: [0, 360] }
                  : benefit.animation === 'pulse'
                  ? { scale: [1, 1.1, 1] }
                  : {}
              }
              transition={{
                duration: benefit.animation === 'spin' ? 4 : 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-20 h-20 rounded-full 
                         bg-gradient-to-tr from-[#00FFD5] via-[#FD019C] to-[#FFB200]
                         flex items-center justify-center mx-auto mb-6 
                         shadow-[0_0_25px_rgba(255,77,109,0.6)]"
            >
              <Icon className="h-10 w-10 text-white drop-shadow-lg" />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-extrabold 
                           bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] 
                           bg-clip-text text-transparent mb-2 text-center">
              {benefit.title}
            </h3>

            {/* Description */}
            <p className="text-[#D1D5DB]/90 text-sm text-center">{benefit.description}</p>
          </motion.div>
        );
      })}
    </div>
  </div>
</div>
  </section>


           {/* Open Positions */}
      <section id="positions" className="relative py-24 overflow-hidden bg-[#050517]">

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

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="flex justify-center mb-4">
          <Sparkles className="text-[#00FFD6] w-6 h-6" />
        </div>
<h2 className="text-5xl font-bold mb-4 text-white">
  Shape the{" "}
  <span className="bg-gradient-to-r from-[#00FFD5] via-[#FD019C] to-[#FFB200] bg-clip-text text-transparent">
    Future With Us
  </span>
</h2>
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] mx-auto rounded-full mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <p className="text-[#D1D5DB] max-w-2xl mx-auto text-lg">
          Explore exciting roles and help shape the future with us.
        </p>
      </motion.div>

      {/* Job Cards */}
      {openPositions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12">
          {openPositions.map((position, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card className="relative backdrop-blur-xl bg-[#101426]/70 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_25px_#FF4D6D50] transition-all overflow-hidden">
                {/* Glow Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] opacity-0 group-hover:opacity-20 transition-all duration-500"
                />

                <CardHeader className="relative z-10 flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#FFB200]" />
                      {position.title}
                    </CardTitle>
                    <CardDescription className="text-[#9CA3AF] text-sm flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {position.department}
                    </CardDescription>
                  </div>
                  <motion.div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(
                      position.level
                    )}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {position.level}
                  </motion.div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-[#D1D5DB] mb-4 leading-relaxed">{position.description}</p>

                  {position.requirements && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-center text-[#D1D5DB] text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] rounded-full mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                    <Button className="w-full bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] text-[#050517] font-semibold shadow-lg hover:shadow-[0_0_20px_#FF4D6D60]">
                      Apply Now
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <div className="w-20 h-20 bg-[#1F1E2A] rounded-full flex items-center justify-center mb-4 shadow-inner shadow-[#FF4D6D30]">
            <HelpCircle className="w-10 h-10 text-[#F9FAFB]" />
          </div>
          <p className="text-white text-lg font-medium mb-2">
            No open positions right now
          </p>
          <p className="text-[#D1D5DB] text-sm">
            Check back later or send us your resume.
          </p>
        </motion.div>
      )}
    </section>
    
<section className="relative py-20 bg-[#050517] text-center overflow-hidden ">
  {/* ✅ Added relative and overflow-hidden for proper positioning */}
  
  {/* Decorative background gradient behind particles */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/10 via-[#3B82F6]/10 to-[#9333EA]/10 blur-3xl -z-10"></div>

  {/* Universe Stars and Particles */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    {/* Twinkling Stars */}
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.5, 0.5] }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2
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
          top: `${Math.random() * 100}%`
        }}
        animate={{ x: [0, 300], y: [0, 150], opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: Math.random() * 10
        }}
      />
    ))}
  </div>

  {/* ✅ Foreground Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-3xl mx-auto mt-12"
  >
    <h2 className="text-4xl font-bold mb-4 text-[#F9FAFB]">
      Don’t See the Right Position?
    </h2>
    <p className="text-[#D1D5DB] text-lg mb-6">
      We're always looking for talented individuals. Send us your resume and join our mission.
    </p>
    <Button className="bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] text-[#050517] hover:opacity-80">
      <Link to="/contact#hr-contact">Send Your Resume</Link>
    </Button>
  </motion.div>
</section>


    
    </div>
  );
};

export default Careers;
