import RoadmapImage from "../../assets/image/roadmap.svg";
import RoadmapComponent from "../../components/roadmap/RoadmapComp";
import RoadmapCompDetail from "../roadmap/RoadmapCompDetail";
export default function Roadmap() {
  return (
    <div>
      <div className="text-black flex flex-col items-center justify-center space-y-28 2xl:space-y-40">
        <img src={RoadmapImage} alt="roadmap" className="lg:w-40 2xl:w-56" />
        <div className="hidden md:block">
          <div className="flex">
            <div className="roadmap__body">
              <div className="roadmap-body flex relative h-40">
                <div className="absolute -translate-y-16 2xl:-translate-y-32  text-white translate-x-10">
                  <RoadmapCompDetail />
                </div>
                <div className="flex items-center">
                  <RoadmapComponent month="jan" year="22" />
                </div>
              </div>
            </div>

            <div className="roadmap__body">
              <div className="roadmap-body flex relative h-40">
                <div className="absolute translate-y-32 2xl:translate-y-40 text-white translate-x-10">
                  <RoadmapCompDetail />
                </div>
                <div className="flex items-center">
                  <RoadmapComponent month="jan" year="22" />
                </div>
              </div>
            </div>
            <div className="roadmap__body">
              <div className="roadmap-body flex relative h-40">
                <div className="absolute -translate-y-16  2xl:-translate-y-32 text-white translate-x-10">
                  <RoadmapCompDetail />
                </div>
                <div className="flex items-center">
                  <RoadmapComponent month="jan" year="22" />
                </div>
              </div>
            </div>

            <div className="roadmap__body">
              <div className="roadmap-body flex relative h-40">
                <div className="absolute translate-y-32 2xl:translate-y-40 text-white translate-x-10">
                  <RoadmapCompDetail />
                </div>
                <div className="flex items-center">
                  <RoadmapComponent month="jan" year="22" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
