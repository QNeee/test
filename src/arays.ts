import opennes from "./images/openess.svg";
import responsibility from "./images/responsibility.svg";
import innovation from "./images/innovation.svg";
import quality from "./images/quality.svg";
import lviv from "./images/lviv.jpg";
import zhytomir from "./images/zhytomir.jpg";
import pivne from "./images/pivne.jpg";
import herson from "./images/herson.jpg";
import zaporizhya from "./images/zaporzhya.jpg";
interface IArray {
  icon: string;
  name: string;
  desc: string;
  date?: string;
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
export const aboutAray: IArray[] = [
  {
    icon: opennes,
    name: "Openness",
    desc: "to the world, people, new ideas and projects",
  },
  {
    icon: responsibility,
    name: "Responsibility",
    desc: "we are aware that the results of our work have an impact on our lives and the lives of future generations",
  },
  {
    icon: innovation,
    name: "Innovation",
    desc: "we use the latest technology to implement non-standard solutions",
  },
  {
    icon: quality,
    name: "Quality",
    desc: "we do not strive to be the first among others, but we want to be the best in our business",
  },
];
