import "./globals.css";

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        
      </head>
      
<body suppressHydrationWarning>
  <Navbar />
  {children}
</body>
    </html>
  );
}