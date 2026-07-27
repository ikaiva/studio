interface AboutProps {
  page: string
}

export default function About({ page: _page }: AboutProps) {
  return (
    <div className="fixed inset-0 bg-white pb-[5rem] flex flex-col justify-between">
      <div className="m-[1rem] flex-1 flex flex-col justify-start">
        <h1 className="text-[8vw] sm:text-[4vw] tracking-tighter max-w-[90vw]">
          we're a multidisciplinary studio creating works across disciplines
        </h1>
        <p className="text-[4vw] sm:text-[2vw] mt-[0.4em] tracking-tighter text-gray-500">
          we create products and solve problems across industries
        </p>
      </div>
      <div className="m-[1rem] grid grid-cols-1 sm:grid-cols-3 gap-[2rem]">
        <div className="max-w-[70%]">
          <h2 className="text-[3.5vw] sm:text-[1.2vw]">purpose</h2>
          <p className="text-[3.5vw] sm:text-[1.2vw] text-gray-500">
            we exist to create works across disciplines that serve a purpose greater than themselves,
            a piece of wood isn't valued for what it is, but for what it becomes
          </p>
        </div>
        <div className="max-w-[70%]">
          <h2 className="text-[3.5vw] sm:text-[1.2vw]">mission</h2>
          <p className="text-[3.5vw] sm:text-[1.2vw] text-gray-500">
            we reflect art and beauty in everything we create
          </p>
        </div>
        <div className="max-w-[70%]">
          <h2 className="text-[3.5vw] sm:text-[1.2vw]">vision</h2>
          <p className="text-[3.5vw] sm:text-[1.2vw] text-gray-500">
            to be an independent multidisciplinary studio that keeps creating works across disciplines
          </p>
        </div>
      </div>
    </div>
  )
}
