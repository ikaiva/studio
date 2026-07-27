interface HomeProps {
  page: string
}

export default function Home({ page: _page }: HomeProps) {
  return (
    <div className="fixed inset-0 bg-white pb-[5rem]">
      <div className=" h-[85vh] flex items-center justify-center overflow-hidden">
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
    </div>
  )
}
