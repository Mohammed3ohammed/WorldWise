import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/FakeAuthContext";
import AppLayout from './pages/AppLayout';
import CityList from "./components/CityList";
import CountriesList from './components/CountryList';
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";



 function App() {
  return (
    <CitiesProvider>
    <AuthProvider>
          <BrowserRouter>
      <Routes>
        <Route  index element={<Homepage />}  />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
        <Route index element={<CityList  />} />
        <Route path="cities" element={<CityList  />} />
        <Route path="countries" element={<CountriesList  />} />
        <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </CitiesProvider>
  )
}

export default App; 