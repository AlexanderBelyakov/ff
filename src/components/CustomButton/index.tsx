import Image from "next/image";

const CustomButton = ({
  text,
  hasArrow,
}: {
  text: string;
  hasArrow: boolean;
}) => {
  return (
    <button
      type="submit"
      className=" flex items-center  z-[7] text-[12px] w-full justify-center rounded-md border border-transparent bg-purple-500 px-8 py-3 text-base  text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
    >
      {text}
      {/* {hasArrow && (
        <Image
          src="/arrow_cool_down.svg"
          alt="arrow"
          width={18}
          height={12}
          className="ml-3"
        />
      )} */}
    </button>
  );
};

export default CustomButton;
