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
    <div className="fixed inset-0 bg-white pb-[5rem] flex flex-col justify-between">
      <div className="pt-[1rem] px-[1rem]">
        <h1 className="tracking-tighter max-w-[90vw]">
          questions are welcome
        </h1>
        <p className="mt-[1rem] tracking-tighter text-gray-500">
          the best work begins by asking the right question
        </p>
      </div>
      <div className="px-[1rem] flex flex-col g">
        {links.map((link) => (
          <div
            key={link.name}
            onClick={() => { window.location.href = link.href }}
            className="tracking-tighter text-gray-500 hover:text-black transition-colors cursor-pointer select-none"
          >
            {link.name}
          </div>
        ))}
      </div>
    </div>
  )
}
