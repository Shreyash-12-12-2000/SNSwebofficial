import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
  children: ReactNode
}

const AdminLayout = ({ children }: Props) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("isAdmin") // remove admin login
    navigate("/") // redirect to homepage
  }

  return (
    <div className="min-h-screen bg-[#050517] text-white p-6">
      {/* Admin Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Admin Content */}
      <div>{children}</div>
    </div>
  )
}

export default AdminLayout
