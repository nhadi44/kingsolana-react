import UtilityImage from "../utility/utilityImage";
import UtilityTable from "../utility/utilityTableDesc";
export default function Utility() {
  return (
    <div className="component__utility-page">
      <div className="grid grid-cols-2 grid-flow-col mx-20 translate-y-10">
        <div>
          <UtilityImage />
        </div>
        <div className="my-7">
          <UtilityTable />
        </div>
      </div>
    </div>
  );
}
