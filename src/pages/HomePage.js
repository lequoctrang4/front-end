import { useState } from "react";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "../img/glass.png";
import card from "../img/card.png";
import Footer from "../components/Footer";
export default function HomePage() {
  const [state, setState] = useState(0);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
      console.log("Searching for:", searchText);
  };
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header state={state} setState={setState} />
      {!state && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            gap: 10,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#D09812",
              marginTop: 5,
              fontSize: 36,
              fontFamily: "inherit",
            }}
          >
            CHECKING WARRANTY
          </Typography>
          <img src={card} alt="Card" />
          <Typography
            sx={{
              color: "#434343",
              fontSize: 20,
              fontStyle: "italic",
              fontWeight: "normal",
              fontFamily: "inherit",
            }}
          >
            Enter ID code to check warranty information
          </Typography>
          <TextField
            value={searchText}
            placeholder="ID code"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
            variant="filled"
            sx={{
              backgroundColor: "#F1F0E8",
              width: 450,
              fontFamily: "inherit",
            }}
            in
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleSearch}>
                  <img src={SearchIcon} width={30} alt="Search" />
                </IconButton>
              ),
            }}
          />
        </div>
      )}
      <Footer />
    </div>
  );
}
