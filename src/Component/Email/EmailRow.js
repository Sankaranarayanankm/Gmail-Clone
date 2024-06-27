import React from "react";
import "./EmailRow.css";
import {
  CheckBox,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import {useHistory} from 'react-router-dom'

const EmailRow = ({ title, subject, description, time, id }) => {
  const history=useHistory();
  return (
    <div onClick={()=>history.push('/mail')} className="emailRow">
      <div className="emailRow__options">
        <CheckBox />
      <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description">-{description}</span>
        </h4>
        {/* {subject} */}
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
};

export default EmailRow;
 