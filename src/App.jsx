import {useState} from "react";

import fk from "./static/icon-facebook.svg";
import insta from "./static/icon-instagram.svg";
import tw from "./static/icon-twitter.svg";
import yt from "./static/icon-youtube.svg";
import down from "./static/icon-down.svg";
import up from "./static/icon-up.svg";

function App() {
const [darkMode, setDarkMode] = useState(false);

const handleModeChange = (e) => {
  setDarkMode(e.target.checked);
};

return (
  <div className={darkMode && "dark"}>
    <div className="text-slate-400 dark:text-slate-300  dark:bg-darkbg-dark pb-12">
      <div className="bg-bg dark:bg-slate-700 pb-40">
        <div className="container py-9 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
              Social Media Dashboard
            </h1>
            <span className="text-sm">Yotal Followers : 12.3456</span>
          </div>
          <div className="flex  items-center">
            <label
              htmlFor="checkbox"
              className="font-semibold mr-2 cursor-pointer">
              Dark Mode
            </label>
              <input
              className="transition-all  appearance-none w-11 h-5 dark:bg-slate-500 bg-gray-200 rounded-full relative 
              after:absolute after:w-3 after:transition-all after:h-3 after:bg-gray-50 after:rounded-full after:top-1  after:left-1 checked:after:translate-x-6"
                id="checkbox"
                type="checkbox"
                onChange={handleModeChange}
              />
          </div>
        </div>
      </div>
      <div className="container -mt-40  ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 ">
          {/* card  */}
          <div className="card before:bg-facebook ">
            <div className="flex items-center justify-center gap-1 pb-6">
              <span className="text-facebook">
              <img src={fk} alt="" srcset="" />
              </span>
              <span className="text-sm">@abcd</span>
            </div>
            <h2 className=" text-6xl font-bold text-slate-800 dark:text-white ">
              1987
            </h2>
            <p className="font-medium uppercase tracking-[0.3em]">
              Followers
            </p>
            <div className=" font-semibold flex items-center justify-center gap-1 pt-6 text-maingreen">
              <span>
              <img src={up} alt="" srcset="" />
              </span>
              <span>Today</span>
            </div>
          </div>
          {/* card  */}
          <div className="card before:bg-twitter">
            <div className="flex items-center justify-center gap-1 pb-6">
              <span className="text-facebook">
              <img src={tw} alt="" srcset="" />
              </span>
              <span className="text-sm">@abcd</span>
            </div>
            <h2 className=" text-6xl font-bold text-slate-800 dark:text-white ">
              1987
            </h2>
            <p className=" font-medium uppercase tracking-[0.3em]">
              Followers
            </p>
            <div className=" font-semibold flex items-center justify-center gap-1 pt-6 text-maingreen">
              <span>
              <img src={up} alt="" srcset="" />
              </span>
              <span>Today</span>
            </div>
          </div>
          {/* card  */}
          <div className="card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-600 ">
            <div className="flex items-center justify-center gap-1 pb-6">
              <span className="text-facebook">
              <img src={insta} alt="" srcset="" />
              </span>
              <span className="text-sm">@abcd</span>
            </div>
            <h2 className=" text-6xl font-bold text-slate-800 dark:text-white ">
              1987
            </h2>
            <p className=" font-medium uppercase tracking-[0.3em]">
              Followers
            </p>
            <div className="font-semibold flex items-center justify-center gap-1 pt-6 text-maingreen">
              <span>
              <img src={up} alt="" srcset="" />
              </span>
              <span>Today</span>
            </div>
          </div>
          {/* card  */}
          <div className="card before:bg-rose-700">
            <div className="flex items-center justify-center gap-1 pb-6">
              <span className="text-facebook">
              <img src={yt} alt="" srcset="" />
              </span>
              <span className="text-sm">@abcd</span>
            </div>
            <h2 className="text-6xl font-bold text-slate-800 dark:text-white ">
              1987
            </h2>
            <p className="font-medium uppercase tracking-[0.3em]">
              Followers
            </p>
            <div className="font-semibold flex items-center justify-center gap-1 pt-6 text-rose-700">
              <span>
              <img src={down} alt="" srcset="" />
              </span>
              <span>Today</span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold"> Overview - Today </h2>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 mt-6 ">
            {Array(4)
              .fill(" ")
              .map((el) => (
                <div className="card-sm">
                  <div className="flex items-center justify-between">
                    <h4 className=" font-bold">Pages Views</h4>
                    <img src={fk} alt="" srcset="" />
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <h3 className=" font-black text-2xl text-slate-800 dark:text-white">
                      {" "}
                      101
                    </h3>
                    <div className="flex items-center gap-1 text-maingreen text-sm">
                      <span>
                      <img src={up} alt="" srcset="" />
                      </span>
                      <span>300%</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
}


export default App;
