import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider, useAuth } from './lib/AuthContext.jsx'
import { queryClientInstance } from './lib/query-client.js'
import ScrollToTop from './components/ScrollToTop.jsx'
import { Toaster } from './components/Toaster.jsx'
import PageNotFound from './lib/PageNotFound.jsx'
import Home from './pages/Home.jsx'
import Science from './pages/Science.jsx'

function AuthenticatedApp() {
  const { isLoadingAuth, isLoadingPublicSettings } = useAuth()

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-cream">
        <div
          className="font-flourish text-4xl font-black text-flamingo"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          flourish
        </div>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/science" element={<Science />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}
