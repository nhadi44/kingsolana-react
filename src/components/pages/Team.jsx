import KingSolanaDukun from "../../assets/image/king-solana-dukun.png";
import KingSolanaIceBead from "../../assets/image/king-solana-ice-bead.png";
import KingSolanaNusantara from "../../assets/image/king-solana-nusantara.png";
import KingSolanaUtil from "../../assets/image/king-solana-util.png";

import Card from "../../components/team/Card";

export default function Team() {
  return (
    <div className="page__kingsolana-team">
      <div className="kingsolana__header text-white uppercase text-center font-semibold">
        <h1 className="text-5xl 2xl:text-6xl">Team</h1>
        <h1 className="text-5xl 2xl:text-6xl">king solana</h1>
      </div>
      <div className="kingsolana-card py-14 flex justify-center">
        <div className="grid grid-cols-4 2xl:gap-x-10 gap-x-10 w-3/4 2xl:w-full">
          <Card
            name="Kingsolana"
            image={KingSolanaDukun}
            position="kingsolana"
          />
          <Card
            name="Kingsolana"
            image={KingSolanaIceBead}
            position="kingsolana"
          />
          <Card
            name="Kingsolana"
            image={KingSolanaNusantara}
            position="kingsolana"
          />
          <Card
            name="Kingsolana"
            image={KingSolanaUtil}
            position="kingsolana"
          />
        </div>
      </div>
    </div>
  );
}
