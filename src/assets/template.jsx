import pantanal from './pantanal.jpg';
import whatIsImage from './what-is.jpg';
import BarChart from '../components/Charts/BarChart';

const template = {
  links: [
    { name: 'Início', href: '#start' },
    { name: 'O que é?', href: '#what-is' },
    { name: 'Importância', href: '#importance' },
    { name: 'Queimadas', href: '#fires' },
  ],
  main: {
    img: {
      src: pantanal,
    },
    title: 'Pequeno em território, gigante em natureza',
    text: 'O Pantanal, apesar de ser o menor bioma do Brasil, traz uma riquíssima fauna e flora',
    values: [
      { title: '+150 mil', subtitle: 'Quilometros quadrados de extensão' },
      { title: '+970', subtitle: 'Espécies de animais' },
      { title: '+2000', subtitle: 'Espécies de plantas' },
    ],
    id: '#start',
  },
  whatIs: {
    sectionName: 'O que é?',
    title: 'Maior planície alagada do mundo',
    content: [
      'O Pantanal ocupa aproximadamente 2% do Território Nacional. Entretanto, é reconhecido como a maior planície de inundação contínua do Planeta Terra',
      'Apesar de pequeno em comparação com outros biomas brasileiros, o Pantanal tem uma área maior que a Grécia, Inglaterra ou Portugal e corresponde a duas vezes ao tamanho do Panamá.',
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
      'Pela sua enorme biodiversidade o Pantanal é Patrimônio Nacional pela Constituição Federal e considerado Reserva da Biosfera e Patrimônio Natural da Humanidade pela Unesco, o que não impede a crescente desflorestação e destruição',
      'A presença de uma grande diversidade de plantas e animais, como mamíferos, anfíbios, répteis, aves e insetos de devem, em partes por sua localização privilegiada.',
    ],
    chart: {
      label: 'Fauna presente no Pantanal',
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
      'Só em 2020, o fogo já consumiu 17.500 km² de mata, o equivalente a mais de 10% da área do total de um dos biomas mais importantes do mundo. E quase 60% dos focos de incêndios no Pantanal foram provocados por ações humanas',
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
            borderColor: 'rgb(75, 192, 192)',
          },
        ],
      },
      background: 'bg-white',
      id: '#fires',
    },
  },
  cards: [
    {
      title: 'Perda de vegetação',
      content:
        'Em 2020, segundo Instuto Nacional de Pesquisas do Pantanal (INPP), o bioma já viu cerca de 23 mil km² serem consumidos pelas chamas',
      chart: (
        <BarChart
          chartData={{
            labels: ['2000 a 2018', '2020'],
            datasets: [
              {
                label: 'Perda acumulada (em km²) de vegetação no Pantanal',
                data: [2100, 23000],
                backgroundColor: [
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: ['rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
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
        'As queimadas que ocorreram no Pantanal em 2020 afetaram pelo menos 65 milhões de animais vertebrados nativos e 4 bilhões de invertebrados, com base nas densidades de espécies conhecidas.',
    },
  ],
};

export default template;
