import Ticker from "@/components/ticker";

const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center gap-8 my-16">
      <div className="text-2xl text-neutral-500">Trusted by</div>
      <div className="relative w-screen">
        <Ticker duration={5}>
          <Tag>One</Tag>
          <Tag>Two</Tag>
          <Tag>Three</Tag>
        </Ticker>
        <div className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-white to-transparent dark:from-black" />
        <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-white to-transparent dark:from-black" />
      </div>
    </div>
  );
};

interface TagProps {
  children: React.ReactNode;
}
const Tag = ({ children }: TagProps) => {
  return (
    <div className="mx-4 flex items-center gap-2 rounded-2xl bg-neutral-100 px-8 py-2 dark:bg-neutral-900">
      {children}
    </div>
  );
};

export default TrustedBy;
