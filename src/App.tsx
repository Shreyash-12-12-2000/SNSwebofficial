import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import ServiceDetail from "./pages/ServiceDetail"
import Careers from "./pages/Careers"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SmoothScrollProvider from "./components/SmoothScrollProvider"
import ScrollToTop from "./components/ScrollToTop"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminServices from "./pages/admin/AdminServices"
import AdminCareers from "./pages/admin/AdminCareers"
import ShortcutListener from "./components/ShortcutListener"
import ProtectedRoute from "./components/ProtectedRoute"
import AdContacts from "./pages/admin/AdContacts"




const queryClient = new QueryClient()

// Inside App.tsx
const AdminProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true"
  return isAdmin ? element : <Navigate to="/" />
}


// ✅ This child component lives INSIDE BrowserRouter
const AppContent = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith("/admin")

  return (
    <>
      <ScrollToTop />
      <ShortcutListener />

      {/* Only show Header & Footer on non-admin routes */}
      {!isAdminRoute && <Header />}

      <main className="overflow-x-hidden bg-[#050517]">
        <Routes>
          {/* Main Site Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          {/* Admin Routes (Protected) */}
          <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} />} />
<Route path="/admin/services" element={<ProtectedRoute element={<AdminServices />} />} />
<Route path="/admin/careers" element={<ProtectedRoute element={<AdminCareers />} />} />
<Route path="/admin/contacts" element={<ProtectedRoute element={<AdContacts />} />} />





        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </>
  )
}

// ✅ Main App
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SmoothScrollProvider>
          {/* BrowserRouter wraps AppContent */}
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </SmoothScrollProvider>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
