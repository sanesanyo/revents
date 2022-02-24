import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import Sandbox from "../../features/sandbox/Sandbox";
import Layout from "./Layout";
import Qrcode from "./Qrcode";

function App() {
  const { key } = useLocation();

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<Layout />}>
          <Route path="events" element={<EventDashboard />} />
          <Route path="sandbox" element={<Sandbox />} />
          <Route
            path="qrcode"
            element={<Qrcode constraints={{ facingMode: "environment" }} />}
          />
          <Route path="events/:id" element={<EventDetailedPage />} />
          <Route path="createEvent" element={<EventForm />} key={key} />
          <Route path="manage/:id" element={<EventForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
