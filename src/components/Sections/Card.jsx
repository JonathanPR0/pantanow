import React from 'react';

const Card = ({ body, children }) => {
  return (
    <div className="flex justify-center flex-col w-full p-6 rounded-md border border-primaryColors-300 gap-4">
      <h3 className="text-2xl text-secondaryColors-500 font-bold">
        {body.title}
      </h3>
      <p className="text-base text-left">{body.content}</p>
      {children ? children : null}
    </div>
  );
};

export default Card;
