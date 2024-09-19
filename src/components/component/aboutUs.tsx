import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

export default function AboutUS() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    About us
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    About Rotary Club Palampur Zanzar - Garba Event Welcome to
                    Rotary Club Palampur Zanzar Garba event – a celebration of
                    culture, community, and tradition! As part of our ongoing
                    mission to bring people together for the greater good, we
                    are excited to host one of the most vibrant and energetic
                    events of the year – Garba. Our club is deeply rooted in the
                    values of service, camaraderie, and giving back to society.
                    Through this event, we aim not only to celebrate the rich
                    traditions of Garba and Navratri but also to create a
                    platform for community engagement and joy. At Rotary Club
                    Palampur, we believe in fostering unity and spreading
                    happiness while making a positive impact on the lives of
                    those around us. The Zanzar Garba Event promises to be a
                    spectacular night filled with music, dance, and festive
                    spirit. Whether you are an experienced Garba dancer or
                    someone looking to experience this cultural tradition for
                    the first time, our event is the perfect place to join in
                    the fun. We invite families, friends, and Garba enthusiasts
                    from all walks of life to come together and create
                    unforgettable memories. Why Rotary Club Palampur Zanzar?
                    Rotary Club Palampur Zanzar has been committed to community
                    service and leadership for years. Our initiatives focus on
                    empowering local communities through educational, social,
                    and cultural projects. Proceeds from this event will be used
                    to support charitable causes, including educational
                    scholarships, health care initiatives, and other
                    community-driven projects. Join us for an evening of dance,
                    music, and celebration – all for a great cause!{" "}
                  </p>
                </div>
              </div>
              <Image
                src={"/image3.jpg"}
                width="550"
                height="550"
                alt="About Us"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Garba Mahotsav
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Today it is like through ‘Abhivyakti Garba Mahotsav’ Navratri
                  dance festival has gone global. People from Bhopal, Indore and
                  Jaipur wait for complete year for this festival. Abhivyakti
                  Garba Mahotsav is a community in itself wherein people are
                  connected since last 19 years and this community is increasing
                  in size every year. Abhivyakti has seen young girls getting
                  married becoming mothers and coming back to the same event
                  with their children. Its actually overwhelming to see the kind
                  of relatedness it has created in all the 3 centers Bhopal,
                  Indore & Jaipur.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Values
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From group’s perspective , there is an spiritual angle to the
                  whole event. This event is really close to the heart of the DB
                  group. Money earned from Abhivyakti is used for charity
                  reasons. Religious ceremony is personally done by Mrs Jyoti
                  Agarwal daily including the prayers offered to 5 statues of
                  Ganpati across the Abhivyakti ground. Passion and love
                  involved in organising this show is the main reason behind its
                  huge success. It’s surprising but true that Abhivyakti Garba
                  Mahotsav has same team of Decorators, Sound System, Tent,
                  Stage Artist, DJ and trainers since last 19 years
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our team of experts is dedicated to providing you with world-class web solutions. Get to know the
                                    people behind Acme Inc.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                            <div className="flex flex-col items-center space-y-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1 text-center">
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-sm text-muted-foreground">CEO</p>
                                    <p className="text-sm text-muted-foreground">
                                        John is the visionary behind Acme Inc, leading the company to new heights with his strategic vision
                                        and innovative mindset.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>JA</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1 text-center">
                                    <h3 className="text-lg font-bold">Jane Appleseed</h3>
                                    <p className="text-sm text-muted-foreground">CTO</p>
                                    <p className="text-sm text-muted-foreground">
                                        Jane is the technical mastermind behind Acme Inc, ensuring our solutions are cutting-edge and
                                        future-proof.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>SM</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1 text-center">
                                    <h3 className="text-lg font-bold">Sarah Musk</h3>
                                    <p className="text-sm text-muted-foreground">Head of Design</p>
                                    <p className="text-sm text-muted-foreground">
                                        Sarah is the creative force behind Acme Inc, crafting beautiful and user-friendly designs that
                                        delight our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
      </main>
    </div>
  );
}
