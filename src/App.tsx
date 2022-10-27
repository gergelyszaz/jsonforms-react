import './App.css';

import { Navbar } from './components/Navigation';

import type { RouteObject } from 'react-router-dom';
import { Outlet, Link, useRoutes } from 'react-router-dom';
import FormsPage from './pages/FormsPage';
import { DataEditorPage } from './pages/DataEditorPage';
import DashboardPage from './pages/DashboardPage';

export default function App() {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Outlet />,
      children: [
        { index: true, element: <DashboardPage /> },
        {
          path: '/dashboard',
          element: <DashboardPage />,
        },
        {
          path: '/forms',
          element: <Outlet />,
          children: [
            { index: true, element: <FormsPage /> },
            {
              path: '/forms/data/:dataId',
              element: <DataEditorPage />,
            },
            {
              path: '/forms/:formId',
              element: <DataEditorPage />,
            },
          ],
        },
        { path: '*', element: <NoMatch /> },
      ],
    },
  ];

  let element = useRoutes(routes);

  return (
    <>
      <Navbar />
      {element}
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
}
