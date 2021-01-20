import React from 'react';
import classes from './TopBar.module.css';

const TopBar = (props) =>
    <div className={classes.TopBarContainer}>
        <div className={classes.TopBar}>
            <div className={classes.Name}>
                <p>Przemysław Wojtarowicz</p>
            </div>
            <div className={classes.Title}>
                <p>Grafika komputerowa</p>
            </div>
            <div className={classes.Date}>
                <p>2021</p>
            </div>
        </div>
    </div>

export default TopBar;