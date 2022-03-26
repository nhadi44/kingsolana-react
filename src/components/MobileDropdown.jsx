import * as Component from "../components";
import { useDetectClickOutside } from "react-detect-click-outside";

export default function MobileDropdown({ closeToggle }) {
  const ref = useDetectClickOutside({ onTriggered: closeToggle });
  console.log(closeToggle);
  return (
    <div className="component__mobile-dropdown" ref={ref}>
      <div className="navbar__menu-item translate-y-7 translate-x-3 opacity-100 transition duration-700">
        <Component.MobileMenu />
      </div>
    </div>
  );
}
