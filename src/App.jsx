
import SignUp from "./signup/Signup.jsx";
import Login from "./login/Login.jsx";
import {RouterProvider, createBrowserRouter} from "react-router-dom";

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <SignUp/>
    },
    {
      path: "/login",
      element: <Login/>
    }
  ])

  return(

    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>

  );
}

export default App
