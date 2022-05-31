import { IOption } from "./sidebarTypes";

export const SIDEBAR_OPTIONS: Array<IOption> = [
  {
    id: 'main',
    redirectRoute: '/',
    activeOnPathes: ['/'],
    optionText: 'Головна',
  },
  {
    id: 'basic-concepts',
    redirectRoute: '/basicConcepts',
    activeOnPathes: ['/basicConcepts'],
    optionText: 'Основні поняття',
  },
  {
    id: 'mnr-program',
    redirectRoute: '/mnrProgram',
    activeOnPathes: ['/mnrProgram'],
    optionText: 'МНР програма',
  },
  {
    id: 'turing-machine',
    redirectRoute: '/turingMachine',
    activeOnPathes: ['/turingMachine'],
    optionText: 'Машина Тюрінга',
  },
  {
    id: 'normal-algorithms',
    redirectRoute: '/normalAlgorithms',
    activeOnPathes: ['/normalAlgorithms'],
    optionText: 'Нормальні алгоритми',
  },
  {
    id: 'systems-of-posts',
    redirectRoute: '/systemsOfPost',
    activeOnPathes: ['/systemsOfPost'],
    optionText: 'Системи Поста',
  },
];