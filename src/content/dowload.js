import iphone from "../assets/iPhone.png";
import Playstore from "../assets/playstore.png";
import Appstore from "../assets/appstore.png";

const Download = () => {
  return (
    <div className="h-80" style={{ background: "#FEC72C", overflow: "hidden" }}>
      <main className="flex justify-between mx-60 items-start">
        <div className="hidden 2xl:block mt-5">
          <p className="mb-1 font-bold text-2xl text-center">Scan Here</p>
          <div className=" border-4 border-black p-3 rounded">
            <img
              src="https://cdn.discordapp.com/attachments/1063427855184310293/1083103904260161556/image.png"
              alt="iphone"
              style={{ height: "12rem", top: "-2rem", right: 0 }}
            />
          </div>
        </div>
        <section className="self-center max-w-xl ">
          <h1 className="text-2xl font-semibold text-[#1d1d1d] mb-6">
            Download Our App
          </h1>
          <p className="text-slate-900">
            "Have you ever struggled to get the products you want? Don't worry,
            with Hackbid, you can participate in the bidding process and win
            your dream products at an affordable price."
          </p>
          <section className="mt-9">
            <button>
              <img src={Playstore} alt="playstore" className="h-12" />
            </button>
            <button>
              <img src={Appstore} alt="playstore" className="h-12" />
            </button>
          </section>
        </section>
        <img
          src={iphone}
          alt="iphone"
          style={{ height: "25rem", top: "-2rem", right: 0 }}
        />
      </main>
    </div>
  );
};
export default Download;
