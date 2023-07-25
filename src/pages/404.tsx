import Navbar from "@/views/navbar";

export default function Home() {
  return (
    <span className="flex flex-col items-center">
      <main className="flex w-full max-w-[1200px] flex-col gap-32 px-8 py-12 sm:px-12">
        <Navbar />

        <span className="flex h-full flex-col items-center gap-3 py-12">
          <h2 className="max-w-[40rem] text-xl font-bold text-green-500 sm:text-2xl">
            404
          </h2>
          <h1 className="max-w-[44rem] text-center text-4xl font-bold sm:text-5xl">
            We can&apos;t find this page
          </h1>
          <p className="mt-2 text-center text-neutral-500 sm:text-left">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </span>
      </main>
    </span>
  );
}
