import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col bg-gray-100 text-gray-900 antialiased">
        <header className="flex-shrink-0 bg-gray-300 text-black p-2">
          <h1>Sample</h1>
        </header>
        <main className="flex-grow overflow-y-auto">{children}</main>
        <footer className="flex-shrink-0 bg-gray-300 text-black p-2 text-center">
          © 2024 Sample
        </footer>
      </body>
    </html>
  );
}
