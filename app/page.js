import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <p className="tagline">SMARTER BUSINESS DISCOVERY</p>

        <h1>
          Find the Right Customers
          <br />
          and Investors
        </h1>

        <p className="hero-text">
          Discover business opportunities and connect
          with the right people to grow your startup.
        </p>

        <div className="hero-buttons">
          <Link href="/customers" className="btn">
            Find Customers
          </Link>

          <Link href="/investors" className="btn secondary">
            Find Investors
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>What Can You Discover?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Customer Discovery</h3>
            <p>
              Find potential companies interested
              in your products and services.
            </p>
          </div>

          <div className="feature-card">
            <h3>Investor Discovery</h3>
            <p>
              Find investors suitable for your startup.
            </p>
          </div>

          <div className="feature-card">
            <h3>Smart Matching</h3>
            <p>
              Understand why a company or investor
              matches your requirements.
            </p>
          </div>

          <div className="feature-card">
            <h3>Personalized Outreach</h3>
            <p>
              Prepare sample messages for potential connections.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}