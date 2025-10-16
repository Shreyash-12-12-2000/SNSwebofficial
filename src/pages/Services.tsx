import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { servicesData } from '@/data/servicesData'

const Services = () => {
  const benefits = [
    'Proven track record with 100+ successful projects',
    'Industry-certified professionals and experts',
    'Customized solutions tailored to your business needs',
    '24/7 support and maintenance services',
    'Scalable solutions that grow with your business',
    'Competitive pricing with transparent billing'
  ]

  const processSteps = [
    { step: '01', title: 'Research & Insights', description: 'We gather comprehensive data, study market trends, and understand user needs to make informed decisions.' },
    { step: '02', title: 'Ideation & Conceptualization', description: 'Our team brainstorms innovative ideas and conceptualizes solutions tailored to your goals.' },
    { step: '03', title: 'Design & Prototyping', description: 'We create intuitive designs and interactive prototypes to visualize the end product clearly.' },
    { step: '04', title: 'Development & Implementation', description: 'Our developers turn designs into scalable, high-performance solutions with best practices.' },
    { step: '05', title: 'Testing & Optimization', description: 'We rigorously test, optimize, and refine the solution to ensure maximum efficiency and user satisfaction.' }
  ]

  return (
    <div className="min-h-screen pt-16 bg-[#050517] text-white">
      {/* ==================== HERO SECTION ==================== */}
      <section className="py-20 relative bg-[#050517] text-center overflow-hidden">
        {/* Decorative Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/10 via-[#3B82F6]/10 to-[#9333EA]/10 blur-3xl -z-20"></div>

        {/* Cosmic Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute w-2 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ x: [0, 300], y: [0, 150], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: Math.random() * 10 }}
            />
          ))}
          {/* Floating shapes / nebula */}
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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-snug text-center"
          >
            <span className="inline-block bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)" }}>
              Next-Gen Business
            </span>
            <br />
            <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]">Solutions for a Smarter Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-[#E6E7EB] mb-8 max-w-2xl mx-auto leading-relaxed text-center"
          >
            Leverage technology-driven strategies that accelerate growth, enhance efficiency, and future-proof your business.
          </motion.p>
        </div>
      </section>

      {/* ==================== SERVICES GRID ==================== */}
      <section className="py-20 bg-[#050517] relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)" }}>
              Our Service Offerings
            </h2>
            <p className="text-base md:text-lg text-[#E6E7EB] mb-8 max-w-2xl mx-auto leading-relaxed text-center">
              We combine strategy, design, and technology to deliver intelligent solutions that transform ideas into measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Unique Futuristic Design */}
