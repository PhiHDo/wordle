import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import dimensions from "../utils/dimensions";
import {Grid} from "@mui/material";
import {Button} from "@mui/material";

const Keyboard = props => {

    const onKeyPress = props;

    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
    ];

    // const handleKeyPress = key => {
    //     onKeyPress(key);
    // };

    const handleKeyPress = () => {
        
    };

    return (

        <Box sx={{
            width: "100%",
            height: dimensions.keyboardHeight,
            display: "flex",
            border: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Typography variant="h4">
                {/* Keyboard Area Component */}
                {/* {keyboardLayout} */}
            </Typography>

            <Grid container spacing={2}>
                {keyboardLayout.map((row, rowIdx) => (
                    <Grid item
                        key={rowIdx} 
                        container
                        justifyContent = "center"
                    >
                        {row.map((key, keyIdx) => (
                            <Grid item
                                key={keyIdx}
                            >
                                <Button variant="contained"
                                        color="info"
                                        size="small"

                                        sx={{ minWidth: "45px", minHeight: "45px"}} //keeps all top keyboard keys in the same row
                                        
                                        onClick={() => {
                                            handleKeyPress(key);
                                            // alert('clicked a letter');
                                          }}      
                                >
                                    {key}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
};

export default Keyboard;