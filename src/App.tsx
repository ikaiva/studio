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
    <div className="relative" style={{ width: 'clamp(120px, 18vw, 260px)', aspectRatio: '1 / 1.61' }}>
      {imgs.map((img, idx) => (
        <div
          key={idx}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${img}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#ccc',
            zIndex: idx === active ? 10 : idx,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/10 z-[15]" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <img src="/logo.svg" className="w-[clamp(22px,3.3vw,43px)]" />
      </div>
    </div>
  )
}

function Nav({ page }: { page: string }) {
  return (
    <nav className="z-20 self-stretch">
      <div className="flex gap-x-4 sm:justify-between w-full text-[10px] sm:text-xs text-neutral-500">
        <a href={page === 'about' ? '#/' : '#/about'} className="relative cursor-pointer whitespace-nowrap flex-1 text-center sm:flex-none">
          <span className="invisible">HOME</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-0">{page === 'about' ? 'HOME' : 'STORY'}</span>
        </a>
        <a href={page === 'mission' ? '#/vision' : '#/mission'} className="relative cursor-pointer whitespace-nowrap flex-1 text-center sm:flex-none">
          <span className="invisible">FUTURE</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-0">{page === 'mission' ? 'FUTURE' : 'PURPOSE'}</span>
        </a>
        <a href={page === 'design-work' ? '#/ai-work' : '#/design-work'} className="relative cursor-pointer whitespace-nowrap flex-1 text-center sm:flex-none">
          <span className="invisible">AI LAB</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-0">{page === 'design-work' ? 'AI LAB' : 'WORK'}</span>
        </a>
        <a href={page === 'contact' ? '#/' : '#/contact'} className="relative cursor-pointer whitespace-nowrap flex-1 text-center sm:flex-none">
          <span className="invisible">HOME</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-0">{page === 'contact' ? 'HOME' : 'REACH'}</span>
        </a>
      </div>
    </nav>
  )
}

const textColors = ['#135B85', '#354228', '#A4863D', '#313131']

function About() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-[45%] grid grid-cols-2 lg:grid-cols-4 gap-1 mt-4 mb-4">
        {Array.from({ length: 8 }, (_, i) => {
          const isImage = i < 4 ? i % 2 === 0 : i % 2 === 1
          return isImage ? (
            <div key={i} className="relative aspect-[1/1.61] w-full">
              <div
                className="absolute inset-0"
                style={{ backgroundImage: `url("${imgs[Math.floor(i / 2)]}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ) : (
            <div
              key={i}
              className="aspect-[1/1.61] w-full flex items-center justify-center text-center text-[clamp(6px,1.2vw,14px)] leading-tight p-2 text-white"
              style={{ backgroundColor: textColors[Math.floor(i / 2)] }}
            >
              <span className="text-white">some text content</span>
            </div>
          )
        })}
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
      <span className="text-[clamp(11px,1.5vw,18px)] text-center max-w-[55ch]">
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
      <span className="text-[clamp(11px,1.5vw,18px)] text-center max-w-[55ch]">
        ikaiva's purpose is to keep building works across disciplines, and we envision ikaiva to work solely towards its purpose, and become a conglomerate studio by doing so
      </span>
    </div>
  )
}

function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const projects = [
    { w: 'clamp(140px,30vw,480px)', h: 'clamp(320px,55vh,680px)', name: 'artruth', href: '#/design/artruth' },
    { w: 'clamp(180px,48vw,640px)', h: 'clamp(260px,42vh,520px)', name: 'blume', href: '#/design/blume' },
    { w: 'clamp(130px,28vw,440px)', h: 'clamp(300px,50vh,620px)', name: 'beans', href: '#/design/beans' },
    { w: 'clamp(120px,25vw,400px)', h: 'clamp(340px,60vh,740px)', name: 'southern-floorings', href: '#/design/southern-floorings' },
  ]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const parent = el.parentElement
    if (!parent) return
    const pad = 200
    parent.scrollTop = pad + 300
    let ticking = false
    let wrapping = false
    const onScroll = () => {
      if (wrapping) return
      if (!ticking) {
        requestAnimationFrame(() => {
          if (wrapping) { ticking = false; return }
          const { scrollHeight, clientHeight, scrollTop } = parent
          if (scrollTop + clientHeight >= scrollHeight - pad) {
            wrapping = true
            parent.scrollTop = pad + 300
            requestAnimationFrame(() => { wrapping = false })
          } else if (scrollTop <= pad) {
            wrapping = true
            parent.scrollTop = scrollHeight - clientHeight - pad - 300
            requestAnimationFrame(() => { wrapping = false })
          }
          ticking = false
        })
        ticking = true
      }
    }
    parent.addEventListener('scroll', onScroll, { passive: true })
    return () => parent.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center pt-4 pb-[10vh] gap-[clamp(12px,3vh,40px)]">
      {projects.map((p, i) => (
        <a
          key={i}
          href={p.href}
          className="flex items-center justify-center text-[clamp(11px,1.3vw,16px)] leading-tight text-center no-underline cursor-pointer"
          style={{
            width: p.w,
            height: p.h,
            backgroundColor: '#e5e5e5',
            color: 'inherit',
          }}
        >
          {p.name}
        </a>
      ))}
    </div>
  )
}

function AiWork() {
  const w = 'clamp(140px,30vw,360px)'
  const h = 'clamp(240px,45vh,480px)'

  return (
    <div className="min-h-full w-full flex items-center justify-center">
      <a
        href="#/artificial-intelligence/clario"
        className="flex items-center justify-center text-[clamp(11px,1.3vw,16px)] leading-tight text-center no-underline cursor-pointer"
        style={{
          width: w,
          height: h,
          backgroundColor: '#e5e5e5',
          color: 'inherit',
        }}
      >
        clario
      </a>
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
          className="text-[clamp(11px,1.5vw,18px)] text-center hover:underline"
        >
          ikaiva.studio@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/company/ikaiva-studio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[clamp(11px,1.5vw,18px)] text-center hover:underline"
        >
          linkedin
        </a>
      </div>
    </div>
  )
}

function App() {
  const [page, setPage] = useState('home')
  const [slug, setSlug] = useState('')

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#', '') || '/'
      const parts = hash.split('/')
      const p = parts[1] || 'home'
      setPage(p)
      setSlug(parts[2] || '')
    }
    addEventListener('hashchange', onHash)
    onHash()
    return () => removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col bg-white">
      <div className="flex-1 flex flex-col items-center justify-center pt-8">
        <Nav page={page} />
        <div className="w-full flex-1 relative z-10">
          <div className="absolute inset-0">
            {page === 'home' && <div className="w-full h-full flex items-center justify-center p-4"><Rectangles /></div>}
            {page === 'about' && <div className="w-full h-full flex items-center justify-center"><About /></div>}
            {page === 'mission' && <div className="w-full h-full flex items-center justify-center p-4"><Mission /></div>}
            {page === 'vision' && <div className="w-full h-full flex items-center justify-center p-4"><Vision /></div>}
            {page === 'contact' && <div className="w-full h-full flex items-center justify-center p-4"><Contact /></div>}
            {page === 'design' && <div className="w-full h-full flex items-center justify-center p-4 text-[clamp(24px,5vw,60px)] leading-none font-bold text-center"><span>{slug}</span></div>}
            {page === 'artificial-intelligence' && <div className="w-full h-full flex items-center justify-center p-4 text-[clamp(24px,5vw,60px)] leading-none font-bold text-center"><span>{slug}</span></div>}
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
