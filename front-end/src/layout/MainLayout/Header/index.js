// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Switch } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import './ButtonToogle/Toggle.scss';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', position: 'sticky' }}>
            <LogoSection />

            <SearchSection />
            <Box sx={{ flexGrow: 0.2 }} />
            <Switch className="switch" color="secondary" />

            <Box sx={{ flexGrow: 0.2 }} />

            <Avatar
                variant="rounded"
                sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    mr: 1,
                    width: 60,
                    height: 34,
                    borderRadius: '15px',

                    transition: 'all .2s ease-in-out',
                    background: '#E4DFFF',
                    color: theme.palette.secondary.dark,
                    '&:hover': {
                        background: theme.palette.secondary.dark,
                        color: theme.palette.secondary.light
                    }
                }}
                onClick={() => {}}
                color="inherit"
            >
                <WorkspacePremiumIcon />

                {/* <Typography sx={{ ml: '4px' }}>{userData?.points ? `${userData.points}` : '0'}</Typography> */}
            </Avatar>

            <Box sx={{ flexGrow: 0.2 }} />
            <ProfileSection />
        </Box>
    );
};

export default Header;
