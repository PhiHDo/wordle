import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

import dimensions from "../utils/dimensions";

const TopBanner = props => {

    const title = props.title;

    return (
        <Box sx={{
            height: dimensions.topBannerHeight,
            width: "100%",
            display: "flex",
            border: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Typography variant="h4">
                { title }
            </Typography>
        </Box>
    )
};

export default TopBanner;