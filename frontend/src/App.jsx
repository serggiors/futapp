import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home';
import { store } from './store';

const { Provider } = store;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // }
]);

function App() {
  return (
    <>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
    </>
  )
}

export default App
