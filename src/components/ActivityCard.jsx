import comming_soon from "../assets/images/Coming_soon.png";

function ActivityCard({ title }) {
  return (
    <div className="w-[400px] h-[300px] p-4 bg-[#D9D9D9] rounded-lg relative flex-none cursor-pointer">
      <img className="absolute z-10 top-0 left-0" src={comming_soon} alt="" />
      <p className="py-2 px-4 font-semibold text-lg bg-white absolute bottom-2 right-1/2 transform translate-x-1/2 rounded-full">
        {title}
      </p>
    </div>
  );
}

export default ActivityCard;
