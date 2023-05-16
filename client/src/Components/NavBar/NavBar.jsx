import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { ColorModeContext } from "../Layout";
import { useTheme } from "@emotion/react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuAvatar from "./MenuAvatar";
import SearchBar from "./SearchBar";
import SingInButtons from "./SingInButtons";
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function NavBar() {
  let estadoUsuario = 1;
  /* variable auxiliar temporal:
    0 => usuario no registrado
    1 => comprador
    2 => vendedor
    4 => administrador */

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const themeMode = theme.palette.mode === "light" ? "black" : "white";



  return (
    <>
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ bgcolor: "background.default" }}
      >
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            margin: "30px 30px 25px 0",
          }}
        >

    
          <Link href="/" underline="none">
            <Typography variant="h5" sx={{ fontSize:"36px", fontWeight:"700", marginLeft: "40px" }}>Ingenia</Typography>
          </Link>

          <SearchBar />

          <div
             style={{ 
                display: "flex", 
                // justifyContent: "center", 
                justifyContent: "flex-end", 
                alignItems: "center",
                gap: "10px",
                width: "500px",
                marginLeft: "-80px",
                position: "relative",
            }} 
          >

    
          {estadoUsuario === 1 ? (
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center",
                gap: "10px",
                width: "430px",
              }}
            >
              <NavLink  
                style={{ 
                  textDecoration: 'none', 
                  color: "#FF8906", 
                  fontSize: "20px", 
                  width: "100px",
                  marginRight: "30px", 
                }}
                to={"/MyCourses"}
              >
                <p>Mis cursos</p>
              </NavLink>

              <Box>
                <NavLink to={"/MyCourses"}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    {/* <input hidden accept="image/*" type="file" /> */}
                
                    <FavoriteIcon />
                  
                  </IconButton>
                </NavLink>
              </Box>


              <Box>
                <NavLink to={"/Notifications"}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    {/* <input hidden accept="image/*" type="file" /> */}
                
                    <NotificationsIcon />
                  
                  </IconButton>
                </NavLink>
              </Box>

              
            </div>
          ) : null}
          <div 
              style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                gap: "10px",
                marginLeft: "-200px",
                
              }}
          >
            <Box>
              <NavLink to={"/Cart"} >
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  {/* <input hidden accept="image/*" type="file" /> */}
                  <ShoppingCartIcon />
                </IconButton>
              </NavLink>
            </Box>
            <Box
              sx={{
                display: "flex",
                /* width: "100%", */
                alignItems: "center",
                justifyContent: "center",
                color: "text.primary",
                borderRadius: 1,
                p: 0,
              }}
            >
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <DarkModeIcon color="primary"  />
                ) : (
                  <LightModeIcon color="primary"  />
                )}
              </IconButton>
            </Box>
          </div>

          {estadoUsuario === 1 ? (
            <>
              <Box>
                <MenuAvatar />
              </Box>
            </>
          ) : null}

          {estadoUsuario === 0 ? <SingInButtons themeMode={themeMode} /> : null}
          </div>
        {/* </Toolbar> */}
        </div>
      </AppBar>
    </>
  );
}
