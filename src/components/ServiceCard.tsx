import Blob from "./ui/Blob";

const ServiceCard = () => {
  return (
    <div className="shadow-md flex flex-col items-center rounded-lg pb-10">
      <div className="w-44">
        <Blob />
      </div>
      <h3 className="font-bold text-lg">Web Development</h3>
    </div>
  );
};

export default ServiceCard;
