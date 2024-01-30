import { creations } from "../constants/creationsMobile";

export const Creation = () => {
  return (
    <section
      className="flex flex-col items-center m-5 md:pt-8"
      id="creation-mobile"
    >
      <h2 className="text-3xl mb-5">Our creations</h2>

      {creations.map((card) => {
        const { id, image, title } = card;
        return (
          <article
            key={id}
            className="relative m-6 custom-shadow cursor-pointer"
          >
            <div className="relative isolate overflow-hidden">
              <img src={image} alt={`creation-card-${title}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/10 transition duration-300 ease-in-out hover:via-zinc-900/50 hover:delay-300"></div>
            </div>
            <h3 className="text-white text-2xl absolute bottom-0 pl-4 pb-4 w-36 text-left">
              {title}
            </h3>
          </article>
        );
      })}

      <div className="cursor-pointer border-2 border-[#8c8c8c] p-2 px-12 my-4 hover:bg-black hover:text-white ease-in-out duration-300">
        <h3 className="see-all text-l ">See all</h3>
      </div>
    </section>
  );
};
