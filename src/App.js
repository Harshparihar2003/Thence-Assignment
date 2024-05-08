import {BrowserRouter, Routes, Route} from "react-router-dom"
import Registration from "./pages/Registration";

import Success from "./pages/Success";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout/>}>
        <Route index element= {<Home/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="success" element={<Success/>}/>
        </Route>
        </Routes>
      </BrowserRouter>     
    </>
  );
}

export default App;
