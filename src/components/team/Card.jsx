export default function Card(props) {
  return (
    <div className="component__card-team">
      <div className="relative bg-red-600">
        <img src={props.image} alt="king-solana-dukun" className="w-full" />
        <p className="capitalize bg-slate-500 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded">
          {props.position}
        </p>
      </div>
      <h1 className="text-white text-center py-3">{props.name}</h1>
    </div>
  );
}
