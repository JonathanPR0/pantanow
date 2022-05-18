import React from 'react';

const TTD = ({ body, children }) => {
  return (
    <section
      className={`w-full flex justify-center items-center flex-col text-center px-6 py-12 ${body.background}`}
      id={body.id}
    >
      <div className="w-full md:max-w-3xl lg:max-w-4xl mx-auto">
        <span className="text-primaryColors-500 uppercase text-base mb-4 font-bold">
          {body.sectionName}
        </span>
        <h2 className="text-3xl text-secondaryColors-500 font-bold mb-6">
          {body.title}
        </h2>
        <div className="flex flex-col gap-4 text-left text-base ">
          {body.content.map((paragraph, i) => (
            <p className="text-base" key={i}>
              {paragraph}
            </p>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
};

export default TTD;
