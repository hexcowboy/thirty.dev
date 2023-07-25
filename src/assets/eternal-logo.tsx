import { twMerge } from "tailwind-merge";

const EternalLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 351.2 55"
      className={twMerge("h-[22px] w-[101px]", className)}
    >
      <rect
        x="3.5"
        y="27.5"
        width="24"
        height="24"
        strokeWidth="7"
        fill="none"
      ></rect>
      <rect
        x="27.5"
        y="3.5"
        width="24"
        height="24"
        strokeWidth="7"
        fill="none"
      ></rect>
      <path d="M76,30v8h24.9v5.5h-31.6V11.1h31.5v5.6h-24.8v8h20.4v5.2h-20.4v.1Z"></path>
      <polygon points="141.5 11.1 141.5 16.7 127.8 16.7 127.8 43.5 121.1 43.5 121.1 16.7 107.4 16.7 107.4 11.1 141.5 11.1"></polygon>
      <path d="M155.5,30v8h24.9v5.5h-31.6V11.1h31.6v5.6h-24.9v8h20.4v5.2h-20.4v.1Z"></path>
      <path d="M218.9,29.8c-.8-.2-1.8-.4-2.9-.5,.6-.1,1.2-.2,1.8-.4,1.2-.4,2.3-.9,3.2-1.5,1-.7,1.7-1.5,2.2-2.6s.8-2.4,.8-3.9c0-2.3-.5-4.1-1.5-5.5-1-1.5-2.5-2.5-4.4-3.2-1.8-.7-4-1-6.5-1h-21.9V43.5h6.6v-12h12.6c2.1,0,3.7,.1,4.8,.4,1.1,.3,1.9,.8,2.3,1.5,.4,.7,.7,1.6,.7,2.8v7.2h6.6v-7.7c0-1.8-.4-3.1-1.1-4-.7-.9-1.8-1.5-3.3-1.9Zm-22.5-3.5v-9.5h15.3c1.9,0,3.3,.4,4.2,1.1,1,.8,1.5,1.9,1.5,3.4s-.5,2.8-1.5,3.6c-1,.9-2.4,1.4-4.2,1.4h-15.3Z"></path>
      <polygon points="270.9 11.1 270.9 43.5 264.3 43.5 240.2 20 240.2 43.5 233.6 43.5 233.6 11.1 240.2 11.1 264.3 34.8 264.3 11.1 270.9 11.1"></polygon>
      <path d="M300.5,11.1h-7.2l-15.2,32.3h7.2l3.2-7h16.9l3.2,7h7.2l-15.3-32.3Zm-9.5,19.8l5.9-13,5.9,13h-11.8Z"></path>
      <path d="M329.7,11.1v26.8h21.5v5.5h-28.1V11.1h6.6Z"></path>
    </svg>
  );
};

export default EternalLogo;
