import Image from "next/image";
import Link from "next/link";
import { PhoneCta } from "@/components/PhoneCta";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  showCtas?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  showCtas = true,
  imageSrc = "/images/hero/handyman-hero.jpg",
  imageAlt = "Tayo Services handyman and maintenance work",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-black/10 pt-32 md:pt-36">
      <div className="mx-auto grid w-[min(1180px,92%)] gap-10 pb-14 md:grid-cols-2 md:items-end md:gap-12 md:pb-20">
        <div>
          {eyebrow && (
            <p className="font-mono-label text-tayo-blue">{eyebrow}</p>
          )}
          <h1 className="mt-4 font-display text-3xl leading-[1.08] tracking-tight text-tayo-black md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-md text-base leading-relaxed text-tayo-grey">
              {subtitle}
            </p>
          )}
          {showCtas && (
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
              <PhoneCta variant="secondary" />
            </div>
          )}
        </div>
        <div className="relative aspect-[5/4] overflow-hidden bg-tayo-grey-light md:aspect-[4/3]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width:768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
