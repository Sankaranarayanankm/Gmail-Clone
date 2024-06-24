import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <Button className="sidebar__compose" startIcon={<AddIcon />}>
        Compose
      </Button>
      
    </div>
  );
};

export default Sidebar;
