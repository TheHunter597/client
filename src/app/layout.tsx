import Navbar from "./components/Navbar";
import "./global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className=" text-primary overflow-hidden">
          <div className=" mx-auto">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
