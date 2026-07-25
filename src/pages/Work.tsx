import { useState } from 'react'
import Navbar from '../components/Navbar'

interface WorkProps {
  page: string
}

const projects = [
  { name: 'artruth', image: '/projects/artruth.png' },
  { name: 'beans', image: '/projects/beans.png' },
  { name: 'blume', image: '/projects/blume.png' },
  { name: 'southern floorings', image: '/projects/southern-floorings.png' },
  { name: 'manam chennai', image: '/projects/manam-chennai.png' },
]

export default function Work({ page }: WorkProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="fixed inset-0 bg-white flex flex-col justify-between">
      <div className="m-[1rem] flex-1 flex flex-col justify-start relative">
        {projects.map((project, i) => (
          <div
            key={project.name}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <h2 className="text-[5vw] sm:text-[2vw] tracking-tighter py-[1.5rem] cursor-pointer">
              {project.name}
            </h2>
            {i < projects.length - 1 && (
              <div className="w-full h-px bg-black" />
            )}
          </div>
        ))}
        {hovered !== null && (
          <img
            src={projects[hovered].image}
            alt={projects[hovered].name}
            className="absolute top-0 right-0 h-full w-[40vw] object-cover pointer-events-none"
          />
        )}
      </div>
      <div className="mx-[1rem] mb-[1rem]">
        <Navbar page={page} theme="light" />
      </div>
    </div>
  )
}
