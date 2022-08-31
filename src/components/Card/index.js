import { useState } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function Card({ headerText, children }) {
  // const [maximized, setMaximized] = useState(false);

  // const maxedSize = {
  //   w: "96%",
  //   minHeight: "100vh",
  //   margin: "auto"
  // };

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static" fullWidth>
        <Toolbar direction="row">
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            {headerText}
          </Typography>
          <IconButton
            size="medium"
            color="inherit"
            aria-label="copy text"
            onClick={() => console.log("expand")}
          >
            <ContentCopyIcon />
          </IconButton>
          <IconButton
            size="medium"
            color="inherit"
            aria-label="expand screen"
            sx={{ mr: "-10px" }}
            onClick={() => console.log("copy")}
          >
            <FullscreenIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {children}
    </Box>
  );
}
