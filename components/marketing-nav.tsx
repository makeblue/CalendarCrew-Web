const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/about', label: 'About' },
  { href: '/download', label: 'Download' },
];

export function MarketingNav() {
  return (
    <nav className="marketing-nav" aria-label="Primary">
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
