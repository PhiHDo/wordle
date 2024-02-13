import {Fragment} from "react";
import {useState} from "react";
import Box from "@mui/material/Box";

import GuessArea from "./pages/GuessArea";
import TopBanner from "./pages/TopBanner";
import Keyboard from "./pages/Keyboard";
import MessageCenter from "./pages/MessageCenter";

import dimensions from "./utils/dimensions";
import fiveLetterWords from "./fiveLetterWords.json";
import boxSytles from "./utils/boxesAndTheirAttributes";

function App() {

    const [keyboardInput, setKeyboardInput] = useState('');

    const handleKeyPress = (keyPress) => {
        setKeyboardInput((prevInput) => prevInput + keyPress);
    }


    const initActiveRow = () => {
        // Take a close look at how the element of the array are being initialized.
        // Each element is being given a pointer to boxSytles['blankBox'], which is an Object.
        // Therefore, if you were to make changes to any of the elements of the array
        // that is being built, the change will affect all elements. See the onClickCallback
        // function for more on this.
        return new Array(dimensions.guessArea.numColumns).fill(boxSytles['blankBox']);
    }

    const completedRows = [];

    const [activeRow, setActiveRow] = useState(initActiveRow());

    const remainingRows = new Array(dimensions.guessArea.numColumns * dimensions.guessArea.numRows -
      completedRows.length - activeRow.length).fill({
        // backgroundColor: 'lightgrey'
    });

    const allRows = [...completedRows, ...activeRow, ...remainingRows];

    const onClickCallback = idxOfElementClicked => {
        if(idxOfElementClicked < 5) {
            // The click was in the first row at index idxOfElementClicked.
            // Therefore, we will change the background color of
            // activeRow[idxOfElementClicked].

            const newActiveRow = activeRow.slice();
            // Remember that all elements of activeRow
            // point to the same Object. If we change
            // the value of an attribute of this Object,
            // all element will see the change.

            // The follow construct creates a new Object,
            // spreads what is already in the element that was
            // clicked in it, and then, we change the backgroundColor
            // of this new Object. This way, all key/value
            // pairs of the Object at newActiveRow[idxOfElementClicked]
            // will remain unchanged. Only backgroundColor gets
            // changed.

            newActiveRow[idxOfElementClicked] = {
                ...activeRow[idxOfElementClicked],
                backgroundColor: 'yellow'
            };
            setActiveRow(newActiveRow);
        } else {
            remainingRows[idxOfElementClicked - 5] = {
                backgroundColor: 'lightblue'
            }
        }
    }

  return (
      <Fragment>
          <Box sx={{
              width: dimensions.width,
              height: dimensions.height,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "auto",
          }}>
            <TopBanner title="Wordle" />
            <GuessArea allRows={allRows} onClickCallback={(idx) => onClickCallback(idx)} />
            <MessageCenter />
            <Keyboard onKeyPress={handleKeyPress} input={keyboardInput} />
          </Box>
      </Fragment>

  );
}

export default App;
