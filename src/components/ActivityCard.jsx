
import book_icon from '../assets/images/book.png';

function ActivityCard({ title }) {
  return (
    <div className="w-[400px] h-[300px] flex flex-col p-4 bg-[#A5592F] rounded-lg relative flex-none cursor-pointer items-center">
      <img height={200} width={200} src={book_icon} alt="" />
      <p className="py-2 px-4 font-semibold text-lg bg-white rounded-full">
        {title}
      </p>
    </div>
  );
}

export default ActivityCard;
