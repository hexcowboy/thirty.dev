import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const Icon = ({ className }: Props) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      className={twMerge("w-6", className)}
    >
      <g>
        <path
          d="M360.9,423.9c3.6,28.5,3.1,57.6,3.1,86.3c0,63-45.2,115.8-104.7,127.9c-0.5,0.1-1,0.2-1.5,0.3c-1.6,0.3-3.1,0.6-4.7,0.8
		c-1.2,0.2-2.4,0.3-3.6,0.5c-0.9,0.1-1.9,0.3-2.8,0.4c-1.3,0.1-2.7,0.2-4.1,0.3c-0.8,0.1-1.7,0.2-2.5,0.2c-0.1,0-0.1,0-0.2,0
		c-0.2,0-0.5,0-0.7,0c-1.9,0.1-3.8,0.1-5.7,0.1c-0.5,0-1,0-1.5,0c-46-0.5-86.4-25.1-109.2-61.8c-6.2-10-4.1-23.1,4.7-31l43.2-38.5
		c9.2-8.2,15.4,2.2,16.7,10.1c1.3,7.6,4,14.9,9.1,20.7c30.3,34.4,84.5,12,84.5-31.8c0-20.1,1.1-40.2-0.9-60.3
		c-1.9-18.9-8.9-30.6-26.1-42.1c-20.5-13.7-41.4,10.7-57.9,18.4c-7.3,3.4-16.4,3.2-21.4-3.8c-4.8-6.8-4.8-15.8-5.3-23.8
		c-0.6-9.7-0.9-14.9-0.8-28.8c0.1-8.2-0.9-16.3,4.4-22.7c3.2-3.8,7.7-6.4,11.7-9.3c16.4-11.5,92.2-47.8,75.3-74.9
		c-3.9-6.3-10.9-10.5-18.9-10.5H127.1c-7,0-12.1-6.6-10.4-13.4c3.8-14.8,12.5-45.2,15.6-51.7c5.8-12,23.5-11.1,35.2-10.4
		c0.6,0,64.4,0.1,111.6,0.1c8.8-0.6,17.7-0.4,26.4-0.1c16.3,0.5,33.6-1.3,49.2,4.1c24.6,8.6-2.9,32.7-5.9,46.7
		c-0.6,2.7-0.8,5.6-0.9,8.6c0,1.9,0,4,0,6.3c0,2.1,0.1,4.1,0,6.1c-0.1,2.8-0.1,5.6-0.1,8.4c0,6.9-0.1,14.1-0.1,20.6
		c0,2.1,0,4.2,0,6.3c0,0,0,0,0,0c0,2.3,0,4.4,0,6.3c0.1,11.6-12,24.8-18.8,33.2c-6.8,8.4-24.8,19.8-17.6,32.5
		c8.6,15.1,24.6,20.3,34.4,34.1C354,399.6,359.2,410.3,360.9,423.9z"
        />
        <path
          d="M553.2,165.9c71.7,0,130.4,58.7,130.4,130.4v215c0,71.7-58.7,130.4-130.4,130.4s-130.4-58.7-130.4-130.4v-215
		C422.7,224.6,481.4,165.9,553.2,165.9z M505.7,296.4v215c0,25.7,21.7,47.5,47.5,47.5c25.7,0,47.5-21.7,47.5-47.5v-215
		c0-25.7-21.7-47.5-47.5-47.5C527.4,248.9,505.7,270.6,505.7,296.4z"
        />
      </g>
    </svg>
  );
};

export default Icon;
