import {Fragment} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Keyboard from "./Keyboard";

import {Typography} from "@mui/material";

import dimensions from "../utils/dimensions";

const GuessBox = (props) => {

    const {backgroundColor} = props.cellContent;
    const onClickCallback = props.onClickCallback;

    return (
        <Box onClick={() => onClickCallback() }
            sx={{
                width: dimensions.guessArea.widthOfLetterBox,
                height: dimensions.guessArea.heightOfLetterBox,
                backgroundColor: backgroundColor,
                border: 1,
                m: 0.4,
                padding: 0
            }}
        >

        </Box>
    )
}
const GuessArea = (props) => {

    const allRows = props.allRows;
    const onClickCallback = props.onClickCallback;

    return (
        <Fragment>

            <Box sx={{
                height: dimensions.guessAreaHeight,
                width: "100%",    // sets the stage for centering the grid in the container of this component
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: 1
            }}>
            <Grid container columns={dimensions.guessArea.numColumns}
                  sx={{
                      height: dimensions.guessAreaHeight,
                      width: dimensions.guessAreaWidth,
                  }}
            >
                {
                    allRows.map((boxAttributes, idx) =>
                        <Grid item xs={1}
                              key={idx}
                              sx={{margin: 0,
                                      padding: 0
                                  }}
                        >
                            <GuessBox cellContent={boxAttributes}
                                      onClickCallback={() => onClickCallback(idx)}
                            />
                        </Grid>
                    )
                }
            </Grid>
            </Box>
        </Fragment>
    )
};

export default GuessArea;