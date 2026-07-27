interface WorkProps {
  page: string
}

const projects = [
  {
    name: 'artruth',
    slug: 'artruth',
    outcome: 'enhanced user engagement by 40%',
    details: 'a digital platform for authentic storytelling and brand transparency',
    cover: '/artruth/cover',
  },
  {
    name: 'beans',
    slug: 'beans',
    outcome: 'streamlined operations for 200+ vendors',
    details: 'an end-to-end marketplace connecting local producers with consumers',
    cover: '/beans/cover',
  },
  {
    name: 'blume',
    slug: 'blume',
    outcome: 'grew online sales by 60% in 3 months',
    details: 'a premium e-commerce experience for a sustainable beauty brand',
    cover: '/blume/cover',
  },
  {
    name: 'southern floorings',
    slug: 'southern-floorings',
    outcome: 'increased lead generation by 3x',
    details: 'a product catalog and inquiry system for a flooring manufacturer',
    cover: '/sf/cover',
  },
]

export default function Work({ page: _page }: WorkProps) {
  return (
    <div className="relative bg-white min-h-screen pb-[5rem] flex flex-col">
      <div className="pt-[1rem] px-[1rem] flex-1 flex flex-col justify-end pb-[1rem]">
        <h1 className="text-[8vw] sm:text-[4vw] tracking-tighter max-w-[80vw]">
          we design brands and interfaces with the purpose they serve
        </h1>
        <p className="text-[4vw] sm:text-[2vw] mt-[0.4em] tracking-tighter text-gray-500">
          a selection of works we've created
        </p>
      </div>
      <div className="px-[1rem] mt-24 flex flex-col gap-[1rem]">
        {projects.map((project) => (
          <div
            key={project.name}
            onClick={() => { window.location.hash = `/${project.slug}` }}
            className="group block cursor-pointer"
          >
            <div className="relative w-full h-[60vh] overflow-hidden">
              <picture className="w-full h-full block">
                <source media="(min-width: 640px)" srcSet={`${project.cover}.avif`} type="image/avif" />
                <source media="(min-width: 640px)" srcSet={`${project.cover}.webp`} type="image/webp" />
                <source media="(min-width: 640px)" srcSet={`${project.cover}.png`} type="image/png" />
                <source srcSet={`${project.cover}.avif`} type="image/avif" />
                <source srcSet={`${project.cover}.webp`} type="image/webp" />
                <img
                  src={`${project.cover}.png`}
                  alt={project.name}
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </picture>
              <div className="hidden sm:flex absolute inset-0 p-[1.5rem] flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-[4vw] tracking-tighter font-medium text-white">
                  {project.name}
                </h2>
                <p className="text-[1.2vw] tracking-tighter text-white">
                  {project.details}
                </p>
              </div>
            </div>
            <div className="flex sm:hidden justify-between items-start pt-[0.5rem]">
              <h2 className="text-[3vw] tracking-tighter font-medium">
                {project.name}
              </h2>
              <p className="text-[3vw] tracking-tighter text-gray-800">
                {project.outcome}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[20vh]" />
      <div className="px-[1rem] grid grid-cols-1 sm:grid-cols-3 gap-[2rem] pb-[5rem]">
        <div className="max-w-[70%]">
          <h2 className="text-[5vw] sm:text-[1.2vw]">purpose</h2>
          <p className="text-[3.5vw] sm:text-[1.2vw] text-gray-500">
            we exist to create meaningful work that bridges the gap between ideas and reality. every project starts with a question and ends with a solution that matters.
          </p>
        </div>
        <div className="max-w-[70%]">
          <h2 className="text-[5vw] sm:text-[1.2vw]">mission</h2>
          <p className="text-[3.5vw] sm:text-[1.2vw] text-gray-500">
            to push boundaries across disciplines and deliver design-led experiences that resonate. we believe in simplicity, clarity, and purpose-driven creation.
          </p>
        </div>
        <div className="max-w-[70%]">
          <h2 className="text-[5vw] sm:text-[1.2vw]">vision</h2>
          <p className="text-[3.5vw] sm:text-[1.2vw] text-gray-500">
            to become a studio that shapes how people interact with brands, products, and spaces. we envision a future where design solves what words cannot.
          </p>
        </div>
      </div>
      <div className="h-[10vh]" />
      <div className="px-[1rem]  pb-[5rem]">
        <h1 className="text-[8vw] sm:text-[4vw] tracking-tighter max-w-[90vw]  sm:leading-13">
          we approach each project with the belief that design should be shaped by purpose,
        </h1>
        <h1 className="text-[8vw] sm:text-[4vw] tracking-tighter max-w-[90vw] sm:leading-13">
          a clothing store should help sell clothing,
        </h1>
        <h1 className="text-[8vw] sm:text-[4vw] tracking-tighter max-w-[90vw] sm:leading-13">
          an art studio should tell a story,
        </h1>
        <h1 className="text-[8vw] sm:text-[4vw] tracking-tighter max-w-[90vw] sm:leading-13">
          a research institution should communicate knowledge,
        </h1>
        <h1 className="text-[8vw] sm:text-[4vw] tracking-tighter max-w-[90vw]  sm:leading-13">
          the design may be quiet, expressive, commercial, or functional, but it always feels true to its purpose
        </h1>
      </div>
    </div>
  )
}
