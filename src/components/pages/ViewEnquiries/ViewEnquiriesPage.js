import classes from "./ViewEnquiriesPage.module.css";
import { useDataQuery } from "@dhis2/app-runtime";
import ViewEnquiriesTable from "./ViewEnquiriesTable";

const ENQUIRY_ENTITY_ID = "nJPf4Nvpg2T"

const retrieveEnquiries = {
  enquiries: {
    resource: "tracker/trackedEntities",
    params: {
        trackedEntityType: ENQUIRY_ENTITY_ID 
    }
  },
};

const ViewEnquiriesPage = () => {

    const { loading, error, data } = useDataQuery(retrieveEnquiries);

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
      return <p>Error</p>;
    }

    return (
      <div className={classes.container}>
        <h1>View all Enquiries</h1>

        <ViewEnquiriesTable enquiries={data.enquiries.trackedEntities}/>
        
      </div>
    );
}

export default ViewEnquiriesPage;