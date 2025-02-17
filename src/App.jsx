
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./Components/Utils/appStore";
import { createBrowserRouter, RouterProvider , BrowserRouter as Router } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watchpage from "./Components/WatchPage";
import Demo from "./Components/Demo";

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body />,
    children : [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
    ]
  }
])

function App() {
  return (
    <div>
     <Provider store={appStore}>
      <Header/>
      <RouterProvider router={appRouter} /> 
     </Provider>
    </div>
  );
}

export default App;
