import { IOption } from "./sidebarTypes";

export const SIDEBAR_OPTIONS: Array<IOption> = [
  {
    id: 'basic-concepts',
    redirectRoute: '/basicConcepts',
    activeOnPathes: ['/basicConcepts'],
    optionText: 'Основні поняття',
  },
  {
    id: 'turing-machine',
    redirectRoute: '/turingMachine',
    activeOnPathes: ['/turingMachine'],
    optionText: 'Машина Тюрінга',
  },
  {
    id: 'mnr-program',
    redirectRoute: '/mnrProgram',
    activeOnPathes: ['/mnrProgram'],
    optionText: 'МНР програма',
  },
  {
    id: 'main',
    redirectRoute: '/',
    activeOnPathes: ['/'],
    optionText: 'Головна',
  },
];