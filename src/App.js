import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const router1 = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Detail />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router1} />;
}

export default App;
