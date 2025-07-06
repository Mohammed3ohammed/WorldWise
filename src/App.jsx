import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./contexts/FakeAuthContext";
import CityList from "./components/City/CityList";
import City from './components/City/City'
import CountriesList from './components/Country/CountryList';
import Form from "./components/Form/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import SpinnerFullPage from './components/Spinner/SpinnerFullPage';
import ProtectedRoute from './pages/ProtectedRoute'

  const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
  const Product = lazy(() => import("./pages/Product/Product"));
  const Pricing = lazy(() => import("./pages/Pricing"));
  const AppLayout = lazy(() => import("./pages/AppLayout"));
  const PageNotfound = lazy( () => import('./pages/PageNotFound'));



 function App() {
  return (
        <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
        
        <Routes>
        <Route  index element={<Homepage />}  />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
          
          <Route index element={<Navigate replace to="cities" />} />
        <Route path="cities" element={<CityList  />} />
        <Route path="cities/:id" element={<City />} />
        <Route path="countries" element={<CountriesList  />} />
        <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotfound />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
    </CitiesProvider>
        </AuthProvider>
  )
}

export default App; 