import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, User, Sparkles, Zap, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import confetti from "canvas-confetti";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const hrName = "Shel Mate ";
  const hrEmail = "snswebofficial@gmail.com";
  const hrAddress = "Shope No 1 Shivheights Apartment Belatrodi Road Nagpur";

  const hrCardRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === "#hr-contact" && hrCardRef.current) {
      const offset = 122;
      const element = hrCardRef.current;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      setTimeout(() => {
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }, 1000);

      element.classList.add(
        // glow using neon pink as focal highlight for the scroll-to highlight
        "shadow-[0_0_60px_rgba(253,1,156,0.6)]",
        "scale-105",
        "border-[rgba(253,1,156,0.9)]",
        "ring-4",
        "ring-[rgba(253,1,156,0.2)]",
      );

      const timeout = setTimeout(() => {
        element.classList.remove(
          "shadow-[0_0_60px_rgba(253,1,156,0.6)]",
          "scale-105",
          "border-[rgba(253,1,156,0.9)]",
          "ring-4",
          "ring-[rgba(253,1,156,0.2)]",
        );
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [location]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };




 const handleSubmit = async (e: React.FormEvent) => {  // ← add async
  e.preventDefault();

  // Check phone number: must be 10 digits and not all zeros
  const phoneRegex = /^[1-9][0-9]{9}$/;
  if (!phoneRegex.test(formData.phone)) {
    alert("Please enter a valid phone number.");
    return;
  }

  // Block common fake emails
  const fakeEmails = ["example@gmail.com", "test@gmail.com", "abc@gmail.com"];
  if (fakeEmails.includes(formData.email.toLowerCase())) {
    alert("Please enter a valid email address.");
    return;
  }

  // Check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  
  setLoading(true);

  const url = "http://localhost:7119/api/contact/sendEmail"; // ← match your backend port

  try {
    const response = await axios.post(url, formData); // now await works correctly
    if (response.status === 200) {
      toast.success("Message sent! We'll be in touch soon 🚀", { position: "top-right", autoClose: 5000, theme: "dark" });

      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        colors: ["#00FFD5", "#FD019C", "#FFB200"],
      });
    } else {
      toast.error("Failed to send message", { position: "top-right", autoClose: 5000, theme: "dark" });
    }
  } catch (error) {
    console.error("Error during send email:", error);
    toast.error("Oops! Please try again.", { position: "top-right", autoClose: 5000, theme: "dark" });
  }

  setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  setLoading(false);
};


  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "snswebofficial@gmail.com",
      secondary: "snswebofficial@gmail.com",
      description: "24/7 availability",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91-9370557119",
      secondary: "+91-9370557119",
      description: "Mon-Fri, 8am-6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Shope No 1 Shiv height",
      secondary: "Beltarodi Nagpur",
      description: "Our headquarters",
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Monday - Friday",
      secondary: "8:00 AM - 6:00 PM",
      description: "Quick response",
    },
  ];

  const offices = [
    {
      city: "Nagpur",
      address: "Shope No 1 Shiv height Beltarodi Nagpur 440034",
      phone: "+91-937055119",
      email: "Snswebofficial@gmail.com",
    },
  ];

  const faqs = [
    {
      question: "What's included in a free consultation?",
      answer:
        "Comprehensive analysis of your challenges, goal discussion, and preliminary recommendations for your business success.",
    },
    {
  question: "Can I request a custom solution?",
  answer: "Yes! We offer fully customized solutions to meet your unique business needs and objectives.",
},
{
  question: "How do you ensure project quality?",
  answer: "We follow a structured process with regular reviews, testing, and feedback loops to ensure the highest quality outcomes.",
},
{
  question: "Do you provide post-project support?",
  answer: "Absolutely! We offer ongoing maintenance, support, and optimization to ensure long-term success.",
},
{
  question: "How do I get started?",
  answer: "Simply reach out through our contact form or schedule a free consultation, and we’ll guide you through the next steps.",
},
{
  question: "Can I scale my project later?",
  answer: "Yes, all our solutions are designed to be scalable, allowing your business to grow without limitations.",
},
{
  question: "Do you offer remote services?",
  answer: "Yes, we work with clients globally and provide seamless remote collaboration through modern communication tools.",
},
{
  question: "What makes your team different?",
  answer: "Our team combines deep industry expertise with innovative thinking, ensuring solutions that drive real business impact.",
},
    {
      question: "How long does a typical project take?",
      answer:
        "2-12 weeks depending on scope and complexity. We provide detailed timelines during planning.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Yes! We serve startups to enterprises with scalable, customized solutions for every budget.",
    },
    {
      question: "What's your pricing structure?",
      answer:
        "Flexible models: project-based, retainer, or hourly. Pricing varies by scope and complexity.",
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-[#050517] text-white">  
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
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
            >
              <div className="relative group">
                <div className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" style={{ background: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)" }} />
                <div className="relative px-6 py-3 bg-[#101426]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.06)] rounded-full flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-sm font-semibold bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)" }}>
                    Let's Connect
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="inline-block bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)" }}>
                Transform
              </span>
              <br />
              <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.06)]">Your Vision</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-[#E6E7EB] mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to revolutionize your business? Let's craft something extraordinary together.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative overflow-hidden px-8 py-6 text-lg"
                style={{ background: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)", boxShadow: "0 0 40px rgba(0,255,213,0.08)" }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  style={{ background: "linear-gradient(90deg,#FD019C,#00FFD5)" }}
                />
                <span className="relative flex items-center gap-2 text-black font-semibold">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Cards */}
      <section className="relative py-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative h-full"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" style={{ background: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)" }} />
                  
                  {/* Card */}
                  <div className="relative h-full backdrop-blur-xl" style={{ background: "rgba(16,20,38,0.3)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "1rem", padding: "1.5rem", overflow: "hidden" }}>
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, rgba(0,255,213,0.08) 0%, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 mx-auto mb-4 rounded-2xl backdrop-blur-sm border flex items-center justify-center"
                        style={{ background: "linear-gradient(180deg, rgba(0,255,213,0.08), rgba(253,1,156,0.06))", border: "1px solid rgba(0,255,213,0.08)" }}
                      >
                        <info.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-white mb-2">
                        {info.title}
                      </h3>
                      <p className="text-sm font-semibold" style={{ color: "#00FFD5", marginBottom: "0.25rem" }}>
                        {info.primary}
                      </p>
                      <p className="text-xs text-[#C9CBD0] mb-1">
                        {info.secondary}
                      </p>
                      <p className="text-xs text-[#A8AAB0]">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   <section className="relative py-20">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/10 via-[#3B82F6]/10 to-[#9333EA]/10 blur-3xl -z-20"></div>

  {/* Universe Stars and Particles */}
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
  </div>

  {/* Cards Row */}
  <div className="relative z-10 container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      {/* HR Contact Card */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="h-full flex flex-col rounded-2xl p-6 bg-[rgba(16,20,38,0.3)] border border-[rgba(255,255,255,0.06)] cursor-default relative overflow-hidden">
          <div className="relative z-10 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-b from-pink-500/10 to-yellow-400/5">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white">Contact HR</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="font-semibold text-[#00FFD5]">{hrName}</div>
                <div className="flex items-start gap-2 text-[#C9CBD0]">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#FD019C]" /> <span>{hrAddress}</span>
                </div>
                <div className="flex items-center gap-2 text-[#C9CBD0]">
                  <Mail className="w-4 h-4 text-[#FD019C]" /> <span>{hrEmail}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-right">
              <a
  href={`https://mail.google.com/mail/?view=cm&to=${hrEmail}&su=Hello&body=I%20am%20interested`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#FD019C] text-xs font-medium inline-flex items-center gap-1"
>
  Send Email <ArrowRight className="w-3 h-3" />
</a>

            </div>
          </div>
        </div>
      </motion.div>

      {/* Offices Card */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
        <div className="h-full flex flex-col rounded-2xl p-6 bg-[rgba(16,20,38,0.3)] border border-[rgba(255,255,255,0.06)]">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#00FFD5]" /> Our Locations
          </h4>
          
            {offices.map((office) => (
              <div key={office.city} className="rounded-xl p-3 bg-[rgba(16,20,38,0.12)] border border-[rgba(255,255,255,0.04)] transition-all hover:translate-x-1">
                <h5 className="font-semibold text-white flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-[#00FFD5] rounded-full animate-pulse" /> {office.city}
                </h5>
                <div className="flex items-start gap-2"><MapPin className="w-3 h-3 mt-0.5 text-[#00FFD5]" /><span>{office.address}</span></div>
                <div className="flex items-center gap-2"><Phone className="w-3 h-3 text-[#00FFD5]" /><span>{office.phone}</span></div>
                <div className="flex items-center gap-2"><Mail className="w-3 h-3 text-[#00FFD5]" /><span>{office.email}</span></div>
              </div>
            ))}
          </div>
      </motion.div>

      {/* Quick Response Card */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
        <div className="h-full flex flex-col rounded-2xl p-6 bg-[rgba(16,20,38,0.3)] border border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-[#00FFD5]" />
            <h4 className="font-bold text-white">Quick Response</h4>
          </div>
          <ul className="space-y-2 text-sm text-[#C9CBD0] flex-1 flex flex-col justify-between">
            {[{ label: "Email", time: "5 hours", color: "#00FFD5" },
              { label: "Phone", time: "Immediate", color: "#FD019C" },
              { label: "Projects", time: "24 hours", color: "#00FFD5" },
              { label: "Support", time: "24/7", color: "#FD019C" }].map((item, i) => (
              <li key={i} className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <div style={{ width: 6, height: 6, background: item.color, borderRadius: 9999 }} /> {item.label}:
                </span>
                <span className="font-medium text-white">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </div>
</section>

 {/* Main Contact Section */}
<section
  className="relative flex items-center justify-center min-h-screen py-20"
  id="contact-form"
>

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
  {/* Animated Background Gradient Glow */}
  <div className="absolute inset-0 -z-10">
    <motion.div
      animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 left-10 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
      style={{ background: "radial-gradient(circle, #00FFD5 0%, transparent 70%)" }}
    />
    <motion.div
      animate={{ x: [0, -40, 60, 0], y: [0, 60, -30, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-20 right-10 w-[700px] h-[700px] rounded-full opacity-20 blur-[120px]"
      style={{ background: "radial-gradient(circle, #FD019C 0%, transparent 70%)" }}
    />
  </div>



  <div className="container mx-auto px-4">
    {/* Two-column layout: left form, right image */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
      
      {/* Contact Form - 3 columns */}
      <div className="lg:col-span-3 order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group"
        >
          <div className="relative">
            {/* Glow */}
            <div
              className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)",
              }}
            />

            {/* Card */}
            <div
              className="relative backdrop-blur-xl"
              style={{
                background: "rgba(16,20,38,0.3)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "1rem",
                padding: "2rem",
                overflow: "hidden",
              }}
            >
              {/* Decorative corners */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,255,213,0.06), rgba(253,1,156,0.02))",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(253,1,156,0.04), rgba(255,178,0,0.02))",
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-12 h-12 rounded-xl backdrop-blur-sm border flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,255,213,0.06), rgba(253,1,156,0.06))",
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h2
                      className="text-3xl font-bold"
                      style={{
                        background: "linear-gradient(90deg,#00FFD5,#FD019C)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      Send a Message
                    </h2>
                    <p className="text-sm text-[#C9CBD0]">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-white font-medium"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        style={{
                          background: "rgba(5,5,23,0.6)",
                          border: "1px solid rgba(255,255,255,0.04)",
                          color: "#FFFFFF",
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-white font-medium"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        style={{
                          background: "rgba(5,5,23,0.6)",
                          border: "1px solid rgba(255,255,255,0.04)",
                          color: "#FFFFFF",
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-white font-medium"
                    >
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91"
                      pattern="\d{10}"
                      maxLength={10}
                      required
                      style={{
                        background: "rgba(5,5,23,0.6)",
                        border: "1px solid rgba(255,255,255,0.04)",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-white font-medium"
                    >
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                      required
                      style={{
                        background: "rgba(5,5,23,0.6)",
                        border: "1px solid rgba(255,255,255,0.04)",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-white font-medium"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      style={{
                        background: "rgba(5,5,23,0.6)",
                        border: "1px solid rgba(255,255,255,0.04)",
                        color: "#FFFFFF",
                      }}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full relative overflow-hidden py-6 text-lg font-semibold"
                      style={{
                        background:
                          "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)",
                        boxShadow: "0 0 40px rgba(0,255,213,0.08)",
                        color: "#000000",
                      }}
                    >
                      <span className="relative flex items-center justify-center gap-2">
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image - 2 columns */}
    <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center items-center">
  <motion.img
    src="side1.png"
    alt="Contact Illustration"
    className="w-full max-w-xl h-[700px] object-cover rounded-3xl shadow-2xl"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  />
</div>

    </div>
  </div>
</section>


<section className="relative py-20 bg-[#050517] flex justify-center items-center">

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
  {/* Animated Background Gradient Glow */}
  <div className="absolute inset-0 -z-10">
    <motion.div
      animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 left-10 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
      style={{ background: "radial-gradient(circle, #00FFD5 0%, transparent 70%)" }}
    />
    <motion.div
      animate={{ x: [0, -40, 60, 0], y: [0, 60, -30, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-20 right-10 w-[700px] h-[700px] rounded-full opacity-20 blur-[120px]"
      style={{ background: "radial-gradient(circle, #FD019C 0%, transparent 70%)" }}
    />
  </div>


  <div className="container mx-auto px-4 flex justify-center">
    <img
      src="join.gif"
      alt="Contact Form"
      className="w-full max-w-3xl h-auto object-contain rounded-xl shadow-lg"
    />
  </div>
</section>

     {/* FAQ Section - Futuristic Neon Glass Design */}
<section className="relative py-32 bg-[#050517] overflow-hidden">
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
  {/* Animated Background Gradient Glow */}
  <div className="absolute inset-0 -z-10">
    <motion.div
      animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 left-10 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
      style={{ background: "radial-gradient(circle, #00FFD5 0%, transparent 70%)" }}
    />
    <motion.div
      animate={{ x: [0, -40, 60, 0], y: [0, 60, -30, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-20 right-10 w-[700px] h-[700px] rounded-full opacity-20 blur-[120px]"
      style={{ background: "radial-gradient(circle, #FD019C 0%, transparent 70%)" }}
    />
  </div>

  {/* Title Section */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center mb-20"
  >
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block mb-6"
    >
      <div
        className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto border border-[#00FFD5]/20"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,255,213,0.1), rgba(253,1,156,0.1))",
        }}
      >
        <Sparkles className="w-10 h-10 text-white" />
      </div>
    </motion.div>
    <h2
      className="text-5xl md:text-7xl font-extrabold mb-6"
      style={{
        background:
          "linear-gradient(90deg, #00FFD5, #FD019C, #FFB200)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Frequently Asked Questions
    </h2>
    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
      Get clear answers about our services, process, and collaboration style.
    </p>
  </motion.div>

{/* FAQ Accordion Grid */}
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
  {faqs.map((faq, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="relative group flex"
    >
      {/* Outer Glow Border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
        style={{
          background: "linear-gradient(90deg,#00FFD5,#FD019C,#FFB200)",
        }}
      />

      {/* FAQ Card */}
      <motion.div
        className="relative z-10 p-5 rounded-2xl bg-[#101426]/70 backdrop-blur-2xl border border-white/10 overflow-hidden flex flex-col justify-center items-start w-full h-[80px]"
        whileHover={{ y: -3 }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,255,213,0.2), rgba(253,1,156,0.2), rgba(255,178,0,0.2))",
          }}
        />

        <div className="relative z-10 w-full">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <h4 className="text-base font-semibold text-white group-hover:text-[#00FFD5] transition-colors">
                {faq.question}
              </h4>
              <motion.span
                className="text-[#FD019C]"
                animate={{ rotate: [0, 180, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ❖
              </motion.span>
            </summary>
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-sm text-gray-300 mt-1 leading-relaxed line-clamp-2"
            >
              {faq.answer}
            </motion.p>
          </details>
        </div>
      </motion.div>
    </motion.div>
  ))}
</div>


</section>

    </div>
  );
};

export default Contact;
