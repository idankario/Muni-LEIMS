import { styled } from "@mui/material/styles";
import button from "@mui/material/Button";

const Button = styled(button)(({ theme }) => ({
  boxShadow: "0 0 6px hsl(210 14% 90%)",
  height: "80px",
  margin: "30px 0px",
  width: "100%",
  background: theme.color ? theme.color : "#000000",
  borderRadius: "10px",
  ":hover": {
    backgroundColor: theme.hover ? theme.hover : "#ECB22F",
  },
  "& h2": {
    fontSize: "22px",
  },
}));

export default Button;
