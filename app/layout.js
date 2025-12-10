import "./globals.css";

export const metadata = {
  title: "Alejandro De La Mora - AI Solutions Architect",
  description:
    "Resume of Alejandro De La Mora, AI Solutions Architect specializing in GenAI, RAG, and Agentic Workflows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
