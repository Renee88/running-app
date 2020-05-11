import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import Selections from '../Selections/Selections.jsx';
import './Footer.css'

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #4AEC8B 30%, #51F8D4 90%)',
        borderRadius: '50%',
        fontSize: 20,
        color: 'white',
        height: 100,
        width: 100,
        padding: '0 30px'
    },
    label: {
        textTransform: 'capitalize',
    },
});

function Footer() {
    const classes = useStyles()

    return (
        <div id="footer">
            <Selections/>
            <Button
                classes={{
                    root: classes.root,
                    label: classes.label
                }}>Start</Button>
        </div>
    )
}

export default Footer
