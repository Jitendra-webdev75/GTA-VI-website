import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
function App() {
  const [content, setContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".VI-text", {
      rotate: 10,
      ease: "Power4.easeInOut",
      duration: 2,
      transformOrigin: "50% 50%",
    });

    tl.to(".VI-text", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setContent(true);
          this.kill();
          console.log("hello");
        }
      },
    });
  });
  return (
    <>
      <div
        className="svg flex items-center justify-center fixed top-0 left-0 z-10 w-full h-screen overflow-hidden bg-black
      "
      >
        {/* <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg> */}

        <div className=" h-screen w-full flex items-center justify-center bg-black">
          <h1
            className="VI-text text-[30vw] font-black uppercase"
            style={{
              backgroundImage: 'url("/bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            VI
          </h1>
        </div>
      </div>

      {content && (
        <div className="main w-full">
          <div className="landing h-screen w-full ">
            <div className="navbar absolute top-0  w-full  z-20  px-6 py-6 ">
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-[4px]">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-6 h-1 bg-white"></div>
                  <div className="line w-3 h-1 bg-white"></div>
                </div>
                <h1
                  className="text-2xl text-zinc-50 font-bold
                  mt-[-6px] leading-none"
                >
                  Rockstar
                </h1>
              </div>
            </div>
            <div className=" relative imgDiv h-full w-full overflow-hidden ">
              <img
                className="absolute top-0 left-0 h-full w-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute top-0 left-0 h-full w-full object-cover"
                src="./bg.png"
                alt=""
              />

              <img
                className="absolute   -bottom-[60%] left-1/2 scale-[0.65] -translate-x-1/2"
                src="./girlbg.png"
                alt=""
              />
            </div>

            <div className="bottmbar w-full px-10 py-10 absolute  left-0 bottom-0  bg-gradient-to-t from-black to-transparent">
              <div className="flex text-amber-50 font-sans  gap-2">
                <i class="ri-arrow-down-line text-2xl"></i>
                <div className="scroll font-semibold text-xl">Scroll down</div>
              </div>

              <img
                className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
