"use client";

import { useRouter } from "next/navigation";
import { useDiscovery } from "../context/DiscoveryContext";

export default function ProspectCard({ item, type }) {
  const { setSelectedProspect } = useDiscovery();
  const router = useRouter();

  function viewDetails() {
    setSelectedProspect({
      ...item,
      type
    });

    router.push("/outreach");
  }

  return (
    <div className="prospect-card">
      <div className="card-top">
        <h3>{item.name}</h3>
        <span className="match">{item.match}% Match</span>
      </div>

      <p>{item.description}</p>

      <p>
        <strong>Industry:</strong> {item.industry}
      </p>

      <p>
        <strong>Location:</strong> {item.location}
      </p>

      {type === "investor" && (
        <p>
          <strong>Stage:</strong> {item.stage}
        </p>
      )}

      <div className="match-reason">
        <strong>Why this matches:</strong>
        <p>{item.reason}</p>
      </div>

      <button onClick={viewDetails} className="btn">
        View Details & Outreach
      </button>
    </div>
  );
}