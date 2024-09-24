import React from 'react';
import { Form, Field } from 'react-final-form';
import classes from "./form.module.css";
import { useDataMutation, useDataQuery } from "@dhis2/app-runtime";
import { v4 } from "uuid";

const attributeIds = {
  uniqueID: "GUj8kOGagaz",
  description: "w3AoqIAhAQm",
  assignedTo: "OJWg8hl8oZj",
};

const retrieveUsers = {
  users: {
    resource: "users",
    params: {
      fields: ["id", "displayName", "code"],
    },
  },
};

const createNewEnquiry = {
  type: "create",
  resource: "tracker", // async is 'true' unless we specify otherwise!
  data: ({ enquiryDescription, selectedUser }) => ({
    trackedEntities: [
      {
        attributes: [
          {
            attribute: attributeIds.uniqueID, // Unique ID
            value: v4(),
          },
          {
            attribute: attributeIds.description, // Description
            value: enquiryDescription,
          },
          {
            attribute: attributeIds.assignedTo, // Assigned to (must be a valid username)
            value: selectedUser,
          },
        ],
        orgUnit: "fcjz58MtiuU", // 'North Wales Clinic'
        trackedEntityType: "nJPf4Nvpg2T", // The 'Enquiry' Tracked Entity
        enrollments: [],
      },
    ],
  }),
};

const showSubmissionOutcome = (apiResponse) => {
  let message;

  if(apiResponse.httpStatusCode === 200) {
    message = "Enquiry submitted successfully!"
  } else {
    message = "An error occurred, this enquiry could not be submitted";
  }

  alert(message);
};


const CreateNewEnquiryForm = () => {

  const {loading: loadingUsers, error: userQueryError, data: userData} = useDataQuery(retrieveUsers);

  const [mutate, { loading, error }] = useDataMutation(createNewEnquiry, {
    onComplete: showSubmissionOutcome,
  });

  const onSubmit = (formData) => {
    console.log(formData);
    mutate(formData)
  };

  if(loadingUsers) {
    return <p>Loading...</p>
  }

  if(userQueryError) {
    return <p>Error retrieving users...</p>
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.labelWrapper}>
            <label>Enquiry Description</label>
          </div>

          <Field
            name="enquiryDescription"
            component="textarea"
            placeholder="Enter enquiry description"
          />

          <div className={classes.labelWrapper}>
            <label>Assign this enquiry to a user:</label>
          </div>
          <Field name="selectedUser" component="select">
            <option value="">Select a user...</option>
            {userData.users.users.map((user) => (
              <option key={user.code} value={user.code}>
                {user.displayName}
              </option>
            ))}
          </Field>

          <div className={classes.buttonWrapper}>
            <button className={classes.submitButton} type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
            className={classes.resetButton}
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default CreateNewEnquiryForm;
