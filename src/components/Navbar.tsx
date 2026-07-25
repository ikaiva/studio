interface NavbarProps {
  page?: string
  theme?: 'light' | 'dark'
}

const links = [
  { name: 'about', href: '#/about' },
  { name: 'work', href: '#/work' },
  { name: 'products', href: '#/products' },
  { name: 'contact', href: '#/contact' },
]

function NavLink({ name, href, isActive }: { name: string; href: string; isActive: boolean }) {
  return (
    <a
      href={isActive ? '#/' : href}
      className="cursor-pointer hover:text-black transition-colors text-[16px] sm:text-[20px]"
    >
      {isActive ? 'home' : name}
    </a>
  )
}

export default function Navbar({ page = 'home', theme = 'light' }: NavbarProps) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'

  return (
    <nav className={`flex justify-between items-center ${textColor}`}>
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
