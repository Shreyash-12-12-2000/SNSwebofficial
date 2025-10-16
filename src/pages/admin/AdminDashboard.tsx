import AdminLayout from "./AdminLayout"
import { useNavigate } from "react-router-dom"

const AdminDashboard = () => {
  const navigate = useNavigate()

  return (
    <AdminLayout>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div
          className="bg-[#0b0b2a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 cursor-pointer"
          onClick={() => navigate("/admin/services")}
        >
          <h3 className="text-xl font-semibold mb-2">Services</h3>
          <p className="text-gray-400 text-sm">Add, edit, or delete services</p>
        </div>

        <div
          className="bg-[#0b0b2a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 cursor-pointer"
          onClick={() => navigate("/admin/careers")}
        >
          <h3 className="text-xl font-semibold mb-2">Careers</h3>
          <p className="text-gray-400 text-sm">Manage job postings</p>
        </div>

        <div
          className="bg-[#0b0b2a] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 cursor-pointer"
          onClick={() => navigate("/admin/contacts")}
        >
          <h3 className="text-xl font-semibold mb-2">Contacts</h3>
          <p className="text-gray-400 text-sm">View client messages</p>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminDashboard
