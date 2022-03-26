import { Link } from "react-router-dom";
import KingLogo from "../assets/image/KingBody.svg";
export default function NotFound() {
  return (
    <div className="page__not-found">
      <main>
        <div id="not-found">
          <div className="min-h-screen flex flex-col space-y-7 items-center justify-center bg-black">
            <div className="logo-not-found">
              <img src={KingLogo} alt="King Logo" className="w-[20rem]" />
            </div>
            <div className="text-not-found text-center">
              <h1 className="text-white text-[3rem]">404 error</h1>
              <p className="text-white">
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button to go back to the
                homepage.
              </p>
            </div>
            <Link
              to="/"
              className="bg-gradient-to-r from-yellow-600 to-gold p-2 rounded-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-700 hover:to-yellow-500"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
