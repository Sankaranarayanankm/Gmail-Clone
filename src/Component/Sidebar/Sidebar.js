import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <Button className="sidebar__compose" startIcon={<AddIcon />}>
        Compose
      </Button>
      <SidebarOptions Icon={InboxIcon} title="Inbox" number={53} selected />
      <SidebarOptions Icon={StarIcon} title="Stared" number={6} />
      <SidebarOptions Icon={AccessTimeIcon} title="snoozed" number={63} />
      <SidebarOptions Icon={LabelImportantIcon} title="Important" number={26} />
      <SidebarOptions Icon={NearMeIcon} title="Sent" number={5} />
      <SidebarOptions Icon={NoteIcon} title="Drafts" number={2} />
      <SidebarOptions Icon={ExpandMoreIcon} title="More" number={26} />
    </div>
  );
};

export default Sidebar;
