import Numbers from './Numbers';

function Main({ body }) {
  return (
    <main
      className="flex flex-col items-center bg-primaryColors-300"
      id={body.id}
    >
      <div
        className="w-screen h-[40vh] mt-16 bg-fixed bg-bottom bg-cover"
        style={{ backgroundImage: `url(${body.img.src})` }}
      ></div>
      <div className="mx-6 md:mx-0 mt-6 text-center relative px-6 pb-[250px] md:pb-[100px] top-0 self-center max-w-full md:max-w-3xl lg:max-w-4xl">
        <div>
          <h1 className="text-4xl font-bold text-brandGreen mb-6 md:max-w-xl lg:max-w-2xl mx-auto w-full">
            {body.title}
          </h1>
          <p className="text-lg w-full md:max-w-xl lg:max-w-2xl mx-auto ">
            {body.text}
          </p>
        </div>
        <Numbers values={body.values} />
      </div>
    </main>
  );
}
export default Main;
