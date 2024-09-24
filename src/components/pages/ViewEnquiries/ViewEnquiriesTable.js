import {
    DataTable,
    TableHead,
    DataTableColumnHeader,
    TableBody,
    DataTableCell,
    DataTableRow,
  } from "@dhis2/ui";
  
  const ViewEnquiriesTable = (enquiries) => {
    return (
      <DataTable>
        <TableHead>
          <DataTableRow>
            <DataTableColumnHeader>Enquiry ID</DataTableColumnHeader>
            <DataTableColumnHeader>Created at</DataTableColumnHeader>
            <DataTableColumnHeader>Description</DataTableColumnHeader>
            <DataTableColumnHeader>Assigned to</DataTableColumnHeader>
          </DataTableRow>
        </TableHead>
        <TableBody>
          {enquiries.enquiries.map((enquiry) => (
            <DataTableRow key={enquiry.trackedEntity}>
              <DataTableCell>{enquiry.attributes[0].value}</DataTableCell>
              <DataTableCell>
                {new Date(enquiry.createdAt).toLocaleDateString()}
              </DataTableCell>
              <DataTableCell>{enquiry.attributes[1].value}</DataTableCell>
              <DataTableCell>{enquiry.attributes[2].value}</DataTableCell>
            </DataTableRow>
          ))}
        </TableBody>
      </DataTable>
    );
  };
  
  export default ViewEnquiriesTable;