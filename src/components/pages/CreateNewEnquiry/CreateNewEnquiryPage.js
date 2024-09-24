import classes from "./CreateNewEnquiryPage.module.css";
import CreateNewEnquiryForm from "../../forms/CreateNewEnquiryForm";

const CreateNewEnquiryPage = () => {

    return (
      <div className={classes.container}>
        <h1>Create a new Enquiry</h1>

        <CreateNewEnquiryForm />
      </div>
    );
}

export default CreateNewEnquiryPage;