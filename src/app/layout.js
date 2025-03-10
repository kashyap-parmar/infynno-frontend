export const dynamic = "force-dynamic";
import { Outfit } from "next/font/google";
import ReduxProvider from '../redux/provider'
import Header from '../component/header'; // Import normally
import Footer from '../component/footer';
import { initialState } from '../redux/slice/propertySlice';
import "./globals.css";

// ----------------------------------------------------------------

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata() {
  return {
    title: "Immobilien Suche",
    description: "Generated by create next app",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <ReduxProvider initialData={initialState}>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
