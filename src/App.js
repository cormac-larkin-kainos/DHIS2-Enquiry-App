import { Outlet } from "react-router-dom"; 
import Layout from "./components/layout/Layout";
import { HashRouter, Routes, Route } from "react-router-dom";
import ViewEnquiriesPage from "./components/pages/ViewEnquiries/ViewEnquiriesPage";
import CreateNewEnquiryPage from "./components/pages/CreateNewEnquiry/CreateNewEnquiryPage";

// Layout component wrapper that includes Outlet for rendering child routes
const LayoutWrapper = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<LayoutWrapper />}>
        <Route index element={<CreateNewEnquiryPage />} />
        <Route path="view-enquiries" element={<ViewEnquiriesPage />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
