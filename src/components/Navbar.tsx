interface NavbarProps {
  page?: string
}

const links = [
  { name: 'about', href: '#/about' },
  { name: 'service', href: '#/service' },
  { name: 'products', href: '#/products' },
  { name: 'contact', href: '#/contact' },
]

function NavLink({ name, href, isActive }: { name: string; href: string; isActive: boolean }) {
  return (
    <a
      href={isActive ? '#/' : href}
      className="cursor-pointer hover:opacity-70 transition-opacity text-[16px] sm:text-[18px] text-black"
    >
      {isActive ? 'home' : name}
    </a>
  )
}

export default function Navbar({ page = 'home' }: NavbarProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-[1rem] mb-[1rem] flex justify-between items-center z-50 pointer-events-none">
      <div className="flex justify-between items-center w-full pointer-events-auto">
        {links.map((link) => (
          <NavLink
            key={link.name}
            name={link.name}
            href={link.href}
            isActive={page === link.name}
          />
        ))}
      </div>
    </nav>
  )
}
