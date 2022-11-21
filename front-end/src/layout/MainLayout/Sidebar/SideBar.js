import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import './SideBar.scss';
import { getAllcategories } from 'store/actions/Game Actions/game.action';
import SideBarIcon from './SideBarIcon';
import { makeStyles, withStyles } from '@mui/styles';
import MuiListItem from '@mui/material/ListItem';

const Sidebar = ({ mode, setMode }) => {
    const Box = styled(ListItemText)({
        fontFamily: 'poppins',
        color: 'red',
        paddingLeft: '2px',
        paddingRight: '10px'
    });
    const ListItem = withStyles({
        root: {
            '&$selected': {
                backgroundColor: 'red',
                color: 'white',
                '& .MuiListItemIcon-root': {
                    color: 'white'
                }
            },
            '&$selected:hover': {
                backgroundColor: '#8626FF',
                color: 'white',
                '& .MuiListItemIcon-root': {
                    color: 'white'
                }
            },
            '&:hover': {
                backgroundColor: '#8626FF',
                color: 'white',
                '& .MuiListItemIcon-root': {
                    color: 'white'
                }
            }
        },
        selected: {}
    })(MuiListItem);

    const [categories, setCategories] = useState([]);
    // console.log('new categories 👎 ', categories);

    useEffect(() => {
        getAllcategories().then((data) => {
            // console.log('categorties.. 👍 ', data);
            setCategories(data);
        });
    }, []);

    return (
        <div className="scrollbar">
            <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }} className="list">
                <Box position="fixed">
                    <List sx={{ fontFamily: 'poppins' }}>
                        {categories.map((category, key) => (
                            <ListItem disablePadding key={category._id}>
                                <ListItemButton component="a" href={`/game/categories?category=${category.categoryName}`}>
                                    <ListItemIcon>{SideBarIcon(category.icon)}</ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography sx={{ fontSize: '14px', fontWeight: 400, fontFamily: 'poppins' }}>
                                                {category.categoryName}
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </div>
    );
};

export default Sidebar;
