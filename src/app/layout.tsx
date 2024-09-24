"use client"
import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const lora = Lora({ subsets: ["latin"], variable: '--font-lora' });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ["latin"], variable: '--font-poppins' });

 const metadata: Metadata = {
  title: "Rotary Club of Palanpur - Garba Celebration",
  description: "Service Above Self - Rotary Club of Palanpur official website featuring Garba celebrations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${poppins.variable} font-sans min-h-screen flex flex-col`}>
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 h-2"></div>

        {/* Updated header with dark theme */}
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
            <Link href="/" className="text-2xl font-bold font-serif text-yellow-400 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Rotary Club of Palanpur
            </Link>
            <ul className="flex flex-wrap space-x-4 mt-4 sm:mt-0">
              <li><Link href="/" className="text-yellow-400 hover:text-pink-400 transition-colors duration-300">Home</Link></li>
              <li><Link href="/about-us" className="text-yellow-400 hover:text-pink-400 transition-colors duration-300">About Us</Link></li>
              <li><Link href="/sponser" className="text-yellow-400 hover:text-pink-400 transition-colors duration-300">Sponsers</Link></li>
              <li><Link href="/gallery" className="text-yellow-400 hover:text-pink-400 transition-colors duration-300">Gallery</Link></li>
              <li><Link href="/members" className="text-yellow-400 hover:text-pink-400 transition-colors duration-300">Members</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow bg-gradient-to-r from-red-500 via-violet-600 to-indigo-600">
          {children}
        </main>

        {/* Updated footer with dark theme */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 font-serif text-yellow-400">Contact Us</h3>
                <p>Email: info@rotaryclubpalanpur.org</p>
                <p>Phone: (123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 font-serif text-yellow-400">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/faq" className="hover:text-pink-400 transition-colors duration-300">FAQ</Link></li>
                  <li><Link href="/terms" className="hover:text-pink-400 transition-colors duration-300">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="hover:text-pink-400 transition-colors duration-300">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 font-serif text-yellow-400">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-pink-400 transition-colors duration-300">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-pink-400 transition-colors duration-300">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.399 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.077 3.077 0 00-.748-1.15 3.077 3.077 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zm0 4.158a4.002 4.002 0 100 8.004 4.002 4.002 0 000-8.004zm0 6.657a2.655 2.655 0 110-5.31 2.655 2.655 0 010 5.31zm5.344-7.412a.96.96 0 11-1.92 0 .96.96 0 011.92 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-pink-400 transition-colors duration-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M8.29 20.251c7.547 0 11.675-6.257 11.675-11.675 0-.178-.004-.355-.012-.531A8.36 8.36 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.1 4.1 0 001.804-2.266 8.19 8.19 0 01-2.605.996 4.09 4.09 0 00-6.966 3.727 11.604 11.604 0 01-8.429-4.276 4.086 4.086 0 001.267 5.455A4.073 4.073 0 012.8 9.713v.052a4.09 4.09 0 003.277 4.012 4.073 4.073 0 01-1.853.07 4.091 4.091 0 003.822 2.85A8.205 8.205 0 012 18.407a11.554 11.554 0 006.29 1.84" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-sm mt-8">
            © 2024 Rotary Club of Palanpur. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
