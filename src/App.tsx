import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Pnf } from "./pages/Pnf";
import { TestComp } from "./pages/TestComp";
import { Chat } from "./pages/Chat";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/testcomp" element={<TestComp />} />
        <Route path="/schat" element={<Chat />} />
        <Route path="*" element={<Pnf />} />
      </Route>
    </Routes>
  );
}
