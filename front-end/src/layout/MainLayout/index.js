// ==============================|| MAIN LAYOUT ||============================== //

import { Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Media from 'react-media';

import Header from './Header';
import Sidebar from './Sidebar/SideBar';

import { Outlet } from 'react-router-dom';
import CarouselCategory from 'ui-component/carousel/Carousel.category';

const MainLayout = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                {/* ================================Header============================ */}
                <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    md={12}
                    sx={{ padding: '20px', zIndex: '1', backgroundColor: 'white', position: 'static' }}
                >
                    <Header />
                    <Divider />
                </Grid>
                {/* ================================SideBar============================ */}
                <Media query="(max-width: 900px)">
                    {(matches) => {
                        return matches ? (
                            <Grid item sm={12} md={12} xs={12}>
                                <CarouselCategory />
                            </Grid>
                        ) : (
                            <Grid item md={2} lg={1.5} sx={{ position: 'static' }}>
                                <Sidebar />
                            </Grid>
                        );
                    }}
                </Media>
                {/* ========================================Body============================== */}

                <Grid item xs={12} sm={12} md={10} lg={10.5} sx={{ padding: '20px' }}>
                    <Outlet />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainLayout;
