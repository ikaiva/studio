import Navbar from '../components/Navbar'

interface HomeProps {
  page: string
}

export default function Home({ page }: HomeProps) {
  return (
    <div className="fixed inset-0 bg-white flex flex-col justify-between">
      <div className="m-[1rem] h-[80vh] flex items-center justify-center overflow-hidden">
        <picture className="w-full h-full block">
          <source media="(min-width: 640px)" srcSet="/desktop.avif" type="image/avif" />
          <source media="(min-width: 640px)" srcSet="/desktop.webp" type="image/webp" />
          <source media="(min-width: 640px)" srcSet="/desktop.png" type="image/png" />
          <source srcSet="/mobile.avif" type="image/avif" />
          <source srcSet="/mobile.webp" type="image/webp" />
          <img
            src="/mobile.png"
            alt="ikaiva hero"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </div>
      <div className="mx-[1rem] mb-[1rem]">
        <Navbar page={page} />
      </div>
    </div>
  )
}
