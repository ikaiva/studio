interface ContactProps {
  page: string
}

const links = [
  { name: 'schedule call', href: '#' },
  { name: 'send an email', href: 'mailto:hello@ikaiva.com' },
  { name: 'request a review', href: '#' },
]

export default function Contact({ page: _page }: ContactProps) {
  return (
    <div className="relative bg-white min-h-screen pb-[5rem] flex flex-col justify-between">
      <div className="pt-[1rem] px-[1rem]">
        <h1 className="text-[8vw] sm:text-[5vw] tracking-tighter max-w-[90vw]">
          let's work together
        </h1>
        <p className="text-[4vw] sm:text-[2vw] mt-[0.4em] tracking-tighter text-gray-500">
          reach out and let's start a conversation
        </p>
      </div>
      <div className="px-[1rem] flex flex-col g">
        {links.map((link) => (
          <div
            key={link.name}
            onClick={() => { window.location.href = link.href }}
            className="text-[6vw] sm:text-[3vw] tracking-tighter text-gray-400 hover:text-black transition-colors cursor-pointer select-none"
          >
            {link.name}
          </div>
        ))}
      </div>
    </div>
  )
}
