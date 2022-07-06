import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./Assets/pages/components/Login";
import ResetPassword from "./Assets/pages/components/ResetPassword";
import Dashboard from "./Assets/pages/Dashboard";
import Main from "./Assets/pages/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
                      <Route path="login" element={<LoginReg />} />
                     <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
