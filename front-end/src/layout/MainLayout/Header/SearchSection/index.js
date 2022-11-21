import { IconButton, InputBase, Paper, OutlinedInput, TextField, InputAdornment } from '@mui/material';
import { IconSearch } from '@tabler/icons';
import { useTheme } from '@mui/material/styles';
import Media from 'react-media';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { RiSearch2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SearchSection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    console.log('value', value);

    const Box = styled('div')(({ theme }) => ({
        [theme.breakpoints.up('lg')]: {
            width: '1500px'
        },
        [theme.breakpoints.down('lg')]: {
            width: '700px'
        }
    }));

    // const handleClick = (event) => {
    //     // console.log('clicked');
    //     event.preventDefault();
    //     navigate(`/game/search?searchQuery=${value}`);
    // };

    return (
        <Box>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '10px',
                    height: 34,
                    bgcolor: '#E4DFFF',
                    flexGrow: 2
                }}
            >
                <InputBase
                    variant="filled"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    sx={{ ml: 1, flex: 1, bgcolor: '#E4DFFF' }}
                    placeholder="Search Games"
                    inputProps={{ 'aria-label': '###' }}
                />
                <IconButton
                    type="button"
                    sx={{ p: '10px', '&:hover': { color: 'blue' } }}
                    onClick={(event) => {
                        event.preventDefault();
                        navigate(`/game/search?searchQuery=${value}`);
                    }}
                >
                    <RiSearch2Line stroke={2.7} size="1.5rem" color={theme.palette.secondary.dark} />
                </IconButton>
            </Paper>
        </Box>
    );
}

export default SearchSection;
