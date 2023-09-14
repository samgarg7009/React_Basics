import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

//name of component should always start with CAPITAL letter!!!

//let count = 1;


const App = () => {
    //const state = useState();
    const [count, SetCount] = useState(0);

    const cssStyles = {};
    if (count < 0) {
        cssStyles.color = "red";
    }
    if (count > 0) {
        cssStyles.color = "#25f325";
    }
    const IncNum = () => {
        SetCount(count + 1);
        //console.log('clicked');
    };
    const DecNum = () => {
        if (count > 0)
            SetCount(count - 1);
        else {
            alert('sorry,Zero limit')
            SetCount(0);
        }
        //console.log('clicked');
    };
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1 className='heading_style'>{count}</h1>
                    <div className='buttons'>
                        <Tooltip title="Add">
                            <Button variant="contained" onClick={IncNum} className='btn_add'> <AddIcon /></Button>
                        </Tooltip>
                        <Tooltip title="decrease">
                            <Button variant="contained" onClick={DecNum} className='btn_sub'> <RemoveIcon /></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>


        </>
    );
}
export default App;