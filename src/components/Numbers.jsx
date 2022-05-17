function Numbers({ values }) {
  return (
    <section className="flex items-center justify-center flex-col md:flex-row lg:max-w-5xl md:max-w-4xl w-full mt-[50px] py-10 bg-primaryColors-100 rounded-[20px] absolute gap-16 border border-primaryColors-300">
      {values.map(({ title, subtitle }) => (
        <div key={title}>
          <h3 className="text-5xl font-bold text-secondaryColors-500">
            {title}
          </h3>
          <p className="text-base text-primaryColors-500">{subtitle}</p>
        </div>
      ))}
    </section>
  );
}
export default Numbers;
