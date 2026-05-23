import { useState, useEffect, useRef } from 'react'

const heroCards = [
  { color: '#ef4444' },
  { color: '#3b82f6' },
  { color: '#22c55e' },
  { color: '#f59e0b' },
]

const heroOrder = [0, 2, 1, 3]

function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % heroOrder.length), 500)
    return () => clearInterval(t)
  }, [])
  const active = heroOrder[i]

  return (
    <section className="h-svh flex items-center justify-center bg-white">
      <div className="relative" style={{ width: '10rem', height: '16rem' }}>
        {heroCards.map(({ color }, i) => {
          const tilt = (i - 1.5) * 3
          const isFront = i === active

          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                backgroundColor: color,
                transform: `rotate(${tilt}deg)`,
                zIndex: isFront ? 10 : i,
              }}
            />
          )
        })}
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section className="h-svh flex items-center justify-center bg-white">
      <div className="max-w-6xl mx-auto px-12 md:px-24 lg:px-48 text-center">
        <p className="text-sm md:text-base uppercase tracking-widest mb-8">
          ikaiva's mission
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-8">
          reflect(ing) art and beauty
        </h1>
        <p className="text-sm md:text-base uppercase tracking-widest leading-relaxed">
          [ee-kai-vuh] . sanskrit
          <br />
          named as Xsvik in 2024, started as another shot at why not try
          something during our college days, turned into ikaiva.
        </p>
      </div>
    </section>
  )
}

const galleryCards = [
  { type: 'img', color: '#a78bfa' },
  { type: 'text', color: '#fcd34d', text: 'design is the bridge between imagination and reality' },
  { type: 'img', color: '#f472b6' },
  { type: 'text', color: '#6ee7b7', text: 'every pixel tells a story worth listening to' },
  { type: 'img', color: '#60a5fa' },
  { type: 'text', color: '#fca5a5', text: 'beauty lies in the details we choose to see' },
  { type: 'img', color: '#34d399' },
  { type: 'text', color: '#fbbf24', text: 'simplicity is the ultimate sophistication' },
]

function Gallery() {
  return (
    <section className="lg:h-svh flex items-center justify-center bg-white px-8 md:px-16 lg:px-32 xl:px-48 py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-4xl mx-auto">
        {galleryCards.map((card, i) => (
          <div
            key={i}
            className="aspect-[1/1.61] flex items-center justify-center p-4"
            style={{ backgroundColor: card.color }}
          >
            {card.type === 'text' && (
              <p className="text-xs md:text-sm uppercase tracking-widest text-center leading-relaxed text-black">
                {card.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section className="h-svh flex items-center justify-center bg-white">
      <div className="max-w-6xl mx-auto px-12 md:px-24 lg:px-48 text-center">
        <p className="text-sm md:text-base uppercase tracking-widest mb-8">
          ikaiva's vision
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-8">
          create timeless experiences
        </h1>
        <p className="text-sm md:text-base uppercase tracking-widest leading-relaxed">
          every creation is a conversation between the past and the future
          <br />
          rooted in tradition, reaching for the unknown.
        </p>
      </div>
    </section>
  )
}

function CardStack({ colors, w, h }: { colors: string[]; w: string; h: string }) {
  const refs = useRef<HTMLDivElement[]>([])
  const idxRef = useRef(0)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!hovering) return
    const t = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % colors.length
      refs.current.forEach((el, i) => {
        if (!el) return
        el.style.zIndex = i === idxRef.current ? String(colors.length) : String(i)
      })
    }, 200)
    return () => clearInterval(t)
  }, [hovering, colors.length])

  return (
    <div
      className="relative"
      style={{ width: w, height: h }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {colors.map((color, i) => {
        const tilt = (i - (colors.length - 1) / 2) * 2
        return (
          <div
            key={i}
            ref={el => { if (el) refs.current[i] = el }}
            className="absolute inset-0"
            style={{
              backgroundColor: color,
              transform: `rotate(${tilt}deg)`,
              zIndex: i,
            }}
          />
        )
      })}
    </div>
  )
}

function genColors(n: number) {
  const hues = [0, 30, 60, 120, 180, 200, 240, 280, 320, 350]
  return Array.from({ length: n }, (_, i) => `hsl(${hues[i % hues.length]}, 70%, 60%)`)
}

const designProjects = [
  { title: 'brand identity', colors: genColors(4) },
  { title: 'ui / ux', colors: genColors(4) },
  { title: 'visual design', colors: genColors(4) },
  { title: 'motion graphics', colors: genColors(4) },
]

const aiProjects = [
  { title: 'neural explorations', colors: genColors(4) },
]

function PortfolioSection({ title, projects }: { title: string; projects: { title: string; colors: string[] }[] }) {
  const single = projects.length === 1
  return (
    <section className="min-h-svh flex flex-col items-center justify-center bg-white px-8 md:px-16 lg:px-32 xl:px-48 py-24">
      <div className="w-full max-w-6xl mx-auto text-center mb-20">
        <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-8" />
        <p className="text-sm md:text-base uppercase tracking-widest mb-4">
          {title}
        </p>
        <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500 max-w-xl mx-auto">
          exploring the intersection of creativity and technology through thoughtful design solutions.
        </p>
      </div>

      {single ? (
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center gap-6">
            <p className="text-xs uppercase tracking-widest">{projects[0].title}</p>
            <CardStack colors={projects[0].colors} w="12rem" h="19rem" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-4xl mx-auto justify-items-center">
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col items-center gap-6">
              <p className="text-xs uppercase tracking-widest">{project.title}</p>
              <CardStack colors={project.colors} w="12rem" h="19rem" />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

function Question() {
  return (
    <section className="h-svh flex items-center justify-center bg-white">
      <div className="max-w-6xl mx-auto px-12 md:px-24 lg:px-48 text-center">
        <p className="text-sm md:text-base uppercase tracking-widest mb-8">
          ikaiva's question
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-8">
          what will you create?
        </h1>
        <p className="text-sm md:text-base uppercase tracking-widest leading-relaxed">
          the tools are ready, the vision is clear.
          <br />
          the only missing piece is you.
        </p>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Hero />
      <Mission />
      <Gallery />
      <Vision />
      <PortfolioSection title="design" projects={designProjects} />
      <PortfolioSection title="artificial intelligence" projects={aiProjects} />
      <Question />
    </>
  )
}

export default App
