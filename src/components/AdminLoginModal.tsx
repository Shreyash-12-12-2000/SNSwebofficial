import { useState } from "react"

interface AdminLoginModalProps {
  open: boolean
  onClose: () => void
  onSuccess: () => void
}

const AdminLoginModal = ({ open, onClose, onSuccess }: AdminLoginModalProps) => {
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")

  if (!open) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const correctUsername = "snswebadmin@2000" 

    if (username.trim().toLowerCase() === correctUsername.toLowerCase()) {
      localStorage.setItem("isAdmin", "true")
      onSuccess()
      onClose()
    } else {
      setError("Invalid username. Access denied.")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-[#101020] p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-white relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Admin Access</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Enter admin username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-cyan-500/30 text-white focus:border-cyan-400 outline-none"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLoginModal
