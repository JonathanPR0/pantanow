function Numbers({ values }) {
  return (
    <section className="flex items-center flex-col md:flex-row w-full mt-12 md:mt-8 py-10 px-0 md:px-8 bg-primaryColors-100 rounded-[20px] absolute left-0 gap-16 md:gap-12 border border-primaryColors-300">
      {values.map(({ title, subtitle }) => (
        <div key={title}>
          <h3 className="text-5xl font-bold text-secondaryColors-500 min-w-full whitespace-nowrap">
            {title}
          </h3>
          <p className="text-base text-primaryColors-500">{subtitle}</p>
        </div>
      ))}
    </section>
  );
}
export default Numbers;
