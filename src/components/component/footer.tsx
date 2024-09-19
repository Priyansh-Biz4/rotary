"use client"
import Image from "next/image";
import Link from "next/link";

function LocateIcon(props: React.SVGAttributes<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="2" x2="5" y1="12" y2="12" />
            <line x1="19" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="5" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    )
}


function MailIcon(props: React.SVGAttributes<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}

function PhoneIcon(props: React.SVGAttributes<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}


const Footer = () =>
(
    <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
                <h3 className="text-lg font-bold">Contact Us</h3>
                <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                        <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                        <span>+1 (123) 456-7890</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MailIcon className="h-5 w-5 text-muted-foreground" />
                        <span>info@garbasponsor.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <LocateIcon className="h-5 w-5 text-muted-foreground" />
                        <span>31, Gam Kadva Patidar Samaj vadi,
                            Nr. Sadhima Mandir, Gathaman road,
                            Palanpur</span>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-bold">Quick Links</h3>
                <div className="grid gap-2">
                    <Link href="/" className="hover:underline" prefetch={true}>
                        Home
                    </Link>
                    <Link href="/about" className="hover:underline" prefetch={true}>
                        About
                    </Link>
                    <Link href="/gallery" className="hover:underline" prefetch={false}>
                        Gallery
                    </Link>
                </div>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-bold">Find Us</h3>
                <Link href={"https://maps.app.goo.gl/zpQCKZ1k4TjLbRDU9"}>
                    <Image
                        src="/map.png"
                        width={600}
                        height={300}
                        alt="Map"
                        className="rounded-lg object-cover"
                        style={{ aspectRatio: "600/300", objectFit: "cover" }}
                    />
                </Link>
                {/* <iframe src="https://www.google.com/maps/d/embed?mid=15xQaYCiOJJCRmz235cCU8QZO7Ztz3WU&ehbc=2E312F" width="340" height="2 80"></iframe> */}
            </div>
        </div>
    </footer>
)
export default Footer;