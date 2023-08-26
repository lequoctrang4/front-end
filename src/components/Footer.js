import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#F1F0E8",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        height: 83,
      }}
    >
      <Typography
        sx={{
          color: "#C1A666",
          fontWeight: "500",
          width: "40%",
          textAlign: "center",
          borderBottom: "1px solid #C1A666",
          fontFamily: "inherit",
        }}
      >
        VU DENTAL LABORATORY
      </Typography>
      <Typography
        sx={{
          color: "#C1A666",
          fontSize: 14,
          fontFamily: "inherit",
        }}
      >
        638/10 Lê Hồng Phong, 10 Ward, 10 District, Ho Chi Minh City
      </Typography>
      <Typography
        sx={{
          color: "#C1A666",
          fontSize: 14,
          fontFamily: "inherit",
        }}
      >
        0962624448
      </Typography>
      <div style={{ backgroundColor: "#C1A666", height: 20, width: "100%" }}>
        <Typography
          sx={{
            color: "white",
            fontSize: 14,
            width: "100%",
            textAlign: "center",
            fontFamily: "inherit",
          }}
        >
          Copyright VU DENTAL LABORATORY | Design by TML
        </Typography>
      </div>
    </div>
  );
}
