import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/FakeAuthContext";
import AppLayout from './pages/AppLayout';
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountriesList from './components/CountryList';

  const BASE_URL = "http://localhost:9000";

 function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
      alert("There was an error loading data..."); 
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, [])

  return (
    <AuthProvider>
          <BrowserRouter>
      <Routes>
        <Route  index element={<Homepage />}  />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
        <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
        <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
        <Route path="countries" element={<CountriesList cities={cities} isLoading={isLoading} />} />
        <Route path="form" element={<p>Form</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App; 