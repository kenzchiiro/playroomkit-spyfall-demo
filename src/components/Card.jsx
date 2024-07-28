function Card({ owner, data }) {
  return (
    <div className="flex flex-col carousel-item border-4 rounded-xl border-slate-600">
      <div className="flex w-64 justify-between ml-1 items-center font-extrabold text-lg md:text-1xl text-neutral text-left z-40">
        <div className="flex space-x-2 m-2">{!data.isHost? owner+"(Host)":owner}</div>
      </div>
      <div className="h-80 content-center">
        <div className="h-full content-center">
          <div className="flex justify-center text-2xl">{data.place}</div>
          <br/>
          <div className="flex justify-center text-2xl">{data.role}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
