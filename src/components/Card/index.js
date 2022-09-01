import Box from "@mui/material/Box";
import Header from "./Header";

export default function Card({ headerText, children }) {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Header headerText={headerText} />
      {children}
    </Box>
  );
}
