import KingBody from "../../assets/image/KingBody.svg";
export default function Home() {
  return (
    <div className="page__home">
      <div className="flex flex-col justify-center items-center">
        <img src={KingBody} alt="king-body" />
        <h1 className="text-white uppercase text-[108px] font-semibold">
          king solana
        </h1>
      </div>
    </div>
  );
}
