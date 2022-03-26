import * as component from "../components";
import Sidebar from "../components/Sidebar";
export default function DefaultLayout(props) {
  return (
    <div className="default__layout">
      <nav>
        <component.Navbar />
      </nav>
      <Sidebar />
      <main>{props.children}</main>
    </div>
  );
}
