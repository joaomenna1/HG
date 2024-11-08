interface DataType {
    key: string;
    title: string;
    description: string;
    image?: any;
    animation?: any;
}

const animation1 = require('../../../../../assets/onboarding/analysis-data.json');
const animation2 = require('../../../../../assets/onboarding/heartbeat.json');
const animation3 = require('../../../../../assets/onboarding/report.json');

const DataTextOnboarding = (): DataType[] => {
  
  return [
    {
      key: '3571572',
      title: 'Análise de Dados Vitai',
      description: "Monitore o estado do coração com precisão e segurança, sempre atualizado.",
      image: animation1,
    },
    {
      key: '3571747',
      title: 'Prevenção de Doenças Cardíacas',
      description: 'Utilize tecnologia para prevenir problemas cardíacos e melhorar a qualidade de vida.',
      animation: animation2,
    },
    {
      key: '3571680',
      title: 'Relatórios para Diagnósticos precisos',
      description: 'Obtenha insights detalhados para diagnósticos rápidos e precisos.',
      animation: animation3,
    },
  ];
};

export default DataTextOnboarding;
