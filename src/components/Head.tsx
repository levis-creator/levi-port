import { FC } from "react";

interface HeadProps {
  title: string;
}
const Head: FC<HeadProps> = ({ title }) => {
  return (
    <h2 className="mb-8 text-2xl font-bold text-center lg:mb-20 text-primary-blue after:content-[' '] after:flex after:bg-primary-blue after:p-1 after:w-8 after:rounded-xl after:mt-3 after:mx-auto">
      {title}
    </h2>
  );
};

export default Head;
