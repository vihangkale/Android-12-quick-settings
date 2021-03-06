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
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import BatterySaverOutlinedIcon from '@mui/icons-material/BatterySaverOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import CastOutlinedIcon from '@mui/icons-material/CastOutlined';
import Button from '@mui/material/Button';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Modal from '@mui/material/Modal';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


let bright= "";

function App() {
  const drawerWidth = 240;
  const [darkTheme, setDarkTheme] = React.useState(false);
  let [brightness, setBrightness] = React.useState(100);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


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
      height: "10vh"
    },
    thumb: {
      height: 50,
      width: 50,
      backgroundColor:"#b2ff59",
      content: '',
      background:" url('https://img.icons8.com/material/48/000000/summer.png')",
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
      height: 10,
      //borderRadius: 24,
      //opacity: 1,
      backgroundColor: "#424242",
      border:"none"


    }
})(Slider);

function OnChange() {
  setDarkTheme(!darkTheme);
}

function Brightness(event,newValue) {
  console.log(newValue)
    setBrightness(newValue)
   bright = "brightness(" + brightness + "%)";
}

//  function Wifi() {
//
// }
//
// function Bluetooth() {
//
// }
const handleModalOpen = () => setModalOpen(true);
const handleModalClose = () => setModalOpen(false);



const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

