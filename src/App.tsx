import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoteFound from "./Components/Chat/NoteFound";
import SingleChat from "./Components/Chat/SingleChat";
import { useAppSelector } from "./Hooks/hooks";
import ContactOfficer from "./Pages/ContactOfficer/ContactOfficer";
import Contract from "./Pages/Contract/Contract";
import Dashbord from "./Pages/DashBord/Dashbord";
import TicketDetails from "./Pages/DashBord/TicketDetails";
import FormHook from "./Pages/formhook";
import Home from "./Pages/Home/Home";
import CheckMail from "./Pages/Login/CheckMail";
import ForgetPassword from "./Pages/Login/ForgetPassword";
import Login from "./Pages/Login/Login";
import Reports from "./Pages/Reports/Reports";
import ReportsDetails from "./Pages/Reports/ReportsDetails";
import { GlobalStyled } from "./styles/GlopleStyled";

function App() {
  const { mainUser } = useAppSelector((state) => state.auth);

  return (
    <>
      <GlobalStyled />
      <ToastContainer />
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}

        {!mainUser ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<Navigate to="/" />} />
            {/* <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/check-email" element={<CheckMail />} /> */}
          </>
        ) : (
          <>
            <Route path="/" element={<Home />}>
              <Route index element={<Reports />} />
              <Route path=":id" element={<ReportsDetails />} />
              {/*<Route path=":id" element={<TicketDetails />} />
              <Route path="site-survey" element={<SiteSurvey />} />
              <Route path="hook" element={<FormHook newData={newData} />} />
              <Route path="utility-bill" element={<UtilityBill />} />
              <Route path="solution" element={<Solution />} />
              <Route path="contract" element={<Contract />} />
              <Route path="project-status" element={<ProjectStatus />} />
              <Route path="contact-officer" element={<ContactOfficer />} />
              <Route path="tracking" element={<Tracking />} />
              <Route path="all-messages" element={<AllMessages />}>
                <Route index element={<NoteFound />} />
                <Route path=":id/:id/:id/:id" element={<SingleChat />} />
              </Route> */}
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
