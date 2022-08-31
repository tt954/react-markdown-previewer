import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Options({ resetEditor }) {
  const setTheme = () => {
    console.log("here");
  };

  const actions = [
    { icon: <RestartAltIcon />, name: "Reset", handleClick: resetEditor },
    { icon: <DarkModeIcon />, name: "Dark Mode", handleClick: setTheme },
    { icon: <LightModeIcon />, name: "Light Mode", handleClick: setTheme }
  ];

  return (
    <SpeedDial
      ariaLabel="Options speed dial"
      sx={{ position: "fixed", bottom: 50, right: 50 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => action.handleClick()}
        />
      ))}
    </SpeedDial>
  );
}
