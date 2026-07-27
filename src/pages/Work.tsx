interface WorkProps {
  page: string
}

const projects = [
  {
    name: 'artruth by ikaiva',
    slug: 'artruth',
    outcome: '2026',
    details: 'a digital platform for authentic storytelling and brand transparency',
    cover: '/artruth/cover',
  },
  {
    name: 'beans by ikaiva',
    slug: 'beans',
    outcome: '2024',
    details: 'an end-to-end marketplace connecting local producers with consumers',
    cover: '/beans/cover',
  },
  {
    name: 'blume by ikaiva',
    slug: 'blume',
    outcome: '2024',
    details: 'a premium e-commerce experience for a sustainable beauty brand',
    cover: '/blume/cover',
  },
  {
    name: 'southern floorings by ikaiva',
    slug: 'southern-floorings',
    outcome: '2025',
    details: 'a product catalog and inquiry system for a flooring manufacturer',
    cover: '/sf/cover',
    href: 'https://southernfloorings.in',
  },
]

export default function Work({ page: _page }: WorkProps) {
  return (
    <div className="relative bg-white min-h-screen pb-[5rem] flex flex-col">
      <div className="pt-[1rem] px-[1rem] flex-1 flex flex-col justify-end pb-[1rem]">
        <h1 className="tracking-tighter max-w-[80vw]">
          we design brands and interfaces with the purpose they serve
        </h1>
        <p className="mt-[1rem] tracking-tighter text-gray-500">
          a curated selection of works we've created
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-[1rem]">
        {projects.map((project) => (
          <div
            key={project.name}
            onClick={() => { project.href ? window.open(project.href, '_blank') : window.location.hash = `/${project.slug}` }}
            className="cursor-pointer"
          >
            <div className="w-full h-[80vh] overflow-hidden ">
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
            </div>
            <div className="px-[1rem] flex justify-between items-start pt-[0.5rem] pb-[1rem]">
              <h2 className="tracking-tighter">
                {project.name}
              </h2>
              <p className="tracking-tighter ">
                {project.outcome}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[20vh]" />
      <div className="px-[1rem] grid grid-cols-1 sm:grid-cols-3 gap-[2rem] pb-[5rem]">
        <div className="max-w-[70%]">
          <h2>problem</h2>
          <p className="text-gray-500">
            A beautiful chair that no one wants to sit on is still a bad chair. Why should products be any different?
          </p>
        </div>
        <div className="max-w-[70%]">
          <h2>solution</h2>
          <p className="text-gray-500">
            A map isn't successful because it's beautiful, it's successful because no one gets lost
            <br></br>
            every decision is questioned, every interaction must justify itself, every visual element must communicate, guide, or create trust
            <br></br>only then do we design
          </p>
        </div>
        <div className="max-w-[70%]">
          <h2>shift</h2>
          <p className="text-gray-500">
            purpose has a strange side effect, things designed with it often become beautiful anyway
          </p>
        </div>
      </div>
      <div className="h-[10vh]" />
      <div className="px-[1rem]  pb-[5rem]">
        <h1 className="tracking-tighter max-w-[90vw] sm:leading-13">
          we approach each project with the belief that design should be shaped by purpose,
        </h1>
        <h1 className="tracking-tighter max-w-[90vw] sm:leading-13">
          a clothing store should help sell clothing,
        </h1>
        <h1 className="tracking-tighter max-w-[90vw] sm:leading-13">
          an art studio should tell a story,
        </h1>
        <h1 className="tracking-tighter max-w-[90vw] sm:leading-13">
          a research institution should communicate knowledge,
        </h1>
        <h1 className="tracking-tighter max-w-[90vw] sm:leading-13">
          the design may be quiet, expressive, commercial, or functional, but it always feels true to its purpose
        </h1>
      </div>
    </div>
  )
}
