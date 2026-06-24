import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [isLoadingAuth, setIsLoadingAuth] = useState(true)
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true)

  useEffect(() => {
    // ponytail: no Base44 backend — brief splash then public routes
    const timer = window.setTimeout(() => {
      setIsLoadingPublicSettings(false)
      setIsLoadingAuth(false)
    }, 300)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoadingAuth,
        isLoadingPublicSettings,
        isAuthenticated: false,
        user: null,
        authError: null,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
