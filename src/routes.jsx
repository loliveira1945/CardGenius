import { BrowserRouter, Routes, Route } from "react-router-dom";
import Options from './pages/Options';
import Form from './pages/Form';

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Options />}>
          <Route index element={<Options />} />
          <Route path="initial" element={<Options />} />
        </Route>

        <Route path="formCard" element={<Form />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default AppRoutes;