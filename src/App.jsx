import Header from './components/Header';
import Main from './components/Main';
import WhatIs from './components/Sections/WhatIs';
import TTD from './components/Sections/TTD';
import DoughnutChart from './components/Charts/DoughnutChart';
import LineChart from './components/Charts/LineChart';
import Card from './components/Sections/Card';
import AccordionList from './components/AccordionList';
import Footer from './components/Footer';
import template from './assets/template';

function App() {
  return (
    <>
      <Header links={template.links} />
      <Main body={template.main} />
      <WhatIs body={template.whatIs} />
      <TTD body={template.importance}>
        <h3 className="text-2xl text-secondaryColors-500 font-bold text-center mt-8">
          {template.importance.chart.label}
        </h3>
        <DoughnutChart chartData={template.importance.chart.data} />
        <a
          href={template.importance.chart.source.src}
          className="text-[10px] px-10 py-2 bg-primaryColors-300 rounded-md hover:bg-primaryColors-400 transition-colors"
        >
          {template.importance.chart.source.title}
        </a>
      </TTD>
      <TTD body={template.fires}>
        <LineChart chartData={template.fires.chart.data} />
        <a
          href={template.fires.chart.source.src}
          className="text-[10px] px-10 py-2 bg-complementaryColors-500 rounded-md hover:bg-complementaryColors-501 transition-colors"
        >
          {template.fires.chart.source.title}
        </a>
        <div className="flex flex-col md:flex-row gap-5 mt-8 flex-wrap ">
          {template.cards.map((card) => (
            <Card body={card} key={card.title}>
              {card.chart ? card.chart : null}
              {card.source ? <a
                href={card.source.src}
                className="text-[10px] px-10 py-2 bg-complementaryColors-500 rounded-md hover:bg-complementaryColors-501 transition-colors md:max-w-2xl md:self-center"
              >
                {card.source.title}
              </a> : null}
            </Card>
          ))}
        </div>
      </TTD>
      <TTD body={template.howToHelp}>
        <div className="pt-5">{template.howToHelp.accordion.map((body, i) => <AccordionList i={i} body={body} />)}</div>
      </TTD>
      <Footer />
    </>
  );
}

export default App;
