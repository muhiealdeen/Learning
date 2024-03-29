import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

import Navebar from '@/components/Navbar/Navebar';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });
const BodyFont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export const metadata = {
  title: 'Dish Discovery - Home',
  description: 'Navigate the art of cooking with Dish Discovery App.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={BodyFont.className}>
        <ThemeProvider>
          <div className="container">
            <Navebar />
            {/* <h1 className={BodyFont.className}>Hello</h1> */}
            {/* <div className="FullHeight"></div> */}
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
