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
import EmailRow from "./EmailRow";
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
        <Section Icon={InboxIcon} title={"Primary"} selected color="red" />
        <Section Icon={PeopleIcon} title={"Socials"} color="blue" />
        <Section Icon={LocalOfferIcon} title={"Promotions"} color="green" />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Twitch"
          subject="This is aswome"
          description="This is for test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="This is aswome"
          description="This is for test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="This is aswome but is it working? i think it is!!"
          description="This is for test let me check this one right now"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
