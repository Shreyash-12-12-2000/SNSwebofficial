import { Navigate } from "react-router-dom"

interface Props {
  element: JSX.Element
}

const ProtectedRoute = ({ element }: Props) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true"

  if (!isAdmin) {
    // ❌ Not logged in → redirect to home
    return <Navigate to="/" replace />
  }

  return element
}

export default ProtectedRoute
