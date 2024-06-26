import React from "react";
import "./EmailList.css";
import {
  ArrowDropDown,
  ArrowLeft,
  ArrowRight,
  Keyboard,
  MoreVert,
  Settings,
} from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import RedoIcon from "@mui/icons-material/Redo";
import { IconButton } from "@mui/material";
import Section from "../Section/Section";
const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingLeft">
          <CheckBoxOutlineBlankIcon />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingRight">
          <IconButton>
            <ArrowLeft />
          </IconButton>
          <IconButton>
            <ArrowRight />
          </IconButton>
          <IconButton>
            <Keyboard />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title={"primary"} selected color="red" />
        <Section Icon={PeopleIcon} title={"Socials"} color="blue" />
        <Section Icon={LocalOfferIcon} title={"Promotions"} color="green" />
      </div>
    </div>
  );
};

export default EmailList;
