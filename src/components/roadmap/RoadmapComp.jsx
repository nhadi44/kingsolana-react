export default function RoadmapComp(props) {
  return (
    <div className="component__roadmap">
      <div className="roadmap-body">
        <div className="bg-white h-20 w-[13rem] rounded-tl-[50px] rounded-bl-[50px] relative flex items-center">
          <div className="bg-black absolute w-10 h-20 right-0 rounded-tl-[50px] rounded-bl-[50px] block"></div>
          <div className="bg-slate-600 h-16 w-16 rounded-full translate-x-3"></div>
          <div className="translate-x-12 text-center">
            <h1 className="text-[18px] font-semibold uppercase">
              {props.month}
            </h1>
            <h1 className="text-[18px] font-semibold uppercase">
              {props.year}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
