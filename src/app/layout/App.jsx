import React from "react";
import { Route, Routes } from "react-router-dom";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<Layout />}>
          <Route path="events" element={<EventDashboard />} />
          <Route path="events/:id" element={<EventDetailedPage />} />
          <Route path="createEvent" element={<EventForm />} />
          <Route path="manage" element={<EventForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
