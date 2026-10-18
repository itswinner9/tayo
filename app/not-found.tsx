import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
      <p className="font-display text-6xl text-tayo-blue">404</p>
      <h1 className="mt-4 font-display text-3xl tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 text-tayo-grey">
        That page does not exist. Head home or request a quote.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link
          href="/contact"
          className="btn-secondary border-tayo-black text-tayo-black"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
