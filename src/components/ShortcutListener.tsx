import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AdminLoginModal from "./AdminLoginModal"

const ShortcutListener = () => {
  const [showLogin, setShowLogin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "v") {
        e.preventDefault()
        setShowLogin(true)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSuccess = () => {
    localStorage.setItem("isAdmin", "true") // ✅ Mark as admin
    navigate("/admin") // redirect to admin
  }

  return (
    <>
      {showLogin && (
        <AdminLoginModal
          open={showLogin}
          onClose={() => setShowLogin(false)}
          onSuccess={handleSuccess}
        />
      )}
    </>
  )
}

export default ShortcutListener
