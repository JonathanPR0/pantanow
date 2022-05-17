import Numbers from './Numbers';

function Main({ body }) {
  return (
    <main
      className="flex flex-col items-center bg-primaryColors-300"
      id={body.id}
    >
      {/* <img
        src={body.img.src}
        alt={body.img.alt}
        className="w-screen h-[40vh] object-cover mt-16"
      /> */}
      <div
        className="w-screen h-[40vh] mt-16 bg-fixed bg-bottom bg-cover"
        style={{ backgroundImage: `url(${body.img.src})` }}
      ></div>
      <div className="mx-6 mt-6 text-center relative pb-[250px] top-0">
        <h1 className="text-4xl font-bold text-brandGreen mb-6">
          {body.title}
        </h1>
        <p className="text-lg">{body.text}</p>
        <Numbers values={body.values} />
      </div>
    </main>
  );
}
export default Main;
