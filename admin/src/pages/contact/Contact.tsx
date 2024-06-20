import { Fade, Tooltip } from "@mui/material";
import DataTable from "../../components/contact/DataTable";
import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
// import { useEffect, useState } from "react";
// import axios from "axios";

const Contact = () => {
  

  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 120 },
    { field: "name", type: "string", headerName: "Name", width: 250 },
    { field: "email", type: "string", headerName: "Email", width: 250 },
    { field: "contactNumber", type: "string", headerName: "Phone", width: 200 },
    {
      field: "message", type: "string", headerName: "Message", width: 200,
      renderCell: (params) => (
        <Tooltip
          title={params.value || ''} placement="bottom-start"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <span>{params.value}</span>
        </Tooltip>
      )
    },
    { field: "verified", headerName: "Verified", width: 150, type: "boolean" },
  ];

  return (
    <div className="users">
      <div className="info">
        <h1>Contact</h1>
      </div>
      <DataTable columns={columns} />
    </div>
  );
};

export default Contact;
