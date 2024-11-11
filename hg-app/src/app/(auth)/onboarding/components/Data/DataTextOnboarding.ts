interface DataType {
    key: string;
    title: string;
    description: string;
    image?: any;
    animation?: any;
}

const animation1 = require('../../../../../assets/onboarding/analysis.json');
const animation2 = require('../../../../../assets/onboarding/heartbeat.json');
const animation3 = require('../../../../../assets/onboarding/report.json');

const DataTextOnboarding = (): DataType[] => {
  
  return [
    {
      key: '3571572',
      title: 'Análise de Dados Vital',
      description: "Monitore o estado do coração com precisão e segurança, sempre atualizado.",
      animation: animation1,
    },
    {
      key: '3571747',
      title: 'Prevenção',
      description: 'Utilize tecnologia para prevenir problemas cardíacos e melhorar a qualidade de vida.',
      animation: animation2,
    },
    {
      key: '3571680',
      title: 'Diagnósticos precisos',
      description: 'Obtenha insights detalhados para diagnósticos rápidos e precisos.',
      animation: animation3,
    },
  ];
};

export default DataTextOnboarding;