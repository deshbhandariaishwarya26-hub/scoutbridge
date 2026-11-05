"use client";

import Link from "next/link";
import { useState } from "react";
import { useDiscovery } from "../../context/DiscoveryContext";

export default function Outreach() {
  const { selectedProspect } = useDiscovery();
  const [copied, setCopied] = useState(false);

  if (!selectedProspect) {
    return (
      <main className="container">
        <h1>Outreach</h1>
        <p>Please select a company or investor first.</p>

        <Link href="/customers" className="btn">
          Find Customers
        </Link>

        <Link href="/investors" className="btn">
          Find Investors
        </Link>
      </main>
    );
  }

  const email = `Hello ${selectedProspect.name},

I came across your organization and found your work in ${selectedProspect.industry} interesting.

I would love to connect and explore potential business opportunities.

Looking forward to hearing from you.

Best regards,
Your Name`;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (error) {
      alert("Unable to copy. Please select and copy the email manually.");
    }
  }

  return (
    <main className="container">
      <h1>Prospect Details</h1>

      <div className="prospect-card">
        <h2>{selectedProspect.name}</h2>

        <p>{selectedProspect.description}</p>

        <p>
          <strong>Industry:</strong> {selectedProspect.industry}
        </p>

        <p>
          <strong>Location:</strong> {selectedProspect.location}
        </p>

        {selectedProspect.type === "investor" && (
          <p>
            <strong>Investment Stage:</strong> {selectedProspect.stage}
          </p>
        )}

        <p>
          <strong>Contact:</strong> {selectedProspect.contact}
        </p>

        <p>
          <strong>Match Score:</strong> {selectedProspect.match}%
        </p>

        <h3>Why this matches</h3>
        <p>{selectedProspect.reason}</p>

        <h3>Personalized Outreach Draft</h3>

        <div className="email-box">{email}</div>

        <button onClick={copyEmail} className="btn">
          {copied ? "Copied Successfully!" : "Copy Email"}
        </button>

        <div className="back-buttons">
          <Link href="/customers" className="btn secondary">
            Back to Customers
          </Link>

          <Link href="/investors" className="btn secondary">
            Back to Investors
          </Link>
        </div>
      </div>
    </main>
  );
}