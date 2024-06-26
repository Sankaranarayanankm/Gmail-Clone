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
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import RedoIcon from "@mui/icons-material/Redo";
import { IconButton } from "@mui/material";
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
        
      </div>
    </div>
  );
};

export default EmailList;