<section className="relative py-24 bg-[#050517] overflow-hidden">
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
        
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center relative"
                  >
                    {/* Floating badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="inline-block mb-8"
                    ></motion.div>
                    </motion.div>
          </div>
  {/* Floating Neon Orbs */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#00FFD5]/20 blur-3xl rounded-full animate-spin-slow"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FD019C]/20 blur-3xl rounded-full animate-ping-slow"></div>
  <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-[#FFB200]/20 blur-3xl rounded-full animate-spin-reverse"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Column - Benefits */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)" }}
        >
          Why Partner with SNSweb?
        </h2>

        <p className="text-gray-300 mb-10 leading-relaxed">
          At SNSweb, innovation meets precision. We blend creativity, technology, and strategy
          to build digital experiences that accelerate growth, enhance performance, and future-proof
          your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-3 p-4 rounded-xl bg-[#101018]/50 border border-[#00FFD5]/20 backdrop-blur-md hover:scale-105 transition-transform shadow-lg"
            >
              <CheckCircle className="w-5 h-5 text-[#00FFD5] flex-shrink-0 animate-pulse" />
              <span className="text-gray-300 text-sm">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Column - Glowing Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[720px] mx-auto p-12 rounded-3xl 
                   bg-[#080818]/60 border border-[#00FFD5]/20 backdrop-blur-3xl 
                   shadow-[0_0_60px_rgba(0,255,214,0.2),0_0_100px_rgba(255,77,109,0.15)] 
                   overflow-hidden"
      >
        {/* Decorative Floating Gradients */}
        <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-r from-[#00FFD5] to-[#FF4D6D] opacity-30 animate-spin-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-r from-[#FD019C] to-[#FFB200] opacity-20 animate-ping-slow"></div>

        {/* Animated Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-[#00FFD5] via-[#FD019C] to-[#FFB200] rounded-full flex items-center justify-center mb-6 mx-auto relative z-10 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#F9FAFB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20m10-10H2" />
          </svg>
        </div>

        <h3 className="text-3xl font-bold text-[#00FFD5] mb-6 relative z-10">
          Ready to Transform Your Business?
        </h3>

        <p className="text-[#F9FAFB]/80 text-lg leading-relaxed mb-8 relative z-10">
          Let’s collaborate to create something remarkable. Schedule a free consultation today and take your business to the next level.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <Button
            asChild
            className="flex-1 bg-gradient-to-r from-[#00FFD5] to-[#FD019C] text-black font-semibold hover:opacity-90 transition"
          >
            <Link to="/contact">Schedule Free Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 border-[#00FFD5] text-[#00FFD5] hover:bg-[#00FFD5]/10"
          >
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </div>
</section>


     {/* Process Section - Correct Left/Right Desktop Timeline */}
<section className="py-24 bg-[#050517] relative overflow-hidden">
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
        
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center relative"
                  >
                    {/* Floating badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="inline-block mb-8"
                    ></motion.div>
                    </motion.div>
          </div>
  <div className="container mx-auto px-6">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 max-w-2xl mx-auto"
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent"
        style={{ backgroundImage: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)" }}
      >
        Our Process
      </h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        A structured, innovative methodology that ensures every project is delivered with precision, efficiency, and measurable results.
      </p>
    </motion.div>

    {/* Timeline */}
    <div className="relative">
      {/* Center Vertical Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#00FFD5]/30 via-[#FD019C]/20 to-[#FFB200]/10 z-0"></div>

      {[ 
        { step: '01', title: 'Research & Insights', description: 'We gather comprehensive data, study market trends, and understand user needs to make informed decisions.' },
        { step: '02', title: 'Ideation & Conceptualization', description: 'Our team brainstorms innovative ideas and conceptualizes solutions tailored to your goals.' },
        { step: '03', title: 'Design & Prototyping', description: 'We create intuitive designs and interactive prototypes to visualize the end product clearly.' },
        { step: '04', title: 'Development & Implementation', description: 'Our developers turn designs into scalable, high-performance solutions with best practices.' },
        { step: '05', title: 'Testing & Optimization', description: 'We rigorously test, optimize, and refine the solution to ensure maximum efficiency and user satisfaction.' }
      ].map((process, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative w-full mb-24 flex flex-col md:flex-row items-center justify-center"
        >
          {/* Left Card for even steps */}
          {index % 2 === 0 && (
            <>
              <div className="hidden md:flex w-1/2 justify-end pr-12">
                <div className="bg-[#1E1E2A]/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-[#FFB200]/20 hover:scale-105 transition-transform duration-300 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{process.description}</p>
                </div>
              </div>
              {/* Circle */}
               <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full
    bg-gradient-to-br from-[#00FFD5] via-[#FD019C] to-[#FFB200]
    shadow-[0_0_20px_rgba(0,255,213,0.5),0_0_40px_rgba(253,1,156,0.3)] z-10"></div>

    
       <div className="hidden md:flex w-1/2"></div> {/* Empty right placeholder */}
            </>
          )}

          {/* Right Card for odd steps */}
          {index % 2 !== 0 && (
            <>
              <div className="hidden md:flex w-1/2"></div> {/* Empty left placeholder */}
              {/* Circle */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full
    bg-gradient-to-br from-[#00FFD5] via-[#FD019C] to-[#FFB200]
    shadow-[0_0_20px_rgba(0,255,213,0.5),0_0_40px_rgba(253,1,156,0.3)] z-10"></div>
              <div className="hidden md:flex w-1/2 justify-start pl-12">
                <div className="bg-[#1E1E2A]/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-[#FFB200]/20 hover:scale-105 transition-transform duration-300 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{process.description}</p>
                </div>
              </div>
            </>
          )}

          {/* Mobile Card */}
                <div className="md:hidden w-5 h-5 rounded-full mx-auto mb-4
    bg-gradient-to-br from-[#00FFD5] via-[#FD019C] to-[#FFB200]
    shadow-[0_0_15px_rgba(0,255,213,0.5),0_0_25px_rgba(253,1,156,0.3)]"></div>
    
          <div className="md:hidden w-full sm:w-3/4 mt-8">
 
            <div className="bg-[#1E1E2A]/70 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-[#FFB200]/20 text-center">
            
              <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
              <p className="text-gray-300 leading-relaxed">{process.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}

export default Services
