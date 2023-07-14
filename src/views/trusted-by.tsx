import Ticker from "@/components/ticker";

const TrustedBy = () => {
  return (
    <div className="my-16 flex flex-col items-center gap-8">
      <div className="text-2xl text-neutral-500">Trusted by</div>
      <div className="relative w-screen">
        <Ticker duration={5}>
          <Tag>One</Tag>
          <Tag>Two</Tag>
          <Tag>Three</Tag>
        </Ticker>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-white to-transparent dark:from-black" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-white to-transparent dark:from-black" />
      </div>
    </div>
  );
};

interface TagProps {
  children: React.ReactNode;
}
const Tag = ({ children }: TagProps) => {
  return (
    <div className="mx-4 flex cursor-pointer items-center gap-2 rounded-2xl bg-neutral-100 px-8 py-2 hover:bg-neutral-200 dark:bg-neutral-900 hover:dark:bg-neutral-900/70">
      {children}
    </div>
  );
};

export default TrustedBy;
