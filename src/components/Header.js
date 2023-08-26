import React, { useEffect } from "react";
import logo from "../img/logo.png";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Typography } from "@mui/material";

export default function Header({ state, setState }) {
  useEffect(() => {}, [state]);
  return (
    <div
      style={{
        width: "100%",
        height: 90,
        backgroundColor: "#F1F0E8",
        position: "relative",
        display: "flex", // Sử dụng display flex để căn giữa ngang và dọc
        alignItems: "center", // Căn theo chiều dọc
        justifyContent: "center",
      }}
    >
      <img
        src={logo}
        width={99}
        height={82}
        alt="Logo"
        style={{ position: "absolute", left: 10 }}
      />
      <ButtonGroup
        variant="contained"
        aria-label="outlined button group"
        color="inherit"
        sx={{
          bottom: 0,
          position: "absolute",
          alignContent: "center",
          display: "flex",
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "center",
          borderWidth: 0,
          boxShadow: 0,
        }}
      >
        <Button
          sx={{
            borderRadius: 0,
            width: 250,
            borderWidth: 0,
            backgroundColor: state ? "#F1F0E8" : "white",
          }}
          onClick={() => setState(0)}
        >
          <Typography
            color={"#D09812"}
            sx={{
              fontFamily: "inherit",
              fontWeight: "bold",
            }}
          >
            CHECKING WARRANTY
          </Typography>
        </Button>
        <Button
          sx={{
            borderRadius: 0,
            width: 250,
            borderWidth: 0,
            backgroundColor: !state ? "#F1F0E8" : "white",
          }}
          onClick={() => {
            setState(1);
          }}
        >
          <Typography
            sx={{
              fontFamily: "inherit",
              fontWeight: "bold",
            }}
            color={"#D09812"}
          >
            WARRANTY POLICY
          </Typography>
        </Button>
      </ButtonGroup>
    </div>
  );
}
