import { creations } from "../constants/creations-mobile";

export const Creation = () => {
  return (
    <section className="flex flex-col items-center ">
      <h2 className="text-3xl">Our creations</h2>
      <div className="border-2 border-gray p-2 mx-28 my-4">
        <h3 className="text-l">See all</h3>
      </div>

      {creations.map((card) => {
        const { id, image, title } = card;
        return (
          <article
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            key={id}
            className="w-5/6 h-32 m-2 max-w-96"
          >
            <h3 className="text-white text-3xl ">{title}</h3>
          </article>
        );
      })}
    </section>
  );
};
