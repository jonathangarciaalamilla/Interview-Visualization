import "./App.css";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import logo from "./cirvr.png";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Grid, Item, TextField } from "@mui/material";
import AuthoringTool from "./AuthoringTool";
import { useNavigate } from "react-router-dom";

const AuthoringHome = () => {
  const navigate = useNavigate();

  function navigateToPage() {
    navigate("/tool", { state: "from-template" });
  }

  function navigateNew() {
    navigate("/tool", { state: "" });
  }

  return (
    <div className="center-container">
      <div style={{ height: 400, width: "100%", alignItems: "center" }}>
        <img src={logo} alt="CIRVR logo" style={{ width: "20%" }} />
        <h1 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          Interview Authoring Tool
        </h1>
        <Button
          color={"primary"}
          variant="constrained"
          onClick={navigateToPage}
        >
          Edit Current Script
        </Button>

        <Button color={"primary"} variant="constrained" onClick={navigateNew}>
          Create New Script
        </Button>
      </div>
    </div>
  );
};

export default AuthoringHome;
