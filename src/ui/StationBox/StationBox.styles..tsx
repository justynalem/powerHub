import { styled, lighten} from "@mui/material/styles";
import { Box } from "@mui/material";
import EvStationIcon from "@mui/icons-material/EvStation";

export const StyledStationBox = styled(Box)(({ theme }) => ({
  width: "15rem",
  height: "19.5rem",
  borderRadius: "2rem",
  padding:"1rem",
  margin: "0 auto",
  
  backgroundColor: lighten(theme.palette.background.default, 0.02),
  display: "grid",
  gridTemplateRows: "repeat(4, 1fr)",  
  ":hover": {
    backgroundColor: theme.palette.background.paper,
    }
}));

export const StationBoxRow1 = styled(Box)(()=>({
  display: "grid",
  gridTemplateColumns: "4fr 1fr"
}))

export const StyledStationIcon = styled(EvStationIcon)(({theme})=>({
  fontSize: "5rem",
  color: theme.palette.info.light,
}))