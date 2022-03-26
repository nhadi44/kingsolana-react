export default function RoadmapLine(props) {
  return (
    <div className="component__roadmap-line">
      <div className="before:content-['test']">
        <h1>roadmap lines</h1>
        {props.children}
      </div>
    </div>
  );
}
