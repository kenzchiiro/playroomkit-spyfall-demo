function Card({ data }) {
  return (
    <div
      className="w-fit flex flex-col carousel-item border-4 rounded-xl border-slate-600"
    >
      <div className="flex w-64 justify-between ml-1 items-center font-extrabold text-lg md:text-1xl text-neutral text-left z-40">
        <div className="flex space-x-2 m-2">{data.name}</div>
      </div>
      <div className="h-80 content-center">
        <div className="mt-2 h-full content-center">
          <div class="flex justify-center">{data.word}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
