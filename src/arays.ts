import lviv from "./images/lviv.jpg";
import zhytomir from "./images/zhytomir.jpg";
import pivne from "./images/pivne.jpg";
import herson from "./images/herson.jpg";
import zaporizhya from "./images/zaporzhya.jpg";
interface IArray {
  icon: string;
  name: string;
  desc: string;
  date: string;
}
interface IFaqArr {
  question: string;
  answer: string;
  isOpen: boolean;
}
export const faqArray: IFaqArr[] = [
  {
    question:
      "How do wind turbines and solar panels work together in a renewable energy system?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    isOpen: true,
  },
  {
    question:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    isOpen: false,
  },
  {
    question:
      "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    isOpen: false,
  },
  {
    question:
      "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    isOpen: false,
  },
  {
    question:
      "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    answer:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
    isOpen: false,
  },
];
export const casesArray: IArray[] = [
  {
    icon: lviv,
    name: "Lviv Region, Radekhiv townPrivate Enterprise “ZAKHIDNYI BUH”",
    desc: "Wind Power for auto field irrigation",
    date: "July 2023",
  },
  {
    icon: zhytomir,
    name: "Zhytomyr cityPrivate Enterprise “Bosch”",
    desc: "Solar Panels for industrial use",
    date: "November 2023",
  },
  {
    icon: pivne,
    name: "Rivne cityPrivate Enterprise “Biotech”",
    desc: "Thermal modules",
    date: "October 2023",
  },
  {
    icon: herson,
    name: "Kherson cityPrivate Enterprise “HealthyFarm”",
    desc: "Wind power",
    date: "September 2021",
  },
  {
    icon: zaporizhya,
    name: "Zaporizhia cityPrivate Enterprise “Biotech”",
    desc: "Mini nuclear stations",
    date: "May 2021",
  },
];
