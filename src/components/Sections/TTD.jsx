import React from 'react';

const TTD = ({ body, children }) => {
  return (
    <section
      className={`flex justify-center items-center flex-col lg:max-w-5xl md:max-w-4xl w-full text-center px-6 py-12 ${body.background}`}
      id={body.id}
    >
      <span className="text-primaryColors-500 uppercase text-base mb-4 font-bold">
        {body.sectionName}
      </span>
      <h2 className="text-3xl text-secondaryColors-500 font-bold mb-6">
        {body.title}
      </h2>
      <div className="flex flex-col gap-4 mb-8 text-left text-base ">
        {body.content.map((paragraph, i) => (
          <p className="text-base" key={i}>
            {paragraph}
          </p>
        ))}
      </div>
      {children}
    </section>
  );
};

export default TTD;
