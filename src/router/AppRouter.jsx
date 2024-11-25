import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* auth: login y registro */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* home: journal */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
