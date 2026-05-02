import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Deletion Tracker — Track Data Deletion Requests Across Systems",
  description: "Monitor and track GDPR data deletion requests across multiple databases and services. Automated verification, audit trails, and compliance certificates."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7e64daac-6e7b-49a0-894a-61d6052c911a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
