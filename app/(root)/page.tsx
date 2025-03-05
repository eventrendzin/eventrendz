import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]  xl:text-[58px] xl:leading-[74px]">Host, Connect, Celebrate: Your Events with Our Platform!</h1>
            <p className="font-normal text-[24px] leading-[36px] md:p-regular-24">Book your tickets only at evenTrendz</p>
            <Button size="lg" asChild className="rounded-full h-[54px] p-regular-16 w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero.png"
            alt="Home page collage"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>

        <section id="events" className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="font-bold text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px]">Trust by <br /> Thousands of Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search
          CategoryFilter
        </div>

      </section>
      </section>
    </main>
  );
}
