import Header from './components/Header';
import Main from './components/Main';
import WhatIs from './components/Sections/WhatIs';
import TTD from './components/Sections/TTD';
import Card from './components/Sections/Card';
import Footer from './components/Footer';
import template from './assets/template';

function App() {
  return (
    <>
      <Header links={template.links} />
      <Main body={template.main} />
      <WhatIs body={template.whatIs} />
      <TTD body={template.importance}>Gráfico</TTD>
      <TTD body={template.fires}>
        <div className="flex flex-col md:flex-row gap-5">
          {template.cards.map((card) => (
            <Card body={card} key={card.title}>
              {card.chart ? card.chart : null}
            </Card>
          ))}
        </div>
      </TTD>
      <Footer />
    </>
  );
}

export default App;
