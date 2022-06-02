import pantanal from './pantanal.jpg';
import whatIsImage from './what-is.jpg';
import BarChart from '../components/Charts/BarChart';
import Table from '../components/Table'

const template = {
  links: [
    { name: 'Início', href: '#start' },
    { name: 'O que é?', href: '#what-is' },
    { name: 'Importância', href: '#importance' },
    { name: 'Queimadas', href: '#fires' },
    { name: 'Como ajudar?', href: '#howToHelp' },

  ],
  main: {
    img: {
      src: pantanal,
    },
    title: 'Pequeno em território, gigante em natureza',
    text: 'O Pantanal, apesar de ser o menor bioma do Brasil, traz uma riquíssima fauna e flora',
    values: [
      { title: '+150 mil', subtitle: 'Quilômetros quadrados de extensão' },
      { title: '+970', subtitle: 'Espécies de animais' },
      { title: '+2000', subtitle: 'Espécies de plantas' },
    ],
    id: '#start',
  },
  whatIs: {
    sectionName: 'O que é?',
    title: 'Maior planície alagada do mundo',
    content: [
      <p className="text-base">O Pantanal <strong>ocupa aproximadamente 2%</strong> do Território Nacional. Entretanto é reconhecido como a maior planície de inundação contínua do Planeta Terra.</p>,
      <p className="text-base">Mesmo sendo considerado pequeno em comparação com os outros biomas brasileiros, o Pantanal tem uma área maior que a Grécia, Inglaterra ou Portugal e corresponde a duas vezes ao tamanho do Panamá.</p>,
    ],
    img: {
      src: whatIsImage,
      alt: 'vista de um entardecer próxima às áreas alagadas do Pantanal',
    },
    id: '#what-is',
  },
  importance: {
    sectionName: 'Importância',
    title: 'Fauna e flora',
    content: [
      <p className="text-base">Pela sua enorme biodiversidade, o Pantanal é reconhecido Patrimônio Nacional pela Constituição Federal e considerado Reserva da Biosfera e Patrimônio Natural da Humanidade pela Unesco, o que não impede a crescente <strong>desflorestação e destruição</strong>.</p>,
      <p className="text-base">A presença de uma <strong>grande diversidade de plantas e animais</strong>, como mamíferos, anfíbios, répteis, aves e insetos se deve, em parte, por sua localização privilegiada. Porém, por causa de sua destruição, há diversas espécies que estão sendo ameaçadas de extinção, tais como, a onça-pintada e a arara-azul. Portanto, se não tivermos cuidado pode ser que ocorra um dano irreparável ao bioma.</p>,
    ],
    chart: {
      label: 'Espécies presente no Pantanal',
      data: {
        labels: ['Mamíferos', 'Anfíbios', 'Flora', 'Peixes', 'Aves', 'Répteis'],
        datasets: [
          {
            data: [132, 35, 1197, 263, 463, 85],
            backgroundColor: [
              'rgb(171,209,198)',
              '#B3E8CA',
              '#ABDEB3',
              '#B3E8E8',
              '#ABD0DE',
              '#71D9BB',
            ],
            hoverOffset: 4,
          },
        ],
      },
      source: {
        title: 'Fonte: IBGE(2018)',
        src: 'https://educa.ibge.gov.br/jovens/conheca-o-brasil/territorio/18307-biomas-brasileiros.html',
      },
    },
    background: 'bg-primaryColors-100',
    id: '#importance',
  },
  fires: {
    sectionName: 'Queimadas',
    title: 'Pantanal em chamas',
    content: [
      <p className="text-base">Em 2020, até o mês de setembro, o fogo já tinha consumido mais de <strong>17.500 km²</strong> de mata, o equivalente a mais de 10% da área do total de um dos biomas mais importantes do mundo. E quase <strong>60%</strong> dos focos de incêndios no Pantanal foram provocados por <strong>ações humanas</strong>.</p>,
    ],
    chart: {
      source: {
        title: 'Fonte: INPE',
        src: 'https://queimadas.dgi.inpe.br/queimadas/portal-static/estatisticas_estados/',
      },
      data: {
        labels: [
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
          '2021',
        ],
        datasets: [
          {
            label: 'Focos de queimadas entre 2011 e 2021',
            data: [
              3532, 7447, 3396, 1567, 4458, 5184, 5773, 1691, 10025, 22116,
              8258,
            ],
            fill: true,
            borderColor: 'rgb(255,186,124)',
          },
        ],
      },
    },
    background: 'bg-complementaryColors-300',
    id: '#fires',
  },
  howToHelp: {
    sectionName: 'Como ajudar?',
    title: 'Salve o Pantanal',
    content: [
      <p className="text-base">O pantanal é um lindo bioma que compõe parte do território brasileiro, e não podemos deixar que esta ampla riqueza seja destruída. Portanto, vamos ver algumas formas de protegê-lo.</p>,
    ],
    accordion: [
      {
        title: "Contribua com organizações que defendem o bioma.",
        content: "Há diversas organizações que atuam diretamente no combate contra as queimadas e ajudam os animais que sofrem pela seca, caça e contrabandos na região. Sendo assim, uma forma de ajudar a cuidar desse belo bioma é apoiando uma dessas organizações."
      },
      {
        title: "Participe de iniciativas para a proteção do meio ambiente.",
        content: "Busque na sua cidade por projetos de reflorestamento, coletas de lixo e conscientização ambiental, por exemplo. Além disso, reduzir o consumo, reciclar e reutilizar são outros exemplos de ações que podem ser feitas para ajudar não só o pantanal, mas também outros biomas."
      },
      {
        title: "Fiscalize as ações das autoridades.",
        content: "Como um governo democrático, podemos fiscalizar as ações tomadas pelo poder público, garantindo que ele tome decisões que sejam favoráveis ao meio ambiente."
      },
      {
        title: "Divulgue!",
        content: "Com o passar do tempo, o número de pesquisas sobre as queimadas no Pantanal diminuiu consideravelmente. Portanto, além de estarmos informados sobre esse tema, também precisamos compartilhar com outros. Assim podemos prevenir problemas futuros."
      },
    ],
    background: 'bg-primaryColors-200',
    id: '#howToHelp',
  },
  cards: [
    {
      title: 'Perda de vegetação',
      content:
        <p className="text-base text-left text-secondaryColors-400">Em 2020, segundo o Instuto Nacional de Pesquisas do Pantanal (INPP), o bioma viu mais de <strong>23 mil km²</strong> serem consumidos pelas chamas, um aumento de mais de 1000%, quando comparada aos valores de 2000 a 2018 juntos.</p>,
      chart: (
        <BarChart
          chartData={{
            labels: ['2000 a 2018', '2020'],
            datasets: [
              {
                label: 'Perda acumulada (em km²) de vegetação no Pantanal',
                data: [2100, 23000],
                backgroundColor: [
                  'rgba(228, 144, 82, 0.2)',
                  'rgba(255,186,124, 0.2)',
                ],
                borderColor: ['rgb(228, 144, 82)', 'rgb(255,186,124)'],
                borderWidth: 1,
              },
            ],
          }}
        />
      ),
    },
    {
      title: 'Espécies de animais afetadas',
      content:
        <p className="text-base text-left text-secondaryColors-400">As queimadas que ocorreram no Pantanal em 2020 afetaram pelo menos <strong>65 milhões</strong> de animais vertebrados nativos e <strong>4 bilhões</strong> de invertebrados, com base nas densidades de espécies conhecidas.</p>,
    },
    {
      title: 'Incêndios por bioma em 2020',
      content:
        <p className="text-base text-left text-secondaryColors-400">Em 2020, as queimadas no Pantanal, em área incendiada (mil km²), tiveram um aumento de <strong>154%</strong>, quando comparada ao ano de 2019.</p>,
      chart: <Table />,
      source: {
        title: 'Fonte: INPE',
        src: 'https://queimadas.dgi.inpe.br/queimadas/aq1km/',
      },

    },
  ],
};

export default template;
