import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "Use",
    className: "text-100",
  },
  {
    text: "a",
    className: "text-100",
  },
  {
    text: "tecnologia",
    className: "text-100",
  },
  {
    text: "a",
    className: "text-100",
  },
  {
    text: "favor",
    className: "text-100",
  },
  {
    text: "do",
    className: "text-100",
  },
  {
    text: "SEU",
    className: "text-primary",
  },
  {
    text: "NEGÓCIO",
    className: "text-primary",
  },
  {
    text: "!",
    className: "text-100",
  },
];

const Homepage = () => {
  return (
    <main>
      <section className="bg-1000 h-[700px] text-white  cursor-default">
        <div className=" h-full w-full bg0black bg-grid-white/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-1000 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <div className="grid grid-cols-1 container">
            <div className="flex flex-col items-center justify-start space-y-5">
              <h1 className="text-lg md:text-2xl text-center">
                <span className="text-primary">TCB</span> Fullstack Development
              </h1>
              <TypewriterEffect words={words} />
            </div>
            <div className="mt-10 container">
              <TextGenerateEffect
                words="A tecnologia move o mundo - Steve Jobs"
                className=" text-center bg-100 rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
