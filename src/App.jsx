import './App.scss';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    children:[
      {
        path:"/",
        element:<Dashboard/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
    ]
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
