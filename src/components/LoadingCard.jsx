export default function LoadingCard() {
  return (
    <>
      {[...Array(6)].map((e, i) => (
        <div
          className="animate-pulse rounded-lg bg-slate-200 h-[250px] w-[100%] p-5 flex flex-col"
          key={i}
        >
          <div className="bg-slate-300 h-[15px] w-[90%] m-auto rounded-md"></div>
          <div className="bg-slate-300 h-[95px] w-[90%] m-auto rounded-md"></div>
          <div className="bg-slate-300 h-[30px] w-[90%] m-auto rounded-md"></div>
        </div>
      ))}
    </>
  );
}
