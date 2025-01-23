import { Route, Routes } from "react-router";
import MainView from "./components/MainView/Layout";
import UserDashboardLayout from "./components/DashboardView/Layout";
import UserDashboard from "./pages/UserDashboard/Dashboard";
import UserList from "./pages/Admin/UserList";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import UserContextProvider from "./context/UserContex";
import ProtectedRoute from "./components/Common/ProtectedRoute";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<MainView />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginSignup />} />
          <Route path="register" element={<LoginSignup />} />
        </Route>

        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={["User"]}>
              <UserDashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <UserDashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="user-list" element={<UserList />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
