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

export default function Artruth({ page: _page }: ProjectProps) {
  return (
    <div className="relative bg-white min-h-screen pb-[5rem] flex flex-col w-full">
      <div className="px-[1rem] pt-[1rem] pb-[1rem]">
        <h1 className="tracking-tighter">artruth by ikaiva</h1>
        <p className="mt-[1rem] tracking-tighter text-gray-500 max-w-[90vw]">
          artruth is a dark chocolate brand built around craftsmanship, authenticity and intentional consumption. the project explored how these ideas could be translated into a distinctive identity and packaging system that felt personal and genuine
        </p>
      </div>

      <div className="w-full h-[70vh] sm:h-[80vh] overflow-hidden mt-12">
        <Img src="/artruth/cover" alt="artruth cover" />
      </div>

      <div className="px-[1rem] pt-[3rem]">
        <p className="tracking-tighter mb-[0.4em]">approach</p>
        <p className="tracking-tighter text-gray-500 max-w-[90vw]">
          every visual decision was guided by the philosophy behind the brand. typography, color, packaging, and layout systems were designed to reflect the character of the product and the values it represented. the founder's handwritten wordmark was preserved and refined as the logo, allowing the identity to retain a sense of personality and authenticity
        </p>
      </div>

      <div className="mt-[3rem] flex flex-col ">
        <div className="w-full h-[70vh] sm:h-[80vh] overflow-hidden">
          <Img src="/artruth/2" alt="artruth brand detail" />
        </div>

        <div className="w-full h-[70vh] sm:h-[120vh] overflow-hidden">
          <Img src="/artruth/3" alt="artruth packaging" />
        </div>

        <div className="w-full h-[70vh] sm:h-[120vh] overflow-hidden">
          <Img src="/artruth/4" alt="artruth identity" />
        </div>

        <div className="w-full h-[70vh] sm:h-[80vh] overflow-hidden">
          <Img src="/artruth/5" alt="artruth application" />
        </div>

        <div className="w-full h-[70vh] sm:h-[80vh] overflow-hidden">
          <Img src="/artruth/6" alt="artruth product" />
        </div>

        <div className="w-full h-[70vh] sm:h-[80vh] overflow-hidden">
          <Img src="/artruth/7" alt="artruth final" />
        </div>
      </div>

      <div className="h-[3rem]" />

      <div className="px-[1rem]">
        <p className="tracking-tighter mb-[0.4em]">outcome</p>
        <p className="tracking-tighter text-gray-500 max-w-[90vw]">
          the project resulted in a cohesive brand system that connected the product, packaging, and philosophy into a unified experience. the identity established a strong visual presence while remaining rooted in the story and values that inspired the brand
        </p>
      </div>

      <div className="h-[3rem]" />

      <div className="px-[1rem] flex flex-col gap-[0.5rem] text-gray-500 tracking-tighter">
        <div onClick={() => { window.location.hash = '/beans' }} className="cursor-pointer">
          beans by ikaiva
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
