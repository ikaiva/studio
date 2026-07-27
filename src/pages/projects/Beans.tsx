interface ProjectProps {
  page: string
}

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <picture className="w-full h-full block">
      <source media="(min-width: 640px)" srcSet={`${src}.avif`} type="image/avif" />
      <source media="(min-width: 640px)" srcSet={`${src}.webp`} type="image/webp" />
      <source srcSet={`${src}.avif`} type="image/avif" />
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img
        src={`${src}.png`}
        alt={alt}
        decoding="async"
        className="w-full h-full object-cover object-center"
      />
    </picture>
  )
}

export default function Beans({ page: _page }: ProjectProps) {
  return (
    <div className="relative bg-white min-h-screen pb-[5rem] flex flex-col w-full">
      <div className="px-[1rem] pt-[1rem] pb-[1rem]">
        <h1 className="tracking-tighter">beans by ikaiva</h1>
        <p className="mt-[1rem] tracking-tighter text-gray-500 max-w-[90vw]">
          beans is a conceptual bakery and café centered on handmade, freshly prepared goods. the project explored how the warmth, care, and individuality behind handmade products could be expressed through a visual identity that felt approachable and authentic
        </p>
      </div>

      <div className="w-full h-[70vh] sm:h-[90vh] overflow-hidden mt-12">
        <Img src="/beans/cover" alt="beans cover" />
      </div>

      <div className="px-[1rem] pt-[3rem]">
        <p className="tracking-tighter mb-[0.4em]">approach</p>
        <p className="tracking-tighter text-gray-500 max-w-[90vw]">
          the identity was built around the idea that imperfections are a natural part of making things by hand. organic forms, expressive details, and human-centered visual elements were used throughout the system to reflect the freshness and craftsmanship behind the brand
        </p>
      </div>

      <div className="mt-[3rem] flex flex-col">
        <div className="w-full h-[70vh] sm:h-[100vh] overflow-hidden">
          <Img src="/beans/2" alt="beans image 1" />
        </div>

        <div className="w-full h-[70vh] sm:h-[100vh] overflow-hidden">
          <Img src="/beans/3" alt="beans image 2" />
        </div>

        <div className="w-full h-[70vh] sm:h-[100vh] overflow-hidden">
          <Img src="/beans/4" alt="beans image 3" />
        </div>

        <div className="w-full h-[70vh] sm:h-[100vh] overflow-hidden">
          <Img src="/beans/5" alt="beans image 4" />
        </div>

        <div className="w-full h-[70vh] sm:h-[100vh] overflow-hidden">
          <Img src="/beans/6" alt="beans image 5" />
        </div>

        <div className="w-full h-[70vh] sm:h-[100vh] overflow-hidden">
          <Img src="/beans/7" alt="beans image 6" />
        </div>
      </div>

      <div className="h-[3rem]" />

      <div className="px-[1rem]">
        <p className="tracking-tighter mb-[0.4em]">outcome</p>
        <p className="tracking-tighter text-gray-500 max-w-[90vw]">
          the result was a distinctive identity that captured the character of the brand while reinforcing its focus on handmade quality. the system created a consistent visual language that could be applied across packaging, communication, and future brand touchpoints
        </p>
      </div>

      <div className="h-[3rem]" />

      <div className="px-[1rem] flex flex-col gap-[0.5rem] text-gray-500 tracking-tighter">
        <div onClick={() => { window.location.hash = '/artruth' }} className="cursor-pointer">
          artruth by ikaiva
        </div>
        <div onClick={() => { window.location.hash = '/blume' }} className="cursor-pointer">
          blume by ikaiva
        </div>
        <div onClick={() => { window.location.hash = '/southern-floorings' }} className="cursor-pointer">
          southern floorings by ikaiva
        </div>
      </div>

      <div className="h-[10rem]" />
    </div>
  )
}
