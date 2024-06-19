import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp w-full flex flex-col items-center sm:items-start" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-opacity-10 text-primary" style={{backgroundColor:'#3EB449'}}>
          {icon}
        </div>
        <h3 className="mb-5 text-xl  text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base !leading-relaxed  md:text-md ">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
