import Home from "./pages/home"
import Services from "./pages/services"
import Lawyers from "./pages/lawyers"
import Footer from "./components/footer"
import Navbar from "./components/nav"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import CompanyRegistration from "./pages/services/registration/company"
import Trademark from "./pages/services/registration/trademark"
import Renewals from "./pages/services/registration/renewals"
import AccountingTaxation from "./pages/services/registration/accounting"
import HireLawyers from "./pages/services/registration/hirelawyers"
import Webservices from "./pages/services/registration/webservices"
import Notfound from "./components/notfound"


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/companyregistration" element={<CompanyRegistration/>}/>
        <Route path="/trademark" element={<Trademark/>}/>
        <Route path="/accounting" element={<AccountingTaxation/>}/>
        <Route path="/hirelawyer" element={<HireLawyers/>}/>
        <Route path="/renewals" element={<Renewals/>}/>
        <Route path="/webservices" element={<Webservices/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
