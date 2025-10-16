import { useEffect, useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle,Home } from 'lucide-react'
import { getServiceBySlug, ServiceData } from '@/data/servicesData'

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const [service, setService] = useState<ServiceData | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      const serviceData = getServiceBySlug(slug)
      setService(serviceData)
      setLoading(false)

      if (serviceData) {
        document.title = `${serviceData.title} - SNSweb`
      } else {
        document.title = 'SNSweb - Service Not Found'
      }
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050517]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
      </div>
    )
  }

  if (!service) return <Navigate to="/404" replace />

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-[#050517] text-white relative overflow-hidden">
      {/* Hero Section */}
     <section
  className="relative z-10 flex flex-col md:flex-row items-center py-32 max-w-6xl mx-auto px-6 gap-12">



    
  {/* Orb Icon */}
  <div className="flex-1 flex justify-center md:justify-start">
    <div
      className="w-40 h-40 rounded-full flex items-center justify-center shadow-xl animate-pulse"
      style={{
       backgroundImage: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)",
        boxShadow: '0 0 20px rgba(0, 94, 255, 0.4), 0 0 40px rgba(255,77,109,0.6)'
      }}
    >

      
      <Icon
        className="w-16 h-16 text-white"
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      />
    </div>
  </div>

  {/* Text Content */}
  <div className="flex-2 text-center md:text-left">
    <h1
      className="text-5xl inline-block font-bold mb-4 bg-clip-text text-transparent"
      style={{
       backgroundImage: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)" ,
        textShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}
    >
      {service.title}
    </h1>
    <p className="text-lg  mb-6 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]">{service.description}</p>
    <Link
      to="/services"
      className="inline-flex items-center text-[#00FFD6] hover:text-white font-medium"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
  <Home className="w-4 h-4 mr-2" />
  Back to Services
    </Link>
  </div>
</section>


     {/* Features Section */}
<section className="py-24 max-w-6xl mx-auto px-6">
  
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
  {/* Gradient Heading */}
 <div className="flex justify-center mb-4">
  <h2
    className="text-5xl font-bold bg-clip-text text-transparent"
    style={{
      backgroundImage: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)",
      textShadow: "0 2px 10px rgba(0,0,0,0.2)",
    }}
  >
    Core Features
  </h2>
</div>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
    {service.features.map((feature, i) => {
      
      return (
        <motion.div
          key={i}
          className=" backdrop-blur-lg p-8 rounded-3xl flex flex-col items-center text-center shadow-[0_0_20px_rgba(0,255,214,0.2),0_0_40px_rgba(255,77,109,0.3)] hover:shadow-[0_0_30px_rgba(0,255,214,0.4),0_0_60px_rgba(255,77,109,0.6)] hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        >
         

          {/* Title */}
          <h3
            className="text-xl font-extrabold mb-2 text-center bg-clip-text text-transparent"
            style={{
              backgroundImage: " linear-gradient(white, #f7ca60ff)",
            }}
          >
            {feature}
          </h3>
        </motion.div>
      );
    })}
  </div>
</section>


