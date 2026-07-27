interface NavbarProps {
  page?: string
}

const links = [
  { name: 'about', href: '#/about' },
  { name: 'service', href: '#/service' },
  { name: 'product', href: '#/product' },
  { name: 'contact', href: '#/contact' },
]

function NavLink({ name, href, isActive }: { name: string; href: string; isActive: boolean }) {
  return (
    <div
      onClick={() => { window.location.hash = isActive ? '/' : href.replace('#', '') }}
      className="cursor-pointer hover:opacity-70 transition-opacity text-black select-none"
    >
      {isActive ? 'home' : name}
    </div>
  )
}

export default function Navbar({ page = 'home' }: NavbarProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[2.5rem] px-[1rem] flex justify-between items-center bg-white z-50">
      {links.map((link) => (
        <NavLink
          key={link.name}
          name={link.name}
          href={link.href}
          isActive={page === link.name}
        />
      ))}
    </nav>
  )
}
