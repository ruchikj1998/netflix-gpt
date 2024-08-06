import { Provider, useDispatch } from 'react-redux';
import './App.css';
import appStore from './utils/appStore';
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom'
import Browse from './components/Browse'
import Login from './components/Login'
import Header from './components/Header'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/userSlice';

function App() {

  const Main = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const {uid, email, displayName} = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName}));
                console.log('Login');
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, []);

    return (
      <div className="">
        <Header />
        <Outlet />
      </div>
    )
  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />
        }
      ]
    }

  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
