import React from 'react';
import { useState } from 'react';
import { Switch } from '@mui/material';
import { ThemeContext } from './themeContext';
import { useContext } from 'react';

function SwitchTheme() {
    const { isToggled, setIsToggled } = useContext(ThemeContext);

    const handleToggle = () => {
        setIsToggled(!isToggled);
        localStorage.setItem('isToggled', !isToggled);

        // console.log(isToggled,'checked')
    };

    return (
        <div style={{ display: 'flex' }}>
            <p>Light</p>
            <button
                className={isToggled ? 'btn btn-floating fa fa-toggle-off' : 'btn btn-floating fa fa-toggle-on'}
                onClick={handleToggle}
            ></button>
            <p>Dark</p>
        </div>
    );
}

export default SwitchTheme;
