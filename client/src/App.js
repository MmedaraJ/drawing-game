import React, {useEffect} from 'react';
import {
  useRoutes,
  useLocation
} from "react-router-dom";
import Main from './Main';

function App() {
  const location = useLocation();

  const routes = useRoutes([
    { path: '/', element: (<div className='App'><Main/></div>) },
  ]);

  return routes;
}

export default App;