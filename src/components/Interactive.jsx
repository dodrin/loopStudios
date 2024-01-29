import interactiveImg from "../assets/mobile/image-interactive.jpg";

export const Interactive = () => {
  return (
    <section className="flex flex-col m-12 md:relative md:m-24">
      <img src={interactiveImg} alt="Person-wearing-VR-goggle" className="my-10 max-w-[600px] md:" />

      <div className="mx-3 max-w-[480px] bg-white p-12 md:p-16 md:absolute md:left-1/2 md:top-1/2 md:text-left">
        <h2 className="text-3xl">
          The leader in interactive VR
        </h2>
        <p className="mx-7 my-3 md:mx-0">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};
