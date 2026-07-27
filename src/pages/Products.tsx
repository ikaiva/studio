interface ProductsProps {
  page: string
}

const projects = [
  {
    name: 'clario by ikaiva',
    slug: 'clario',
    outcome: '2026',
    details: 'an AI-powered project management tool built for creative studios',
    cover: '/clario/cover',
    href: 'https://clario-delta.vercel.app',
  },
]

export default function Products({ page: _page }: ProductsProps) {
  return (
    <div className="relative bg-white min-h-screen pb-[5rem] flex flex-col">
      <div className="pt-[1rem] px-[1rem] flex-1 flex flex-col justify-end pb-[1rem]">
        <h1 className="tracking-tighter max-w-[90vw]">
          We create artificial intelligence products in search of what they should be for
        </h1>
        <p className="mt-[1rem] tracking-tighter text-gray-500">
          Every product is our attempt to understand where artificial intelligence belongs, and where it doesn't
        </p>
      </div>
      <div className="mt-24 flex flex-col gap-[1rem]">
        {projects.map((project) => (
          <div
            key={project.name}
            onClick={() => { project.href ? window.open(project.href, '_blank') : window.location.hash = `/${project.slug}` }}
            className="cursor-pointer"
          >
            <div className="w-full h-[60vh] sm:h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={`${project.cover}.png`}
                alt={project.name}
                decoding="async"
                className="block mx-auto w-[35%] sm:w-1/7 h-auto object-contain"
              />
            </div>
            <div className="px-[1rem] flex justify-between items-start pt-[0.5rem]">
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
            we've spent years asking artificial intelligence what it can do. we haven't spent nearly as long asking what it's meant to do
          </p>
        </div>
        <div className="max-w-[70%]">
          <h2>solution</h2>
          <p className="text-gray-500">
            every product is an experiment. not in intelligence, but in purpose
          </p>
        </div>
        <div className="max-w-[70%]">
          <h2>shift</h2>
          <p className="text-gray-500">
            artificial intelligence is a question worth asking 
          </p>
        </div>
      </div>
      <div className="h-[10vh]" />
      <div className="px-[1rem]  pb-[5rem]">
        <h1 className="tracking-tighter max-w-[90vw] sm:leading-13">
          we approach each experiment with the belief that artificial intelligence will eventually find its place
        </h1>
        <h1 className="tracking-tighter max-w-[90vw] sm:leading-13">
          we make an attempt to understand where artificial intelligence belongs, and where it doesn't
        </h1>
      </div>
    </div>
  )
}
