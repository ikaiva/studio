import { useState, useEffect, useRef } from 'react'

const order = [0, 2, 1, 3]

const imgs = [
  '/background-6556413 9.png',
  '/1990.417 - Cabin in the Cotton.jpg',
  '/3.jpg',
  '/1949.544 - Movement.jpg',
]

function Rectangles({ showLogo = true }: { showLogo?: boolean }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % order.length), 500)
    return () => clearInterval(t)
  }, [])
  const active = order[i]

  return (
    <div className="relative" style={{ width: 'clamp(120px, 15vw, 180px)', aspectRatio: '1 / 1.61' }}>
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
      {showLogo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <img src="/logo.svg" className="w-[clamp(22px,3.3vw,43px)]" />
        </div>
      )}
    </div>
  )
}

function Nav({ page }: { page: string }) {
  return (
    <nav className="z-20 self-stretch">
      <div className="flex gap-x-4 sm:justify-between w-full text-[10px] sm:text-sm text-neutral-500 px-[2vw] sm:px-[4vw]">
        <a href={page === 'about' ? '#/' : '#/about'} className="relative cursor-pointer whitespace-nowrap flex-1 text-center sm:flex-none">
          <span className="invisible">HOME</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-0">{page === 'about' ? 'HOME' : 'STORY'}</span>
        </a>
        <a href={page === 'mission' ? '#/vision' : '#/mission'} className="relative cursor-pointer whitespace-nowrap flex-1 text-center sm:flex-none">
          <span className="invisible">FUTURE</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-0">{page === 'mission' ? 'FUTURE' : 'PURPOSE'}</span>
        </a>
        <a href={page === 'design-work' ? '#/ai-work' : '#/design-work'} className="relative cursor-pointer whitespace-nowrap flex-1 text-center sm:flex-none">
          <span className="invisible">AI WORKS</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-0">{page === 'design-work' ? 'AI WORKS' : 'WORK'}</span>
        </a>
        <a href={page === 'contact' ? '#/' : '#/contact'} className="relative cursor-pointer whitespace-nowrap flex-1 text-center sm:flex-none">
          <span className="invisible">HOME</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-0">{page === 'contact' ? 'HOME' : 'REACH'}</span>
        </a>
      </div>
    </nav>
  )
}

const designCovers: Record<string, string> = {
  artruth: '/artruth/storefront awning mockup 1.png',
  beans: '/beans/cover.png',
  blume: '/blume/cover.png',
  'southern-floorings': '/sf/cover.png',
}

const aiCovers: Record<string, string> = {
  clario: '/clario/clario logo.png',
}

function About() {
  const topWords = ['Ikaiva exists', 'to create works', 'across disciplines']
  const bottomWords = ['that serve', 'a purpose greater', 'than themselves']
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-0">
        {topWords.map((w, i) => (
          <span key={i} className="text-[clamp(16px,3vw,32px)] text-center" style={{ lineHeight: 0.7, fontWeight: 600 }}>
            {w}
          </span>
        ))}
        <div className="my-16"></div>
        <Rectangles />
        <div className="my-16"></div>
        {bottomWords.map((w, i) => (
          <span key={i} className="text-[clamp(16px,3vw,32px)] text-center" style={{ lineHeight: 0.7, fontWeight: 600 }}>
            {w}
          </span>
        ))}
      </div>
    </div>
  )
}

function Mission() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4 max-w-[80%] lg:max-w-[40%]">
      <span className="text-[clamp(18px,4vw,45px)] leading-none font-bold text-center">
        reflecting art and beauty
      </span>
      <img
        src="/mission.png"
        className="w-[clamp(90px,12vw,160px)]"
      />
      <span className="font-normal text-[clamp(11px,1.5vw,18px)] text-center max-w-[40ch]">
        we reflect art and beauty in everything we create, every discipline we work on, is a canvas our artwork is laid upon, and every principle we choose, we seek the depth of beauty in it
      </span>
    </div>
  )
}

function Vision() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4 max-w-[80%] lg:max-w-[40%]">
      <span className="text-[clamp(18px,4vw,45px)] leading-none font-bold text-center">
        building works across disciplines
      </span>
      <img
        src="/vision.png"
        className="w-[clamp(90px,12vw,160px)]"
      />
      <span className="font-normal text-[clamp(11px,1.5vw,18px)] text-center max-w-[40ch]">
        ikaiva's purpose is to keep building works across disciplines, and we envision ikaiva to work solely towards its purpose, and become a conglomerate studio by doing so
      </span>
    </div>
  )
}

