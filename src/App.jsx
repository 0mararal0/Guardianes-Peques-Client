import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home/Home";
import { NavbarApp } from "./components/NavbarApp/NavbarApp";
import { Footer } from "./components/Footer/Footer";
import { About } from "./pages/About/About";
import { Filter } from "./pages/Filter/Filter";
import { FilterClient } from "./pages/Filter/FilterClient";
import { FilterGuardian } from "./pages/Filter/FilterGuardian";
import { LegalNotice } from "./pages/LegalNotice/LegalNotice";
import { Contact } from "./pages/Contact/Contact";
import { NotFound } from "./pages/NotFound/NotFound";

import { Guardians } from "./pages/Guardians/Guardians";
import { EditGuardian } from "./pages/EditGuardian/EditGuardian";
import { Reservation } from "./pages/Reservation/Reservation";

function App() {
  return (
    <>
      <NavbarApp />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legalNotice" element={<LegalNotice />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/filterClient" element={<FilterClient />} />
          <Route path="/filterClient/" element={<FilterClient />} />
          <Route path="/filterGuardian" element={<FilterGuardian />} />
          <Route path="/guardians" element={<Guardians />} />
          <Route path="/editGuardian/:guardianId" element={<EditGuardian />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
