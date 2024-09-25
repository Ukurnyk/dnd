import Link from "next/link";
const mapItemNavMenu = [
  {
    href: "/play",
    name: "Играть",
  },
];

export default function HeaderNav() {
  return (
    <nav className="flex items-start md:items-center gap-6 text-sm font-medium flex-col md:flex-row ">
      {mapItemNavMenu.map((x) => (
        <Link
          key={x.href + x.name}
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href={x.href}
        >
          {x.name}
        </Link>
      ))}
    </nav>
  );
}
