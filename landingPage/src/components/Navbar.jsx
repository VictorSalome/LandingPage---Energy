
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography,
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import DrawerItem from './DrawerItem';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const itemList = [
    {
        text: "Home",
        to: "/"
    },
    {
        text: "Sobre",
        to: "/about"
    },
    {
        text: "Contato",
        to: "/contact"
    }
];

const Navbar = () => {
    return (
        <AppBar
            component="nav"
            position="sticky"
            sx={{
                backgroundColor: '#3a5636',
            }}
            elevation={0}
        >
            <StyledToolbar>
                <Typography
                    variant="h6"
                    component={Link} to="/"
                    sx={{
                        color: '#fff',
                        textDecoration: 'none',
                        "&:hover": {
                            textDecoration: 'none',
                            color: '#fff',
                        }
                    }}
                >
                    GREletrica&Construções
                </Typography>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem />
                </Box>
                <ListMenu>
                    {itemList.map((item) => {
                        const { text, to } = item;
                        return (
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={to}
                                    sx={{
                                        color: '#fff',
                                        "&:hover": {
                                            backgroundColor: 'transparent',
                                            color: '#1e2a5a',
                                        }
                                    }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
