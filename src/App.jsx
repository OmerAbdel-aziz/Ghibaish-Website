import { Routes, Route, Outlet, Navigate } from "react-router-dom";

// Arabic Pages
import ArabicHomePage from "./arabic/ArabicHomePage";
import ArabicStaffPage from "./arabic/pages/ArabicStaffPage";
import ArabicAdmissionPage from "./arabic/pages/ArabicAdmissionPage";
import ArabicDepartmentsPage from "./arabic/pages/ArabicDepartmentsPage";
import ArabicAcademicPage from "./arabic/pages/ArabicAcademicPage";
import ArabicCentersPage from "./arabic/pages/ArabicCentersPage";
import ArabicAllNewsPage from "./arabic/pages/ArabicAllNewsPage";
import ArabicSingleNewsPage from "./arabic/pages/ArabicSingleNewsPage";
import ArabicLayout from "./layout/ArabicLayout";
import ArabicNotFound from "./arabic/pages/NotFound";

// English Pages
import StaffPage from "./english/pages/StaffPage";
import AdmissionPage from "./english/pages/AdmissionPage";
import DepartmentsPage from "./english/pages/DepartmentsPage";
import AcademicPage from "./english/pages/AcademicPage";
import CentersPage from "./english/pages/CentersPage";
import AllNewsPage from "./english/pages/AllNewsPage";
import SingleNewsPage from "./english/pages/SingleNewsPage";
import EnglishLayout from "./layout/EnglishLayout";
import EnglishHomePage from "./english/EnglishHomePage";

// Admin Pages
import AdminPanel from "./admin/AdminPanel";
import AdminLayout from "./layout/AdminLayout";
import AdminStaffPanel from "./admin/pages/AdminStaffPanel";
import AddStaffForm from "./admin/components/AddStaffForm";
import StaffEditingPanel from "./admin/pages/StaffEditingPanel";
import NewStaffEditingPanel from "./admin/pages/NewStaffEditingPanel";
import NotFound from "./english/pages/NotFound";
import PostEditingPanel from "./admin/pages/PostEditingPanel";
import PostAddingPage from "./admin/pages/PostAddingPage";
import LoginPage from "./admin/pages/LoginPage";
import SignUpPage from "./admin/pages/SignUpPage";

// Context
import { AuthProvider, useAuth } from "./context/AuthContext";

// PrivateRoute Component for Admin Access
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // Show loading state while checking auth
  if (!user) return <Navigate to="/admin/login" replace />; // Redirect to login if not authenticated
  return children; // All authenticated users are admins
};

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Wrap the entire app with AuthProvider */}
      <Routes>
        {/* Arabic Routes */}
        <Route
          path="/*"
          element={
            <ArabicLayout>
              <Routes>
                <Route path="/" element={<ArabicHomePage />} />
                <Route
                  path="/staff"
                  element={<ArabicStaffPage className="font-cairo" lang="ar" />}
                />
                <Route path="/admission" element={<ArabicAdmissionPage />} />
                <Route
                  path="/departments"
                  element={<ArabicDepartmentsPage />}
                />
                <Route path="/academic" element={<ArabicAcademicPage />} />
                <Route path="/centers" element={<ArabicCentersPage />} />
                <Route path="/all-news-ar" element={<ArabicAllNewsPage />} />
                <Route path="/post/:id" element={<ArabicSingleNewsPage />} />
                <Route path="*" element={<ArabicNotFound />} />
              </Routes>
            </ArabicLayout>
          }
        />

        {/* English Routes */}
        <Route
          path="/english/*"
          element={
            <EnglishLayout>
              <Routes>
                <Route path="/" element={<EnglishHomePage />} />
                <Route path="/staff" element={<StaffPage />} />
                <Route path="/admission" element={<AdmissionPage />} />
                <Route path="/departments" element={<DepartmentsPage />} />
                <Route path="/academic" element={<AcademicPage />} />
                <Route path="/centers" element={<CentersPage />} />
                <Route path="/all-news" element={<AllNewsPage />} />
                <Route path="/post/:id" element={<SingleNewsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </EnglishLayout>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                {/* Public Admin Routes */}
                <Route path="/login" element={<LoginPage />} />

                {/* Protected Admin Routes */}
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <AdminPanel />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/add-post"
                  element={
                    <PrivateRoute>
                      <PostAddingPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/edit-post/:id"
                  element={
                    <PrivateRoute>
                      <PostEditingPanel />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/staff"
                  element={
                    <PrivateRoute>
                      <AdminStaffPanel />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/add-staff"
                  element={
                    <PrivateRoute>
                      <AddStaffForm />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/edit-staff/:id"
                  element={
                    <PrivateRoute>
                      <StaffEditingPanel />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/review-new-staff/:id"
                  element={
                    <PrivateRoute>
                      <NewStaffEditingPanel />
                    </PrivateRoute>
                  }
                />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </AdminLayout>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
