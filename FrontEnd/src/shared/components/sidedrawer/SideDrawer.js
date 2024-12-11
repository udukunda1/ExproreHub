import React, { useState } from "react";
import { Drawer } from "@mui/material";

import './SideDrawer.css';
import settings from '../../../image/Settings eh.png';
import DarkMode from "../UI/DarkMode/DarkMode";


const RightDrawer = () => {
  // State to manage the drawer's open/close state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  // Content inside the drawer
  const drawerContent = (
    <div className="side-drawer">
    <h3 style={{fontSize: '17px'}}> <img src={settings} alt="health link settings" />Settings</h3>
    <h3>Dark Mode <DarkMode /></h3>
    <h3>Privacy Policy</h3>
    <h3>Terms and Conditions</h3>
    </div>
  );

  return (
    <div>
      {/* Button to open the drawer */}
      {/* <Button variant="contained" onClick={toggleDrawer(true)}>
        Open Right Drawer
      </Button> */}
      <img src={settings} style={{cursor: 'pointer'}} onClick={toggleDrawer(true)} alt='health link settings' />

      {/* Right Drawer */}
      <Drawer
        anchor="right"
        sx={{
            "& .MuiDrawer-paper": {
              width: "29.7vw", // Set width in viewport width
              borderRadius: '25px 0 0 25px',
              padding: '50px 20px',

            }
          }}
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default RightDrawer;