function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const projects = [
    { w: 'clamp(140px,25vw,460px)', h: 'clamp(160px,25vh,400px)', name: 'artruth', year: '2026', href: '#/design/artruth', cover: '/artruth/storefront awning mockup 1.png' },
    { w: 'clamp(180px,38vw,580px)', h: 'clamp(160px,26vh,460px)', name: 'blume', year: '2024', href: '#/design/blume', cover: '/blume/cover.png' },
    { w: 'clamp(120px,22vw,420px)', h: 'clamp(200px,35vh,520px)', name: 'beans', year: '2024', href: '#/design/beans', cover: '/beans/cover.png' },
    { w: 'clamp(160px,30vw,500px)', h: 'clamp(170px,28vh,440px)', name: 'southern floorings', year: '2025', href: '#/design/southern-floorings', cover: '/sf/cover.png' },
  ]
  const items = [...projects, ...projects, ...projects]
  const midIndex = projects.length

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const parent = el.parentElement
    if (!parent) return
    const children = el.children
    if (children.length < midIndex + 1) return
    const midTop = (children[midIndex] as HTMLElement).offsetTop
    parent.scrollTop = midTop
    let ticking = false
    let wrapping = false
    const scroll = () => {
      if (wrapping) return
      if (!ticking) {
        requestAnimationFrame(() => {
          if (wrapping) { ticking = false; return }
          const { scrollTop, scrollHeight, clientHeight } = parent
          const setHeight = scrollHeight / 3
          if (scrollTop <= 1) {
            wrapping = true
            parent.scrollTop = scrollTop + setHeight
            requestAnimationFrame(() => { wrapping = false })
          } else if (scrollTop + clientHeight >= scrollHeight - 1) {
            wrapping = true
            parent.scrollTop = scrollTop - setHeight
            requestAnimationFrame(() => { wrapping = false })
          }
          ticking = false
        })
        ticking = true
      }
    }
    parent.addEventListener('scroll', scroll, { passive: true })
    return () => parent.removeEventListener('scroll', scroll)
  }, [midIndex])

  return (
    <div ref={ref} className="flex flex-col items-center pt-4 pb-[10vh] gap-[clamp(2px,0.5vh,12px)]">
      {items.map((p, i) => (
        <div key={i} className="relative flex items-center justify-center w-full sm:px-[4vw]" style={{ minHeight: p.h }}>
          <span className="absolute left-[4vw] sm:static sm:flex-1 sm:text-right sm:pr-5 text-[clamp(10px,1.1vw,14px)] uppercase" style={{ color: '#a3a3a3' }}>
            {p.name === 'southern floorings' ? <><span className="block" style={{ color: '#a3a3a3' }}>southern</span><span className="block" style={{ color: '#a3a3a3' }}>floorings</span></> : p.name}
          </span>
          <a
            href={p.href}
            className="flex-shrink-0 flex items-center justify-center text-[clamp(10px,1.1vw,14px)] leading-tight text-center no-underline cursor-pointer"
            style={{
              width: p.w,
              height: p.h,
              backgroundImage: `url("${p.cover}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
            }}
          />
          <span className="absolute right-[4vw] sm:static sm:flex-1 sm:text-left sm:pl-5 text-[clamp(10px,1.1vw,14px)] uppercase" style={{ color: '#a3a3a3' }}>{p.year}</span>
        </div>
      ))}
    </div>
  )
}

function AiWork() {
  const w = 'clamp(120px,22vw,380px)'
  const h = 'clamp(180px,30vh,360px)'

  return (
    <div className="min-h-full w-full flex items-center justify-center">
      <div className="relative flex items-center justify-center w-full sm:px-[4vw]" style={{ minHeight: h }}>
        <span className="absolute left-[4vw] sm:static sm:flex-1 sm:text-right sm:pr-5 text-[clamp(10px,1.1vw,14px)] uppercase" style={{ color: '#a3a3a3' }}>clario</span>
        <a
          href="#/artificial-intelligence/clario"
          className="flex-shrink-0 flex items-center justify-center text-[clamp(10px,1.1vw,14px)] leading-tight text-center no-underline cursor-pointer"
          style={{
            width: w,
            height: h,
            backgroundImage: 'url("/clario/clario logo.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
          }}
        />
        <span className="absolute right-[4vw] sm:static sm:flex-1 sm:text-left sm:pl-5 text-[clamp(10px,1.1vw,14px)] uppercase" style={{ color: '#a3a3a3' }}>2026</span>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4 max-w-[80%] lg:max-w-[40%]">
      <span className="text-[clamp(18px,4vw,45px)] leading-none font-bold text-center">
        who shapes the system that shapes us?
      </span>
      <img
        src="/contact.png"
        className="w-[clamp(90px,12vw,160px)]"
      />
      <div className="flex flex-col items-center gap-2 lg:gap-3 mt-2">
        <a
          href="mailto:ikaiva.studio@gmail.com"
          className="font-normal text-[clamp(11px,1.5vw,18px)] text-center hover:underline"
        >
          ikaiva.studio@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/company/ikaiva-studio/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-normal text-[clamp(11px,1.5vw,18px)] text-center hover:underline"
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
            {page === 'design' && designCovers[slug] ? (
              <div className="w-full h-full flex items-center justify-center p-4">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("${designCovers[slug]}")`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </div>
            ) : null}
            {page === 'artificial-intelligence' && aiCovers[slug] ? (
              <div className="w-full h-full flex items-center justify-center p-4">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("${aiCovers[slug]}")`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </div>
            ) : null}
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
