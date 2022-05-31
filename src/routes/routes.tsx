import React from "react";
import { MainPage, MachineTuring, BasicConcepts, MNR, NormalAlgorithms, SystemsOfPost } from "../pages";

export interface IRoute {
  path: string;
  id: string;
  component: any;
  title: string;
}

export const ROUTES: IRoute[] = [
  {
    path: '/',
    id: 'main',
    component: <MainPage />,
    title: 'Теорія алгоритмів',
  },
  {
    path: '/turingMachine',
    id: 'turing-machine',
    component: <MachineTuring />,
    title: 'Машина Тюрінга',
  },
  {
    path: '/basicConcepts',
    id: 'basic-concepts',
    component: <BasicConcepts />,
    title: 'Основні поняття',
  },
  {
    path: '/mnrProgram',
    id: 'mnr-program',
    component: <MNR />,
    title: 'МНР програма',
  },
  {
    path: '/normalAlgorithms',
    id: 'normal-algorithms',
    component: <NormalAlgorithms />,
    title: 'Нормальні алгоритми',
  },
  {
    path: '/systemsOfPost',
    id: 'systems-of-posts',
    component: <SystemsOfPost />,
    title: 'Системи Поста',
  },
];
