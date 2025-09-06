import "./globals.css";

export const metadata = {
  title: "Game Portfolio",
  description: "Alon Zayger portfolio of published games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
