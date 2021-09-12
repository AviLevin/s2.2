import React, { useState, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import UserList from "../../components/UserList/UserList";
import UserListFavorite from "../../components/UserList/UserListFavorite";
import Text from "../../components/Text/Text";
import { useHistory } from "react-router";

// FUNCTION tabpanel of material UI
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const NavBar = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };
  const history = useHistory();

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Navigation"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Home" index={0} onClick={() => history.push("/")} />
          <Tab label="Favorites" index={1} onClick={() => history.push("/favorite")} />
        </Tabs>
      </AppBar>

      {/* -----TAB HOME ----------*/}
      {/* <TabPanel value={value} index={0}>
        <Text size="64px" bold>
          PplFinder
        </Text>
        <UserList />
      </TabPanel> */}

      {/* -----TAB FAVORITE USERS ---------*/}
      {/* <TabPanel value={value} index={1}>
        <Text size="64px" bold>
          PplFinder
        </Text>
        <UserListFavorite />
      </TabPanel> */}
    </div>
  );
};

export default NavBar;
