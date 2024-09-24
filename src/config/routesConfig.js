import Layout from "../components/layout/Layout";
import CreateNewEnquiryPage from "../components/pages/CreateNewEnquiry/CreateNewEnquiryPage";
import ViewEnquiriesPage from "../components/pages/ViewEnquiries/ViewEnquiriesPage";

export const routesConfig = [
  {
    path: "/",
    element: (
      <Layout>
        <CreateNewEnquiryPage />
      </Layout>
    ),
  },
  {
    path: "/view-enquiries",
    element: (
      <Layout>
        <ViewEnquiriesPage />
      </Layout>
    ),
  },
];