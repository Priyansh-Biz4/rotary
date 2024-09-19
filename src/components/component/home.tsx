import Image from 'next/image';
import { CarouselComp } from './carousel';
import IntroModel from './intro-model';

export default function HomePage() {
  const images = ['img1', 'img3', 'img4'];

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/into.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
      </div>

      <main className="relative flex-1 z-10">
        <div className="bg-background rounded-lg shadow-lg max-w-md w-full relative animate-scale-up">
          <IntroModel />
        </div>
        <section className="w-full bg-muted">
          <CarouselComp />
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Garba Sponsorship Program
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Celebrate the Vibrant Garba Culture</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Garba Sponsorship Program is a unique opportunity to support and showcase the rich cultural heritage
                of Garba dance. By becoming a sponsor, you can contribute to the preservation and promotion of this
                vibrant tradition, connecting with the community and amplifying your brand&apos;s presence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {images.map((altText) => (
                <Image
                  src={"/" + altText + ".jpeg"}
                  width={400}
                  height={100}
                  alt={altText}
                  className="rounded-lg object-cover"
                  key={altText}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Sponsorship Tiers
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore the Sponsorship Opportunities</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Garba Sponsorship Program offers various tiers to suit your needs and budget. From Bronze to
                Platinum, each level provides unique benefits and opportunities to showcase your brand and support the
                vibrant Garba community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {images.map((altText) => (
                <Image
                  src={"/" + altText + ".jpeg"}
                  width={400}
                  height={300}
                  alt={altText}
                  className="rounded-lg object-cover"
                  key={altText}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
