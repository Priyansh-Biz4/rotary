"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";

export default function IntroTimeoutModel({img}:{img:string}) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, []);

  return isOpen ? (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="fixed top-0 left-0 z-50 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center animate-fade-in"
        >
          <div className="bg-background p-8 rounded-lg shadow-lg max-w-md w-full relative animate-scale-up">
            <button
              className="absolute top-4 right-4 rounded-full p-2 hover:bg-muted"
              onClick={() => {
                setIsOpen(false); // Close the modal when the close button is clicked
              }}
            >
              <XIcon className="w-4 h-4" />
            </button>
            <div className="flex flex-col items-center justify-center gap-6">
            <h1>અમારી ચાલુ ઇવેન્ટમાં, સ્માર્ટ એન્ટ્રી, ચહેરાની ઓળખ અને સર્વી-ફાઇ ટેક દ્વારા સંચાલિત અમારી વેબસાઇટ સાથે સરળ ઍક્સેસનો આનંદ માણો!</h1>
              <Image
                src={img}
                width={500}
                height={500}
                alt="Modal Image"
                className="rounded-lg animate-scale-up"
                style={{ aspectRatio: "350 / 200", objectFit: "cover" }}
              />
            </div>
          </div>
        </button>
      </DialogTrigger>
    </Dialog>
  ) : null;
}

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
