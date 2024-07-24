import './App.css'
import LandingPage from "./pages/landingPage/Landing.tsx";
// import HomePage from "./pages/homePage/home.tsx";
import {Route,Routes,BrowserRouter} from "react-router-dom";
import ContactUsPage from "./pages/contacUsPage/contacUsPage.tsx";
import Login from "./pages/loginPage/Login.tsx";
import Signup from "./pages/signUpPage/Signup.tsx";
import ItemSearch from "./pages/itemSerchPage/ItemSearch.tsx";
// import StoreList from "./pages/storeListPage/StoreList.tsx";

function App() {
  
  return (
      <>

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login/>} />
                  <Route path="/signUp" element={<Signup/>} />
                  <Route path="/landin" element={<LandingPage/>} />
                  <Route path="/home" element={<LandingPage/>} />
                  <Route path="/itemSerch" element={<ItemSearch/>} />
                  <Route path="/contactUs" element={<ContactUsPage/>} />
                  {/*<Route path="/storeList" element={<StoreList/>} />*/}
              </Routes>
          </BrowserRouter>

      </>
  )
}

export default App
