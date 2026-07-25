import { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'

function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#', '') || '/'
      const p = hash.split('/')[1] || 'home'
      setPage(p)
    }
    addEventListener('hashchange', onHash)
    onHash()
    return () => removeEventListener('hashchange', onHash)
  }, [])

  switch (page) {
    case 'about':
      return <About page={page} />
    case 'work':
      return <Work page={page} />
    case 'products':
    case 'contact':
      return <Home page={page} />
    default:
      return <Home page={page} />
  }
}

export default App