const appDrawer = (anchor) => (
  <Box
    sx={{width: 250 }}
    role="presentation"
    onClick={toggleDrawer("bottom", false)}
    onKeyDown={toggleDrawer("bottom", false)}
  >
      <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="public/icons/gmail.png" />
      <Avatar alt="Travis Howard" src="public/icons/gmail.png" />
      <Avatar alt="Cindy Baker" src="public/icons/gmail.png" />
    </Stack>

  </Box>
);

  return (
    <div className="App" style={{backgroundColor: darkTheme ? "#000":"#d9e5e6",filter: bright}}>
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
         <AndroidOutlinedIcon sx={{color:"#00e676",justifySelf: 'flex-end'}}/>
       </Toolbar>
      </AppBar>
     <Toolbar/>
     <Box
     minHeight="100vh"
     overflowY="auto"
     >
      <Container maxWidth="lg" sx={{mt:4, mb:4}}>
       <Grid container spacing={2}>
       <Grid item lg={12} xs={12} sm={12}>
         <Box sx={{ width: '100%' }}>
          <PrettoSlider
            value={brightness}
            //step={10}
            max ={100}
            min ={0}
            onChange={Brightness}/>
         </Box>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} md={3}>
          <Card sx={{backgroundColor:"#B00020",borderRadius:5,color: !darkTheme ? "#fff":null}}>
           <CardActionArea
            //onClick={Wifi}
            >
            <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
              <SignalWifi4BarIcon fontSize="large"/>
              <Typography variant="h6"   sx={{alignSelf: "center",fontSize:"0.9rem"}}>
                Wifi
              </Typography>
            </CardContent>
           </CardActionArea>
          </Card>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} md={3}>
        <Card sx={{backgroundColor:"#03DAC5",borderRadius:5,color: !darkTheme ? "#fff":null}}>
         <CardActionArea
         //onClick={Bluetooth}
         >
         <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <BluetoothIcon fontSize="large"/>
           <Typography variant="h6" sx={{alignSelf: "center",fontSize:"0.9rem"}}>
             Bluetooth
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} md={3}>
        <Card sx={{backgroundColor:"#ff80ab",borderRadius:5,color: !darkTheme ? "#fff":null}}>
         <CardActionArea onClick={OnChange}>
         <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <Brightness6Icon fontSize="large"/>
           <Typography variant="h6" sx={{alignSelf: "center",fontSize:"0.9rem"}}>
             Dark Theme
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} md={3}>
        <Card sx={{backgroundColor:"#ffc107",borderRadius:5,color: !darkTheme ? "#fff":null}}>
         <CardActionArea>
          <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <FlashlightOnIcon fontSize="large"/>
           <Typography variant="h6"  sx={{alignSelf: "center",fontSize:"0.9rem"}}>
             Flashlight
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} md={3}>
        <Card sx={{backgroundColor:"#607d8b",borderRadius:5,color: !darkTheme ? "#fff":null}}>
         <CardActionArea>
         <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <ScreenRotationIcon fontSize="large"/>
           <Typography variant="h6"     sx={{alignSelf: "center",fontSize:"0.9rem"}}>
             Auto Rotate
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>

        <Grid item lg={2} xs={6} sm={3} md={3}>
         <Card sx={{backgroundColor:"#1de9b6",borderRadius:5,color: !darkTheme ? "#fff":null}}>
          <CardActionArea>
          <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <RoomOutlinedIcon fontSize="large"/>
           <Typography variant="h6"     sx={{alignSelf: "center",fontSize:"0.9rem"}}>
             Location
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>

        <Grid item lg={2} xs={6} sm={3} md={3}>
         <Card sx={{backgroundColor:"#ff5722",borderRadius:5,color: !darkTheme ? "#fff":null}}>
          <CardActionArea>
          <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <BatterySaverOutlinedIcon fontSize="large"/>
           <Typography variant="h6"     sx={{alignSelf: "center",fontSize:"0.9rem"}}>
             Baterry Saver
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} md={3}>
         <Card sx={{backgroundColor:"#00e676",borderRadius:5,color: !darkTheme ? "#fff":null}}>
          <CardActionArea>
          <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <AccountBalanceWalletOutlinedIcon fontSize="large"/>
           <Typography variant="h6"     sx={{alignSelf: "center",fontSize:"0.9rem"}}>
             Wallet
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} md={3}>
         <Card sx={{backgroundColor:"#3f51b5",borderRadius:5,color: !darkTheme ? "#fff":null}}>
          <CardActionArea>
          <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <AirplanemodeActiveOutlinedIcon fontSize="large"/>
           <Typography variant="h6"     sx={{alignSelf: "center",fontSize:"0.9rem"}}>
             Aeroplane Mode
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} md={3}>
         <Card sx={{backgroundColor:"#ffb74d",borderRadius:5,color: !darkTheme ? "#fff":null}}>
          <CardActionArea>
          <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <NotificationsNoneOutlinedIcon fontSize="large"/>
           <Typography variant="h6"     sx={{alignSelf: "center",fontSize:"0.9rem"}}>
             Sound
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} md={3}>
         <Card sx={{backgroundColor:"#ce93d8",borderRadius:5,color: !darkTheme ? "#fff":null}}>
          <CardActionArea>
          <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <DoNotDisturbOnOutlinedIcon fontSize="large"/>
           <Typography variant="h6"     sx={{alignSelf: "center",fontSize:"0.9rem"}}>
             Do Not Disturb
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>
        <Grid item lg={2} xs={6} sm={3} md={3}>
         <Card sx={{backgroundColor:"#97c3ff",borderRadius:5,color: !darkTheme ? "#fff":null}}>
          <CardActionArea>
          <CardContent sx={{ display:"flex", justifyContent: "space-evenly"}}>
           <CastOutlinedIcon fontSize="large" />
           <Typography variant="h6"     sx={{alignSelf: "center",fontSize:"0.9rem"}}>
             Screen Cast
           </Typography>
         </CardContent>
         </CardActionArea>
        </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}>
         <IconButton variant="contained" sx={{borderRadius:5,backgroundColor:"#2D3034",width:"100%",color: darkTheme ? "#fff":null}} >
            <ModeEditOutlineOutlinedIcon />
         </IconButton>
       </Grid>
       <Grid item lg={4} md={4} sm={4} xs={4}>
        <IconButton onClick={handleModalOpen} variant="contained" sx={{borderRadius:5,backgroundColor:"#2D3034",width:"100%",color: darkTheme ? "#fff":null}} >
          <PowerSettingsNewIcon/>
        </IconButton>
      </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}>
         <IconButton variant="contained" sx={{borderRadius:5,backgroundColor:"#2D3034",width:"100%", color: darkTheme ? "#fff":null}} >
            <SettingsOutlinedIcon/>
         </IconButton>
       </Grid>
      </Grid>
      <Modal
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box
            sx={{
              backgroundColor: darkTheme ? "#000":"#d9e5e6",
              position: 'absolute',
              top: '50%',
              left: '50%',
              p: 4,
              width: "80vh",
              height:400,
              transform: 'translate(-50%, -50%)',
              borderRadius:10
            }}
            >
            <Grid container spacing={2} sx={{justifyContent:"center"}}>
            <Grid item lg={6} md={6} sm={6} xs={6} >
              <IconButton variant="contained" sx={{borderRadius:"50%",backgroundColor:"#2D3034",height: "30vh",width:"100%",padding: "20px",color: darkTheme ? "#fff":null}} >
                <PowerSettingsNewIcon/>
                </IconButton>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6} >
              <IconButton variant="contained" sx={{borderRadius:"50%",backgroundColor:"#2D3034",height: "30vh",width:"100%",padding: "20px",color: darkTheme ? "#fff":null}} >
                <RestartAltRoundedIcon/>
                </IconButton>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}  >
              <IconButton variant="contained" sx={{borderRadius:"50%",backgroundColor:"#2D3034",height: "30vh",width:"100%",padding: "20px",color: darkTheme ? "#fff":null}} >
                <RestartAltRoundedIcon/>
                </IconButton>
            </Grid>
          </Grid>
       </Box>
        </Modal>

          <Button onClick={toggleDrawer("bottom", true)}>bottom</Button>
          <Drawer
            anchor="bottom"
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
          >
            {appDrawer("bottom")}
          </Drawer>
      </Container>
    </Box>
    </div>
  );
}

export default App;
