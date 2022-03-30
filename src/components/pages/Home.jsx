import KingBody from "../../assets/image/KingBody.svg";
export default function Home() {
  return (
    <div className="page__home">
      <div className="flex flex-col justify-center items-center space-y-6">
        <img src={KingBody} alt="king-body" className="w-1/2 2xl:w-2/3" />
        <h1 className="text-white uppercase text-6xl 2xl:text-[108px] font-semibold">
          king solana
        </h1>
      </div>
    </div>
  );
}
