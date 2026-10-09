import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: "Life of kayes",
  description: "A personal life story sharing blog",
};

// Runs before first paint so the page never flashes the wrong theme.
// Saved choice wins; otherwise follow the system setting.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) add attributes to <body> before React loads */}
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
