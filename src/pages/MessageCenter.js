import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

import dimensions from "../utils/dimensions";
const MessageCenter = props => {

    return (
        <Box sx={{
            width: "100%",
            height: dimensions.messageCenterHeight,
            display: "flex",
            border: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Typography variant="h4">
                MessageCenter Area Component
                {/* 'Not a word in list' */}
            </Typography>
        </Box>
    )
};

export default MessageCenter;