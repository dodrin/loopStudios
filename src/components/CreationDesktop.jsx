import { creationsDesktop } from "../constants/creationsDesktop";

export const CreationsDesktop = () => {
  return (
    <section
      className="flex flex-col items-center m-5 md:pt-8"
      id="creation-desktop"
    >
      <div className="flex items-center justify-between mx-20 my-10">
        <h2 className="text-3xl">Our creations</h2>
        <div className="w-48 border-2 border-[#8c8c8c] p-2 my-2 mr-10 hover:bg-black hover:text-white ease-in-out duration-300">
          <h3 className="see-all text-l">See all</h3>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-6 m-20 mb-32">
        {creationsDesktop.map((card) => {
          const { id, image, title } = card;
          return (
            <article
              key={id}
              className="relative my-3 cursor-pointer"
            >
              <div className="relative isolate overflow-hidden">
                <img src={image} alt={`creation-card-${title}`} className="w-full"/>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/10 transition duration-300 ease-in-out hover:via-zinc-900/50 hover:delay-300"></div>
              </div>
              <h3 className="z-10 text-white text-2xl absolute bottom-0 pl-4 pb-4 w-36 text-left">
                {title}
              </h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};
