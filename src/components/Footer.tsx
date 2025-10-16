import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin} from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Services', path: '/services' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'IT Services', path: '/services/it-services'},
      { name: 'Digital Marketing', path: '/services/digital-marketing' },
      { name: 'HR & Recruitment', path: '/services/hr-recruitment' },
      { name: 'Customer Support', path: '/services/customer-support' },
    ],
  }

  const socialLinks = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/yourprofile' },
  { icon: FaTwitter, url: 'https://twitter.com/yourprofile' },
  { icon: FaFacebook, url: 'https://facebook.com/yourprofile' },
  { icon: FaInstagram, url: 'https://instagram.com/yourprofile' },
  { icon: FaWhatsapp, url: 'https://wa.me/yourphonenumber' },
]

  return (
    <footer className="bg-[#0D0F1A] text-[#F9FAFB]/90 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-[#6EE7B7]/30 via-[#3B82F6]/20 to-[#9333EA]/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        
        {/* Company Info */}
        <div className="space-y-4 backdrop-blur-sm bg-[#0D0F1A]/50 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center space-x-2">
            <img src="sns2.svg" alt="BusinessPro Logo" className="w-[17rem]" />
          </div>
          <p className="text-[#F9FAFB]/80 text-sm">
            Leading provider of professional business services, delivering innovative solutions 
            to help your business grow in today's competitive market.
          </p>
          <div className="flex space-x-3">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform transform hover:scale-125 group relative`}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] opacity-30 group-hover:opacity-60 transition-opacity blur-xl"></div>
                <Icon className="w-5 h-5 text-white relative z-10" />
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div className="backdrop-blur-sm bg-[#0D0F1A]/50 p-6 rounded-2xl shadow-lg">
          <h3 className="font-semibold text-[#F9FAFB] mb-4">Company</h3>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="text-[#F9FAFB]/80 hover:text-[#3B82F6] transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div className="backdrop-blur-sm bg-[#0D0F1A]/50 p-6 rounded-2xl shadow-lg">
          <h3 className="font-semibold text-[#F9FAFB] mb-4">Services</h3>
          <ul className="space-y-2">
            {footerLinks.services.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="text-[#F9FAFB]/80 hover:text-[#3B82F6] transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="backdrop-blur-sm bg-[#0D0F1A]/50 p-6 rounded-2xl shadow-lg">
          <h3 className="font-semibold text-[#F9FAFB] mb-4">Contact Info</h3>
          <div className="space-y-3 text-sm text-[#F9FAFB]/80">
            <div className="flex items-center space-x-3 hover:text-[#3B82F6] transition-colors">
              <Mail className="w-4 h-4 text-[#3B82F6]" />
              <span>snswebofficial@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 hover:text-[#3B82F6] transition-colors">
              <Phone className="w-4 h-4 text-[#3B82F6]" />
              <span>+91-9370557119</span>
            </div>
            <div className="flex items-start space-x-3 hover:text-[#3B82F6] transition-colors">
              <MapPin className="w-4 h-4 text-[#3B82F6] mt-0.5" />
              <span>
                Shope No 1 Shivheights Appartment <br />
                Betarodi Road<br />
                Nagpur , 440034
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#F9FAFB]/20 mt-12 pt-6 text-center relative z-10">
        <p className="text-[#F9FAFB]/60 text-sm">
          © {currentYear} SNSweb. All rights reserved. | Privacy Policy | Terms of Service
        </p>
      </div>
    </footer>
  )
}

export default Footer
