import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next.js 14 Homepage",
    template: "%s | Next.js 14"
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  let showError = false;

  // Update showError based on screen width
  function handleResize() {
    showError = window.innerWidth < 600; // Menampilkan pesan jika lebar layar kurang dari 600px
    // Re-render component
    renderComponent();
  }

  // Function to render component based on showError status
  function renderComponent() {
    return (
      <html lang="en">
        <body className={inter.className}>
          <div className="container">
            {showError ? (
              <div className="error-message-container">
                <p className="error-message">Website ini hanya dapat diakses pada layar tablet atau lebih besar.</p>
              </div>
            ) : (
           <>
         <Navbar />
              {children}
            <Footer />
      </>
            )}
          </div>
        </body>
      </html>
    );
  }

  // Add event listener to handle screen resize
  window.addEventListener('resize', handleResize);

  // Call handleResize once on component mount
  handleResize();

  // Cleanup function to remove event listener
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}
