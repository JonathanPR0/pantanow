function WhatIs({ body }) {
  return (
    <section
      className="flex justify-center flex-col lg:max-w-5xl md:max-w-4xl w-full mx-auto mt-[300px] md:mt-[150px] text-left px-6 pb-12"
      id={body.id}
    >
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <span className="text-primaryColors-500 uppercase text-base mb-4 font-bold">
          {body.sectionName}
        </span>
        <h2 className="text-3xl text-secondaryColors-500 font-bold mb-6">
          {body.title}
        </h2>
        <div className="flex flex-col gap-4 mb-8 text-secondaryColors-400">
          {body.content.map((paragraph) => (
            <>
              {paragraph}
            </>
          ))}
        </div>
        <img
          src={body.img.src}
          alt={body.img.alt}
          className="h-[40vh] min-h-[300px] rounded-[20px] object-cover object-left"
        />
      </div>
    </section>
  );
}
export default WhatIs;
