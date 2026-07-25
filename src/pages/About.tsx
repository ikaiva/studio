interface AboutProps {
  page: string
}

export default function About({ page: _page }: AboutProps) {
  return (
    <div className="relative bg-white min-h-screen pb-[5rem] z-20 flex flex-col justify-between">
      <div className="m-[1rem] flex-1 flex flex-col justify-start">
        <h1 className="text-[8vw] sm:text-[5vw] tracking-tighter max-w-[90vw]">
          we're a multidisciplinary studio building works across disciplines
        </h1>
        <p className="text-[4vw] sm:text-[2vw] mt-[0.4em] tracking-tighter text-gray-500">
          we build products and solve problems across industries
        </p>
      </div>
      <div className="m-[1rem] grid grid-cols-1 sm:grid-cols-3 gap-[2rem]">
        <div className="max-w-[70%]">
          <h2 className="text-[3.5vw] sm:text-[1.2vw]">purpose</h2>
          <p className="text-[3.5vw] sm:text-[1.2vw] text-gray-500">
            we exist to create meaningful work that bridges the gap between ideas and reality. every project starts with a question and ends with a solution that matters.
          </p>
        </div>
        <div className="max-w-[70%]">
          <h2 className="text-[3.5vw] sm:text-[1.2vw]">mission</h2>
          <p className="text-[3.5vw] sm:text-[1.2vw] text-gray-500">
            to push boundaries across disciplines and deliver design-led experiences that resonate. we believe in simplicity, clarity, and purpose-driven creation.
          </p>
        </div>
        <div className="max-w-[70%]">
          <h2 className="text-[3.5vw] sm:text-[1.2vw]">vision</h2>
          <p className="text-[3.5vw] sm:text-[1.2vw] text-gray-500">
            to become a studio that shapes how people interact with brands, products, and spaces. we envision a future where design solves what words cannot.
          </p>
        </div>
      </div>
    </div>
  )
}
