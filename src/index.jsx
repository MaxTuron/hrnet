import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import Accueil from "./pages/Accueil";
import EmployeeList from "./pages/EmployeeList";
import { store } from './store';
import Error404 from "./pages/Error404"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="employeelist" element={<EmployeeList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);