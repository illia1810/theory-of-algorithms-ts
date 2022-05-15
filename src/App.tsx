import React from 'react';
import './App.css';
import { PageLayout } from './components';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';

function App() {
  return (
    <Routes>
      {ROUTES.map(({path, id, component, title}) => (
        <Route key={id} path={path} element={
          <PageLayout page={component} headerName={title} />
        } />
      ))}
    </Routes>
  );
}

export default App;
