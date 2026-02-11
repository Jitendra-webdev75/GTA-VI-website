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
        }
      },
    });
  }, []);

  useGSAP(() => {
    if (!content) return;

    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      rotate: 0,
      scale: 1.1,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      rotate: 0,
      scale: 1.1,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", (e) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".imgDiv .gtaText", {
        x: `${moveX * 0.4}%`,
      });
      gsap.to(".imgDiv .sky", {
        x: moveX,
      });

      gsap.to(".imgDiv .bg", {
        x: moveX,
      });
    });
  }, [content]);
  return (
    <>
      <div
        className="svg flex items-center justify-center fixed top-0 left-0 z-10 w-full h-screen overflow-hidden bg-black
      "
      >
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
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
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
            <div className="  imgDiv relative h-full w-full overflow-hidden ">
              <img
                className="sky absolute top-0 left-0 h-full w-full object-cover scale-[3] rotate-[-5deg] "
                src="./sky.png"
                alt=""
              />
              <img
                className="bg absolute top-0 left-0 h-full w-full object-cover scale-[3] rotate-[-8deg]"
                src="./bg.png"
                alt=""
              />

              <img
                className="girl absolute   -bottom-[60%] left-1/2 scale-[0.65] -translate-x-1/2 z-10 "
                src="./girlbg.png"
                alt=""
              />

              <div className="gtaText flex flex-col absolute top-0  left-1/2     -translate-x-1/2 text-zinc-50  text-[7rem] leading-none gap-3 ">
                <h1 className="-ml-20">grand</h1>
                <h1 className="ml-15">theft</h1>
                <h1 className="-ml-20">auto</h1>
              </div>
            </div>

            <div className="bottmbar w-full px-10 py-10 absolute  left-0 bottom-0  bg-gradient-to-t from-black to-transparent z-20">
              <div className="flex items-center  text-amber-50 font-sans  gap-2">
                <i className="ri-arrow-down-line text-2xl"></i>
                <div className="scroll font-semibold text-xl ">Scroll down</div>
              </div>

              <img
                className="absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          <div className="page2 h-screen w-full flex items-center justify-center bg-black p-20 overflow-hidden">
            <div className="cont h-[89%] w-full flex ">
              <div className="lefcont relative w-1/2 h-full">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.9]"
                  src="imag.png"
                  alt=""
                />
              </div>
              <div className="rightcont  w-1/2 text-zinc-50 ">
                <h1 className="text-6xl">Still Running,</h1>
                <h1 className="text-6xl">Not Hunting</h1>
                <p className="font-sans text-xl mt-4">
                  Grand Theft Auto VI (GTA 6) is an upcoming open-world action
                  game developed by Rockstar Games. It is set in the modern-day
                  Vice City, inspired by Miami, and features two main
                  characters, Lucia and Jason.
                </p>
                <p className="font-sans text-xl mt-2">
                  The game promises a massive, detailed world with improved
                  graphics, smarter AI, and realistic gameplay mechanics. GTA 6
                  is expected to release in 2025 for PlayStation 5 and Xbox
                  Series X/S.
                </p>

                <button
                  className="bg-yellow-400 text-zinc-900
                 p-5 text-2xl mt-3 hover:shadow-lg hover:shadow-amber-50 cursor-pointer active:scale-95"
                >
                  Download now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
