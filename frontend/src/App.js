import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants.js";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/About.scss";
import "./styles/Services.scss";
import "./styles/Contact.scss";
import "./styles/Login.scss";
import "./styles/Register.scss";
import "./styles/Footer.scss";
import "./styles/Projects.scss";
import "./styles/FounderProfile.scss";
import "./styles/Courses.scss";
import "./styles/NotFound.scss";
import "./styles/CoursePage.scss";
import "./styles/ForgetPassword.scss";
import "./styles/CreateCourse.scss";
import "./styles/Users.scss";
import "./styles/CourseModal.scss";
import "./styles/Profile.scss";
import "./styles/UpdateProfile.scss";
import "./styles/Subscribe.scss";
import "./styles/PaymentFailed.scss";
import "./styles/PaymentSuccess.scss";
import "./styles/Loader.scss";

import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import FounderProfile from "./components/FounderProfile";
import Courses from "./components/Courses";
import NotFound from "./components/NotFound";
import CoursePage from "./components/CoursePage";
import ForgetPassword from "./components/Auth/ForgetPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Dashboard from "./components/Admin/Dashboard/screens/dashboard/DashboardScreen.jsx";
import CreateCourse from "./components/Admin/CreateCourse";
import BaseLayout from "./components/Admin/Dashboard/layout/BaseLayout.jsx";
import Users from "./components/Admin/Users/Users.jsx";
import AdminCourses from "./components/Admin/AdminCourses.jsx";
import Profile from "./components/Profile/Profile.jsx";
import UpdateProfile from "./components/Profile/UpdateProfile.jsx";
import ChangePassword from "./components/Profile/ChangePassword.jsx";
import Request from "./components/Request.jsx";
import Subscribe from "./components/Payments/Subscribe.jsx";
import PaymentSuccess from "./components/Payments/PaymentSuccess.jsx";
import PaymentFailed from "./components/Payments/PaymentFailed.jsx";
import { loadUser } from "./actions/user";
import Loader from "./components/Loader";
import { ProtectedRoute } from "protected-route-react";

function App() {
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const { user, isAuthenticated, message, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Header
              isAuthenticated={isAuthenticated}
              user={user}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/login"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Profile user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/updateProfile"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <UpdateProfile user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/changePassword"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <ChangePassword />
                  </ProtectedRoute>
                }
              />
              <Route path="/request" element={<Request />} />

              <Route
                path="/subscribe"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Subscribe user={user} />
                  </ProtectedRoute>
                }
              />
              <Route path="/paymentSuccess" element={<PaymentSuccess />} />
              <Route path="/paymentFailed" element={<PaymentFailed />} />
              <Route
                path="/register"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <Register />
                  </ProtectedRoute>
                }
              />
              <Route path="/founderProfile" element={<FounderProfile />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/*" element={<NotFound />} />
              <Route
                path="/course/:id"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <CoursePage user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/forgetPassword"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <ForgetPassword />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/resetPassword/:token"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <ResetPassword />
                  </ProtectedRoute>
                }
              />

              {/* Admin Routes */}
              <Route element={<BaseLayout />}>
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute
                      adminRoute={true}
                      isAuthenticated={isAuthenticated}
                      isAdmin={user && user.role === "admin"}
                    >
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/createCourse"
                  element={
                    <ProtectedRoute
                      adminRoute={true}
                      isAuthenticated={isAuthenticated}
                      isAdmin={user && user.role === "admin"}
                    >
                      <CreateCourse />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/adminCourses"
                  element={
                    <ProtectedRoute
                      adminRoute={true}
                      isAuthenticated={isAuthenticated}
                      isAdmin={user && user.role === "admin"}
                    >
                      <AdminCourses />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/users"
                  element={
                    <ProtectedRoute
                      adminRoute={true}
                      isAuthenticated={isAuthenticated}
                      isAdmin={user && user.role === "admin"}
                    >
                      <Users />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
            <Footer />
            <Toaster />
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
            >
              <img
                className="theme-icon"
                src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
                alt="theme-icon"
              />
            </button>
          </>
        )}
        ;
      </Router>
    </>
  );
}

export default App;
