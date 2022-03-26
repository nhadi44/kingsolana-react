import * as Sosmed from "../assets/icons/sosmed";
export default function Sidebar() {
  return (
    <div className="component__sidebar">
      <div className="fixed bottom-0 p-6">
        <div className="sidebar__sosmed-icons flex flex-col space-y-2">
          <div className="sosmed-twitter">
            <a
              href="https://twitter.com"
              className=" flex items-center group space-x-8"
            >
              <div className="">
                <img
                  src={Sosmed.Twitter}
                  alt="king-twitter"
                  className="group-hover:bg-blue-500 p-6 rounded-sm "
                />
              </div>
              <span className="bg-white p-2 rounded -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all ease-in duration-200">
                @kingsolana
              </span>
            </a>
          </div>

          <div className="sosmed-telegram">
            <a
              href="https://telegram.com"
              className=" flex items-center group space-x-8"
            >
              <div className="">
                <img
                  src={Sosmed.Telegram}
                  alt="king-twitter"
                  className="group-hover:bg-blue-500 p-6 rounded-sm  w-[5.7rem]"
                />
              </div>
              <span className="bg-white p-2 rounded -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all ease-in duration-200">
                @kingsolana
              </span>
            </a>
          </div>

          <div className="sosmed-instagram">
            <a
              href="https://instagram.com"
              className=" flex items-center group space-x-8"
            >
              <div className="">
                <img
                  src={Sosmed.Instagram}
                  alt="king-twitter"
                  className="group-hover:bg-blue-500 p-6 rounded-sm  w-[5.7rem]"
                />
              </div>
              <span className="bg-white p-2 rounded -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all ease-in duration-200">
                @kingsolana
              </span>
            </a>
          </div>

          <div className="sosmed-discord">
            <a
              href="https://discord.com"
              className=" flex items-center group space-x-8"
            >
              <div className="">
                <img
                  src={Sosmed.Discord}
                  alt="king-twitter"
                  className="group-hover:bg-blue-500 p-6 rounded-sm  w-[5.7rem]"
                />
              </div>
              <span className="bg-white p-2 rounded -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all ease-in duration-200">
                @kingsolana
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
