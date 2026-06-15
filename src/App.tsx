import { useState, useEffect, useRef, useLayoutEffect } from 'react'

const colors = ['#ef4444', '#3b82f6', '#22c55e', '#f59e0b']
const order = [0, 2, 1, 3]

function Rectangles() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % order.length), 500)
    return () => clearInterval(t)
  }, [])
  const active = order[i]

  return (
    <div className="relative" style={{ width: 'clamp(80px, 12vw, 200px)', aspectRatio: '1 / 1.61' }}>
      {colors.map((color, idx) => {
        const tilt = (idx - 1.5) * 3
        return (
          <div
            key={idx}
            className="absolute inset-0"
            style={{
              backgroundColor: color,
              transform: `rotate(${tilt}deg)`,
              zIndex: idx === active ? 10 : idx,
            }}
          />
        )
      })}
    </div>
  )
}

function Nav({ page }: { page: string }) {
  return (
    <nav className="z-20 px-4 pt-4">
      <div className="flex justify-between w-full text-xs sm:text-sm">
        <a href={page === 'about' ? '#/' : '#/about'} className="relative cursor-pointer whitespace-nowrap">
          <span className="invisible">about</span>
          <span className="absolute left-0 top-0">{page === 'about' ? 'home' : 'about'}</span>
        </a>
        <a href={page === 'mission' ? '#/vision' : '#/mission'} className="relative cursor-pointer whitespace-nowrap">
          <span className="invisible">mission</span>
          <span className="absolute left-0 top-0">{page === 'mission' ? 'vision' : 'mission'}</span>
        </a>
        <a href={page === 'design-work' ? '#/ai-work' : '#/design-work'} className="relative cursor-pointer whitespace-nowrap">
          <span className="invisible">artificial intelligence work</span>
          <span className="absolute left-0 top-0">{page === 'design-work' ? 'artificial intelligence work' : 'design work'}</span>
        </a>
        <a href={page === 'contact' ? '#/' : '#/contact'} className="cursor-pointer whitespace-nowrap">{page === 'contact' ? 'home' : 'contact'}</a>
      </div>
    </nav>
  )
}

function About() {
  const items = Array.from({ length: 8 }, (_, i) => i)
  return (
    <div className="h-full w-full flex items-center justify-center py-4">
      <div className="h-full w-[60%] grid grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-2">
        {items.map(i => (
          <div
            key={i}
            className="flex items-center justify-center text-center text-[clamp(6px,1.2vw,14px)] leading-tight p-2"
            style={{ backgroundColor: '#e5e5e5' }}
          >
            {i % 2 === 0 ? <span>illustration</span> : <span>some text content</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function Mission() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4 max-w-[80%] lg:max-w-[40%]">
      <span className="text-[clamp(24px,5vw,60px)] leading-none font-bold text-center">
        our mission
      </span>
      <div
        className="w-[clamp(60px,8vw,160px)] aspect-square flex items-center justify-center text-[clamp(8px,1.2vw,14px)] leading-tight"
        style={{ backgroundColor: '#e5e5e5' }}
      >
        illustration
      </div>
      <span className="text-[clamp(11px,1.5vw,18px)] leading-tight text-center max-w-[55ch]">
        We empower creators with tools that bridge imagination and reality, making the impossible accessible through design and technology.
      </span>
    </div>
  )
}

function Vision() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4 max-w-[80%] lg:max-w-[40%]">
      <span className="text-[clamp(24px,5vw,60px)] leading-none font-bold text-center">
        our vision
      </span>
      <div
        className="w-[clamp(60px,8vw,160px)] aspect-square flex items-center justify-center text-[clamp(8px,1.2vw,14px)] leading-tight"
        style={{ backgroundColor: '#e5e5e5' }}
      >
        illustration
      </div>
      <span className="text-[clamp(11px,1.5vw,18px)] leading-tight text-center max-w-[55ch]">
        A world where design thinking and technology converge to create meaningful, lasting impact across every discipline.
      </span>
    </div>
  )
}

function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const projects = [
    { w: 'clamp(140px,30vw,480px)', h: 'clamp(320px,55vh,680px)' },
    { w: 'clamp(180px,48vw,640px)', h: 'clamp(260px,42vh,520px)' },
    { w: 'clamp(130px,28vw,440px)', h: 'clamp(300px,50vh,620px)' },
    { w: 'clamp(120px,25vw,400px)', h: 'clamp(340px,60vh,740px)' },
  ]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.scrollTop = el.scrollHeight / 3
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const oneSet = el.scrollHeight / 3
          if (el.scrollTop >= oneSet * 2 - 5) {
            el.scrollTop -= oneSet
          } else if (el.scrollTop <= 5) {
            el.scrollTop += oneSet
          }
          ticking = false
        })
        ticking = true
      }
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} className="min-h-full w-full pt-4 pb-[10vh] flex flex-col items-center gap-[clamp(12px,3vh,40px)]">
      {[...projects, ...projects, ...projects].map((p, i) => (
        <div
          key={i}
          className="flex items-center justify-center text-[clamp(11px,1.3vw,16px)] leading-tight text-center"
          style={{
            width: p.w,
            height: p.h,
            backgroundColor: '#e5e5e5',
          }}
        >
          project {(i % 4) + 1}
        </div>
      ))}
    </div>
  )
}

