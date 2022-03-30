import utilImage from "../../assets/image/king-solana-util.png";

export default function utilityImage() {
  return (
    <div className="component__utility-image">
      <div className="utility__image-main text-white flex flex-col items-center justify-center">
        <h1 className="uppercase font-semibold text-[65px]">utility</h1>
        <div className="utility__image-picture">
          <img src={utilImage} alt="utility-pictures" className="w-64" />
        </div>
      </div>
    </div>
  );
}
