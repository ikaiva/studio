import { useState, useEffect, useRef } from 'react'

const order = [0, 2, 1, 3]

const imgs = [
  '/background-6556413 9.png',
  '/1990.417 - Cabin in the Cotton.jpg',
  '/3.jpg',
  '/1949.544 - Movement.jpg',
]

function Rectangles() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % order.length), 500)
    return () => clearInterval(t)
  }, [])
  const active = order[i]

  return (
    <div className="relative" style={{ width: 'clamp(80px, 12vw, 200px)', aspectRatio: '1 / 1.61' }}>
      {imgs.map((img, idx) => {
        const tilt = (idx - 1.5) * 3
        return (
          <div
            key={idx}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${img}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#ccc',
              transform: `rotate(${tilt}deg)`,
              zIndex: idx === active ? 10 : idx,
            }}
          />
        )
      })}
      <div className="absolute inset-0 bg-black/10 z-[15]" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <img src="/logo.svg" className="w-[clamp(22px,3.3vw,43px)]" />
      </div>
    </div>
  )
}

function Nav({ page }: { page: string }) {
  return (
    <nav className="z-20 w-full px-4 pt-4">
      <div className="flex justify-evenly w-full text-xs sm:text-sm uppercase">
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
        reflecting art and beauty
      </span>
      <img
        src="/mission.png"
        className="w-[clamp(60px,8vw,160px)]"
      />
      <span className="text-[clamp(11px,1.5vw,18px)] leading-tight text-center max-w-[55ch]">
        we reflect art and beauty in everything we create, every discipline we work on, is a canvas our artwork is laid upon, and every principle we choose, we seek the depth of beauty in it
      </span>
    </div>
  )
}

function Vision() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4 max-w-[80%] lg:max-w-[40%]">
      <span className="text-[clamp(24px,5vw,60px)] leading-none font-bold text-center">
        building works across disciplines
      </span>
      <img
        src="/vision.png"
        className="w-[clamp(60px,8vw,160px)]"
      />
      <span className="text-[clamp(11px,1.5vw,18px)] leading-tight text-center max-w-[55ch]">
        ikaiva's purpose is to keep building works across disciplines, and we envision ikaiva to work solely towards its purpose, and become a conglomerate studio by doing so
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
        who shapes the system that shapes us?
      </span>
      <img
        src="/contact.png"
        className="w-[clamp(60px,8vw,160px)]"
      />
      <div className="flex flex-col items-center gap-2 lg:gap-3 mt-2">
        <a
          href="mailto:ikaiva.studio@gmail.com"
          className="text-[clamp(11px,1.5vw,18px)] leading-tight text-center hover:underline"
        >
          ikaiva.studio@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/company/ikaiva-studio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[clamp(11px,1.5vw,18px)] leading-tight text-center hover:underline"
        >
          linkedin
        </a>
      </div>
    </div>
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
    <div className="fixed inset-0 flex flex-col bg-white">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Nav page={page} />
        <div className="w-full flex-1 relative z-10">
          <div className="absolute inset-0">
            {page === 'home' && <div className="w-full h-full flex items-center justify-center p-4"><Rectangles /></div>}
            {page === 'about' && <About />}
            {page === 'mission' && <div className="w-full h-full flex items-center justify-center p-4"><Mission /></div>}
            {page === 'vision' && <div className="w-full h-full flex items-center justify-center p-4"><Vision /></div>}
            {page === 'contact' && <div className="w-full h-full flex items-center justify-center p-4"><Contact /></div>}
          </div>
        </div>
      </div>
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
