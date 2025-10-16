import { useContext } from "react";
import { Routes, Route } from "react-router";

import NavBar from "./components/NavBar/NavBar";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";

import { UserContext } from "./contexts/UserContext";

const App = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <>
        <NavBar />
        <main>
          <p>Loading...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Routes>
        {/* If there is a user in the context we see that Dashboard; and if no user, we see the landing page. */}
        <Route path="/" element={user ? <Dashboard /> : <Landing />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="*"
          element={
            <main>
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};

export default App;
