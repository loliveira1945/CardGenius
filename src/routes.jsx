import { BrowserRouter, Routes, Route } from "react-router-dom";
import Options from './pages/Options';

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Options />}>
          <Route index element={<Options />} />
          <Route path="initial" element={<Options />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default AppRoutes;