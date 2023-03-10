import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
