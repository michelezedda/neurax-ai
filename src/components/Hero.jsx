import heroImg from "/media/robot.jpg";
import curveLine from "/media/curve-line.webp";
import { Riple } from "react-loading-indicators";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col pt-30 h-[100dvh] ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-2xl text-center text-4xl">
            Explore the possibilities of AI Chatting with <span>NeuraX</span>{" "}
          </h1>
          <img src={curveLine} alt="" />
          <p className="text-center mt-4">
            Unleash the power of AI within NeuraX. Upgrade your productivity
            with NeuraX, the open AI chat app.
          </p>
          <button className="mt-6">GET STARTED</button>
        </div>
        <div className="flex flex-col">
          <div className="my-15 bg-linear-to-t from-purple-300 to-sky-600 rounded-2xl px-[3px] py-[3px] overflow-hidden pb-11">
            <img src={heroImg} alt="robot" className="rounded-2xl" />
          </div>
          <div className="flex flex-row absolute top-243 left-13 bg-cyan-600 rounded rounded-full px-14 py-1 items-center z-5 font-semibold">
            <Riple color="#ffffff" size="small" text="" textColor="#ffffff" />
            <span className="ml-2 text-xl">NeuraX AI is generating</span>
          </div>
          <div className="flex flex-row absolute top-252 left-20 bg-cyan-800 rounded-full h-15 w-86 text-lg z-3"></div>
          <div className="flex flex-row absolute top-262 left-25 bg-cyan-900 rounded-full px-21 py-5 text-lg z-2 w-76 blur-xs"></div>
        </div>

        <div>
          <h3 className="text-3xl text-center">Chat Smarter, Not Harder!</h3>
        </div>
      </div>
    </>
  );
}
