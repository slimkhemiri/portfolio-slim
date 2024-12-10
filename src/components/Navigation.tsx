import { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import '../assets/styles/Navigation.scss'
const drawerWidth = 240;
const navItems = [['Expertise', 'expertise'], ['History', 'history'], ['Projects', 'projects'], ['Tech', 'techstack'], ['Contact', 'contact']];

function Navigation({ parentToChild, modeChange }: any) {

  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='23' height='20' viewBox='0 0 60 30'><clipPath id='t'><path d='M0 0v30h60V0z'/></clipPath><clipPath id='e'><path d='M30 15h30v15H0V15z'/></clipPath><g clip-path='url(%23t)'><path fill='%230026A7' d='M0 0v30h60V0z'/><path stroke='%23fff' stroke-width='6' d='M0 0L60 30M0 30L60 0'/><path stroke='%23fff' stroke-width='10' d='M30 0v30M0 15h60'/><path stroke='%23C8102E' stroke-width='4' d='M30 0v30M0 15h60'/><path stroke='%23C8102E' stroke-width='5' d='M0 0L60 30M0 30L60 0'/></g></svg>");
`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#aab4be',
          ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='18' viewBox='0 0 3 2'><rect width='1' height='2' x='0' fill='%230055A4' /><rect width='1' height='2' x='1' fill='%23ffffff' /><rect width='1' height='2' x='2' fill='%23EF4135' /></svg>");`,
      },
      ...theme.applyStyles('dark', {
        backgroundColor: '#003892',
      }),
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#aab4be',
      borderRadius: 20 / 2,
      ...theme.applyStyles('dark', {
        backgroundColor: '#8796A5',
      }),
    },
  }));
  const [checked, setChecked] = useState(i18n.language === 'en');

  const handleChangeLanguage = () => {
    const newLanguage = checked ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
    setChecked(!checked);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    console.log(section)
    const expertiseElement = document.getElementById(section);
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolling to:', expertiseElement);  // Debugging: Ensure the element is found
    } else {
      console.error('Element with id "expertise" not found');  // Debugging: Log error if element is not found
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon />Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={t(`navigation.${item[0].toLowerCase()}`)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className="navigation-bar" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
              <div className="container" >
              <label className="switch">
                <input className="togglesw" type="checkbox" checked={mode === 'light' ? true : false} />
                <div className="indicator left"></div>
                <div className="indicator right"></div>
                <div onClick={() => modeChange()} className="button"></div>
              </label>
              </div>
              
            <Box sx={{ display: 'inline-flex', ml: 6, alignItems: 'center' }}>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 0 }} onClick={handleChangeLanguage} checked={checked} />}
                label=""
              />
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block', ml: 2 } }}>
            {navItems.map((item) => (
              <Button key={item[0]} onClick={() => scrollToSection(item[1])} sx={{ color: '#fff' }}>
                {t(`navigation.${item[0].toLowerCase()}`)}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;