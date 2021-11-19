import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import LinearProgress from '@mui/material/LinearProgress';
import Slider from '@mui/material/Slider';
import { withStyles, makeStyles } from "@material-ui/core/styles";


function App() {
  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const PrettoSlider = withStyles({
  root: {
      //color: "#52af77",
      height: 50
    },
    thumb: {
      height: 50,
      width: 50,
      backgroundColor:"#b2ff59",
      content: '',
      background:"url('https://img.icons8.com/material/48/000000/summer.png')",
      backgroundSize:"30px 30px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      border:"none"
        },
    active: {},
    track: {
      height: 50,
      borderRadius: 50,
      backgroundColor: "#b2ff59",
      border:"none"
    },
    rail: {
      height: 50,
      //borderRadius: 24,
      //opacity: 1,
      backgroundColor: "#424242",
      border:"none"


    }
})(Slider);


  return (
    <div className="App">
      <AppBar position="fixed" >
       <Toolbar>
         <IconButton
           color="inherit"
           aria-label="open drawer"
          // onClick={handleDrawerOpen}
           edge="start"
          // sx={{ mr: 2, ...(open && { display: 'none' }) }}
         >
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" noWrap component="div">
           Persistent drawer
         </Typography>
       </Toolbar>
      </AppBar>
     <Toolbar/>
     <Box
     height="100vh"
     overflowY="auto"
     >
      <Container maxWidth="lg" sx={{mt:4, mb:4}}>
       <Grid container spacing={2}>
       <Grid item lg={12}>
         <Box sx={{ width: '100%' }}>
          <PrettoSlider       defaultValue={80}/>
         </Box>
        </Grid>
        <Grid item lg={2}>
          <Card sx={{backgroundColor:"#B00020",borderRadius:5}}>
           <CardActionArea>
            <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
              <SignalWifi4BarIcon fontSize="large"/>
              <Typography variant="h6"     sx={{alignSelf: "center"}}>
                Wifi
              </Typography>
            </CardContent>
           </CardActionArea>
          </Card>
        </Grid>
        <Grid item lg={2}>
        <Card sx={{backgroundColor:"#03DAC5",borderRadius:5}}>
         <CardActionArea>
         <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <BluetoothIcon fontSize="large"/>
           <Typography variant="h6"     sx={{alignSelf: "center"}}>
             Bluetooth
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>
        <Grid item lg={2}>
        <Card sx={{backgroundColor:"#ff80ab",borderRadius:5}}>
         <CardActionArea>
         <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <Brightness6Icon fontSize="large"/>
           <Typography variant="h6" sx={{alignSelf: "center"}}>
             Dark Theme
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>
        <Grid item lg={2}>
        <Card sx={{backgroundColor:"#ffc107",borderRadius:5}}>
         <CardActionArea>
         <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <FlashlightOnIcon fontSize="large"/>
           <Typography variant="h6"     sx={{alignSelf: "center"}}>
             Flashlight
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>
       </Grid>
      </Container>
    </Box>
    </div>
  );
}

export default App;
