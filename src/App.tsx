import { Navbar } from './components/Navigation';

import type { RouteObject } from 'react-router-dom';
import { Outlet, Link, useRoutes } from 'react-router-dom';
import FormsPage from './pages/FormsPage';
import DashboardPage from './pages/DashboardPage';
import { Container } from '@mui/material';

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
              path: 'new',
              element: <FormsPage showFormEditor={true} />,
            },
            {
              path: ':formId',
              element: <FormsPage showFormEditor={true} />,
            },
            {
              path: ':formId/data',
              element: <Outlet />,
              children: [
                {
                  path: 'new',
                  element: <FormsPage showDataEditor={true} />,
                },
                {
                  path: ':dataId',
                  element: <FormsPage showDataEditor={true} />,
                },
              ],
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
      <Container maxWidth='lg'>{element}</Container>
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
