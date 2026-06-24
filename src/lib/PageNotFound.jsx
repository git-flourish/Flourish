import { useLocation } from 'react-router-dom'

export default function PageNotFound() {
  const location = useLocation()
  const pageName = location.pathname.substring(1)

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-cream">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-7xl font-light text-mulberry/30">404</h1>
          <div className="h-0.5 w-16 bg-mulberry/20 mx-auto" />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-medium text-mulberry">Page Not Found</h2>
          <p className="text-mulberry/70 leading-relaxed">
            The page <span className="font-medium text-mulberry">&quot;{pageName}&quot;</span> could
            not be found.
          </p>
        </div>
        <div className="pt-6">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-mulberry bg-white border border-mulberry/20 rounded-lg hover:bg-cream transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}