function AiWork() {
  const w = 'clamp(140px,30vw,360px)'
  const h = 'clamp(240px,45vh,480px)'

  return (
    <div className="min-h-full w-full flex items-center justify-center">
      <div
        className="flex items-center justify-center text-[clamp(11px,1.3vw,16px)] leading-tight text-center"
        style={{
          width: w,
          height: h,
          backgroundColor: '#e5e5e5',
        }}
      >
        ai project
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4 max-w-[80%] lg:max-w-[40%]">
      <span className="text-[clamp(24px,5vw,60px)] leading-none font-bold text-center">
        get in touch
      </span>
      <div
        className="w-[clamp(60px,8vw,160px)] aspect-square flex items-center justify-center text-[clamp(8px,1.2vw,14px)] leading-tight"
        style={{ backgroundColor: '#e5e5e5' }}
      >
        illustration
      </div>
      <div className="flex flex-col items-center gap-2 lg:gap-3 mt-2">
        <a
          href="mailto:ikaiva.studio@gmail.com"
          className="text-[clamp(11px,1.5vw,18px)] leading-tight text-center hover:underline"
          style={{ letterSpacing: '-2px' }}
        >
          ikaiva.studio@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/company/ikaiva-studio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[clamp(11px,1.5vw,18px)] leading-tight text-center hover:underline"
          style={{ letterSpacing: '-2px' }}
        >
          linkedin
        </a>
      </div>
    </div>
  )
}

function Footer() {
  const text = "ikaiva.studio"
  const ref = useRef<HTMLSpanElement>(null)
  const [fs, setFs] = useState(100)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const fit = () => {
      el.style.fontSize = '100px'
      const natural = el.getBoundingClientRect().width
      if (!natural) return
      const target = el.parentElement!.getBoundingClientRect().width
      const lsAdj = 2 * (text.length - 1)
      setFs((target + lsAdj) / (natural + lsAdj) * 100)
    }
    fit()
    addEventListener('resize', fit)
    return () => removeEventListener('resize', fit)
  }, [])

  return (
    <footer className="z-20 px-4 pb-2 leading-none select-none pointer-events-none">
      <span
        ref={ref}
        style={{
          display: 'inline-block',
          fontSize: fs,
          letterSpacing: '-2px',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </span>
    </footer>
  )
}

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

  return (
    <div className="fixed inset-0 flex flex-col bg-white" style={{ letterSpacing: '-2px' }}>
      <Nav page={page} />
      <div className="flex-1 relative z-10">
        {page === 'home' && <div className="absolute inset-0 flex items-center justify-center p-4"><Rectangles /></div>}
        {page === 'about' && <div className="absolute inset-0"><About /></div>}
        {page === 'mission' && <div className="absolute inset-0 flex items-center justify-center p-4"><Mission /></div>}
        {page === 'vision' && <div className="absolute inset-0 flex items-center justify-center p-4"><Vision /></div>}
        {page === 'contact' && <div className="absolute inset-0 flex items-center justify-center p-4"><Contact /></div>}
      </div>
      <Footer />
      {page === 'design-work' && (
        <div className="fixed inset-0 z-[15] overflow-y-auto hide-scrollbar">
          <Projects />
        </div>
      )}
      {page === 'ai-work' && (
        <div className="fixed inset-0 z-[15]">
          <AiWork />
        </div>
      )}
    </div>
  )
}

export default App
