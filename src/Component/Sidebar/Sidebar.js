import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <Button className="sidebar__compose" startIcon={<AddIcon />}>
        Compose
      </Button>
      <SidebarOptions Icon={InboxIcon} title="Inbox" number={53} />
    </div>
  );
};

export default Sidebar;
