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

export default function Blume({ page: _page }: ProjectProps) {
  return (
    <div className="relative bg-white min-h-screen pb-[5rem] flex flex-col w-full">
      <div className="px-[1rem] pt-[1rem] pb-[1rem]">
        <h1 className="tracking-tighter">blume by ikaiva</h1>
        <p className="mt-[1rem] tracking-tighter text-gray-500 max-w-[90vw]">
          blume is a conceptual perfume brand created for a design competition. the project explored how branding and packaging could shape the perception of a fragrance through a distinctive visual identity
        </p>
      </div>

      <div className="w-full h-[80vh] sm:h-[70vh] overflow-hidden mt-12">
        <Img src="/blume/cover" alt="blume cover" />
      </div>

      <div className="px-[1rem] pt-[3rem]">
        <p className="tracking-tighter mb-[0.4em]">approach</p>
        <p className="tracking-tighter text-gray-500 max-w-[90vw]">
          the identity was designed to create a memorable and cohesive brand experience across every touchpoint. from the logo system to the packaging applications, each element was developed to express the character of the brand and establish a strong visual presence
        </p>
      </div>

      <div className="mt-[3rem] flex flex-col">
        <div className="w-full h-[70vh] sm:h-[110vh] overflow-hidden">
          <Img src="/blume/1" alt="blume image 1" />
        </div>

        <div className="w-full h-[30vh] sm:h-[90vh] overflow-hidden">
          <Img src="/blume/2" alt="blume image 2" />
        </div>

        <div className="w-full h-[80vh] sm:h-[90vh] overflow-hidden">
          <Img src="/blume/3" alt="blume image 3" />
        </div>

        <div className="w-full h-[80vh] sm:h-[90vh] overflow-hidden">
          <Img src="/blume/4" alt="blume image 4" />
        </div>

        <div className="w-full h-[80vh] sm:h-[90vh] overflow-hidden">
          <Img src="/blume/5" alt="blume image 5" />
        </div>

        <div className="w-full h-[120vh] sm:h-[90vh] overflow-hidden">
          <Img src="/blume/6" alt="blume image 6" />
        </div>
      </div>

      <div className="h-[3rem]" />

      <div className="px-[1rem]">
        <p className="tracking-tighter mb-[0.4em]">outcome</p>
        <p className="tracking-tighter text-gray-500 max-w-[90vw]">
          the project received positive feedback from designers and industry professionals, demonstrating how a clear identity system can strengthen the perception of a product even within a conceptual context
        </p>
      </div>

      <div className="h-[3rem]" />

      <div className="px-[1rem] flex flex-col gap-[0.5rem] text-gray-500 tracking-tighter">
        <div onClick={() => { window.location.hash = '/artruth' }} className="cursor-pointer">
          artruth by ikaiva
        </div>
        <div onClick={() => { window.location.hash = '/beans' }} className="cursor-pointer">
          beans by ikaiva
        </div>
        <div onClick={() => { window.location.hash = '/southern-floorings' }} className="cursor-pointer">
          southern floorings by ikaiva
        </div>
      </div>

      <div className="h-[10rem]" />
    </div>
  )
}
