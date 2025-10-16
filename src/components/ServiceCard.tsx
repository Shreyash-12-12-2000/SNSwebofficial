import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"

interface ServiceCardProps {
  slug: string
  title: string
  icon: LucideIcon
  delay?: number
}

const ServiceCard = ({
  slug,
  title,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) => {
  return (
  
    

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="group relative cursor-pointer flex flex-col items-center justify-center"
    >

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
      <Link
        to={`/services/${slug}`}
        className="relative flex flex-col items-center justify-center h-64 w-64 transition-all duration-500"
      >
        {/* Neon Moving Glow Line */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
            delay: delay * 0.2,
          }}
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent opacity-60"
        />

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative mb-5 flex h-20 w-20 items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-tr from-fuchsia-500 to-indigo-500 opacity-20 group-hover:opacity-40 transition-all duration-500" />
          <Icon className="relative h-10 w-10 text-white group-hover:text-fuchsia-300 transition duration-300" />
        </motion.div>

        {/* Title with subtle glow */}
        <h3 className="text-white font-bold tracking-wide text-lg uppercase text-center drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]">
          {title}
        </h3>

        {/* Bottom Glow Bar with pulse */}
        <motion.div
          animate={{ scaleX: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-3 h-[3px] w-14 bg-gradient-to-r from-fuchsia-500 to-indigo-500 opacity-70 transition-all duration-300"
        />
      </Link>


      
    </motion.div>
  )
}

export default ServiceCard
