import { margin } from '@mui/system';
import React from 'react';

function Rank1Avatar(props) {
    return (
        <div>
            <img
                style={{
                    width: '70px',
                    border: '2px solid purple',
                    borderRadius: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto'
                }}
                src={props.avatar}
                alt="img"
            />
        </div>
    );
}

export default Rank1Avatar;