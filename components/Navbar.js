import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        ScoutBridge
      </Link>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/customers">Customers</Link>
        <Link href="/investors">Investors</Link>
        <Link href="/outreach">Outreach</Link>
      </div>
    </nav>
  );
}