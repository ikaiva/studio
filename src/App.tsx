import { useState, useEffect, useCallback } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Artruth from './pages/projects/Artruth'
import Beans from './pages/projects/Beans'
import Blume from './pages/projects/Blume'
import Navbar from './components/Navbar'
import Loading from './components/Loading'

const projectSlugs = ['artruth', 'beans', 'blume', 'southern-floorings', 'manam-chennai']

function App() {
  const [page, setPage] = useState('home')
  const [loading, setLoading] = useState(true)

  const handleLoadComplete = useCallback(() => setLoading(false), [])

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About page={page} />
      case 'work':
      case 'service':
        return <Work page={page} />
      case 'product':
        return <Products page={page} />
      case 'contact':
        return <Contact page={page} />
      default:
        if (page === 'artruth') {
          return <Artruth page={page} />
        }
        if (page === 'beans') {
          return <Beans page={page} />
        }
        if (page === 'blume') {
          return <Blume page={page} />
        }
        if (projectSlugs.includes(page)) {
          return <Work page="work" />
        }
        return <Home page={page} />
    }
  }

  return (
    <>
      {loading && <Loading onComplete={handleLoadComplete} />}
      {!loading && renderPage()}
      {!loading && <Navbar page={page} />}
    </>
  )
}

export default App
