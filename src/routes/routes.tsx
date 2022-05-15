import React from "react";
import { MainPage, MachineTuring } from "../pages";

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
    path: '/first',
    id: 'first',
    component: <MachineTuring />,
    title: 'Машина Тюрінга',
  },
];
