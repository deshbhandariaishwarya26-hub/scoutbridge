import "./globals.css";
import { DiscoveryProvider } from "../context/DiscoveryContext";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "ScoutBridge",
  description: "Customer and Investor Discovery Platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DiscoveryProvider>
          <Navbar />
          {children}
        </DiscoveryProvider>
      </body>
    </html>
  );
}