{/* Benefits Section */}
<section className="py-28 relative overflow-hidden" style={{ background: '#050517' }}>
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
  {/* Background floating shapes */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="w-3 h-3 bg-[#00FFD6] rounded-full absolute animate-pulse" style={{ top: '10%', left: '15%' }}></div>
    <div className="w-2 h-2 bg-[#FF4D6D] rounded-full absolute animate-pulse" style={{ top: '60%', left: '85%' }}></div>
    <div className="w-2 h-2 bg-[#FFB200] rounded-full absolute animate-pulse" style={{ top: '40%', left: '50%' }}></div>
    <div className="w-1 h-1 bg-[#00FFD6] rounded-full absolute animate-pulse" style={{ top: '30%', left: '70%' }}></div>
  </div>

  {/* Heading */}
  <div className="flex justify-center mb-16">
    <h2
      className="text-5xl font-extrabold bg-clip-text text-transparent text-center"
      style={{
        backgroundImage: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)",
        textShadow: "0 2px 15px rgba(0,0,0,0.3)",
      }}
    >
      Key Benefits
    </h2>
  </div>

  {/* Benefits Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 relative z-10">
    {service.benefits.map((benefit, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.15 }}
        className="group relative  backdrop-blur-2xl p-8 rounded-3xl shadow-[0_0_30px_rgba(0,255,214,0.15),0_0_50px_rgba(255,77,109,0.2)] hover:scale-105 hover:-translate-y-2 transition-transform border border-transparent hover:border-gradient-to-tr from-[#00FFD6] via-[#FF4D6D] to-[#FFB200]"
      >
        {/* Animated top gradient bar */}
        <div className="h-1 w-full rounded-full mb-4 bg-gradient-to-r from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] animate-[gradientShift_4s_ease_infinite]"></div>

        {/* Neon Icon Circle */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#00FFD6] via-[#FF4D6D] to-[#FFB200] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(0,255,214,0.3),0_0_40px_rgba(255,77,109,0.4)] group-hover:scale-110 transition-transform">
          <CheckCircle className="w-7 h-7 text-white drop-shadow-lg" />
        </div>

        {/* Benefit Text */}
        <p className="text-white/80 text-lg font-medium">{benefit}</p>
      </motion.div>
    ))}
  </div>

  {/* Gradient animation keyframes */}
  <style>
    {`
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
  </style>
</section>




     {/* Unique Process Timeline */}
<section className="py-24 max-w-6xl mx-auto px-6 relative">
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
  {/* Header */}
  <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
    How We Work
  </h2>

  {/* Timeline Container */}
  <div className="relative flex flex-col md:flex-row md:justify-between gap-16 md:gap-0">
    {service.process.map((step, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        className="relative flex-1 md:flex-none md:w-1/5 bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-cyan-500/20 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl hover:translate-y-[-10px] hover:shadow-3xl transition-all cursor-pointer"
      >
        {/* Step Number Circle */}
        <div className="absolute -top-6 left-1/2 md:left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-tr from-purple-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {i + 1}
        </div>

        {/* Connector Line for desktop */}
        {i < service.process.length - 1 && (
          <div className="hidden md:block absolute top-7 right-[-50%] w-[100%] h-1 bg-gradient-to-r from-purple-400/50 to-cyan-400/50 rounded-full z-0"></div>
        )}

        {/* Content */}
        <h3 className="text-2xl font-semibold text-white mt-10 mb-4 text-center md:text-left">
          {step.title}
        </h3>
        <p className="text-white/70 text-center md:text-left">{step.description}</p>
      </motion.div>
    ))}
  </div>

  {/* Decorative Floating Dots */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <div className="w-3 h-3 bg-purple-400 rounded-full absolute animate-bounce" style={{ top: '10%', left: '15%' }}></div>
    <div className="w-2 h-2 bg-cyan-400 rounded-full absolute animate-pulse" style={{ top: '70%', left: '80%' }}></div>
    <div className="w-4 h-4 bg-pink-400 rounded-full absolute animate-bounce" style={{ top: '40%', left: '50%' }}></div>
  </div>
</section>


      {/* Unique Case Study Section */}
{service.caseStudy && (
  <section className="py-24 max-w-6xl mx-auto px-6 relative">
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
    {/* Header */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 text-center mb-16">
      Case Study
    </h2>

    {/* Cards Container */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {service.caseStudy.results.map((result, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="relative group bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-cyan-400/20 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl hover:-translate-y-4 hover:shadow-3xl transition-transform cursor-pointer flex items-start space-x-4"
        >
          {/* Floating Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <CheckCircle className="w-6 h-6" />
          </div>

          {/* Content */}
          <p className="text-white/80 text-lg leading-relaxed">{result}</p>

          {/* Decorative Glow */}
          <span className="absolute -top-4 -right-4 w-6 h-6 bg-cyan-400/30 rounded-full blur-2xl animate-pulse pointer-events-none"></span>
          <span className="absolute bottom-0 left-0 w-10 h-10 bg-pink-400/20 rounded-full blur-3xl animate-pulse pointer-events-none"></span>
        </motion.div>
      ))}
    </div>

    {/* Optional Floating Particles */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="w-3 h-3 bg-purple-400 rounded-full absolute animate-bounce" style={{ top: '15%', left: '10%' }}></div>
      <div className="w-2 h-2 bg-cyan-400 rounded-full absolute animate-pulse" style={{ top: '60%', left: '80%' }}></div>
      <div className="w-4 h-4 bg-pink-400 rounded-full absolute animate-bounce" style={{ top: '40%', left: '50%' }}></div>
    </div>
  </section>
)}


    {/* CTA Section - Unique Professional Design */}
<section className="relative py-32 bg-gradient-to-tr from-cyan-900/20 to-purple-900/20 overflow-hidden"style={{ background: '#050517' }}>
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
  {/* Decorative Abstract Shapes */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full filter blur-3xl animate-blob"></div>
  <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-purple-400/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

  <div className="relative max-w-4xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-16 hover:scale-105 transition-transform"
    >
      {/* Highlighted Badge */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black font-bold px-4 py-1 rounded-full text-sm shadow-lg animate-pulse">
        Let's Collaborate
      </div>

      <h2 className="text-4xl font-extrabold text-white mb-4">Ready to Take Your Business to the Next Level?</h2>
      <p className="text-white/70 mb-10 text-lg">
        Discover how our <span className="text-cyan-300 font-semibold">{service.title}</span> can transform your operations and maximize growth.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link
          to="/contact"
          className="relative px-8 py-4 bg-cyan-400 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all before:absolute before:inset-0 before:bg-white/10 before:rounded-xl before:blur-sm before:-z-10"
        >
          Get Free Consultation
        </Link>
        <Link
          to="/services"
          className="relative px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all before:absolute before:inset-0 before:bg-white/10 before:rounded-xl before:blur-sm before:-z-10"
        >
          View All Services
        </Link>
      </div>
    </motion.div>
  </div>
</section>

{/* Add this CSS for the blob animations */}
<style>
{`
  @keyframes blob {
    0%, 100% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
`}
</style>

    </div>
  )
}

export default ServiceDetail
