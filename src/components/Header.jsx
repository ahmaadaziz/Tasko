import React from "react";
import Button from "./Button";

const Header = ({ title, showAdd, showAddTask }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        text={showAddTask ? "Close" : "Add"}
        onClick={showAdd}
        color={showAddTask ? "red" : "steelblue"}
      />
    </div>
  );
};

Header.default = {
  title: "Task Tracker",
};

export default Header;
