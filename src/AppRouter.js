import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ThemeProvider from "./theme/ThemeProvider";
import NavBar from "./components/NavBar";
import { AppProvider } from "./AppContext";
import UserLists from "./components/UserList/UserList";
import UserListsFavorite from "./components/UserList/UserListFavorite";
import Text from "./components/Text/Text";

const AppRouter = () => {
  return (
    <AppProvider>
      <ThemeProvider>
        <Router>
          <NavBar />
          <Text size="64px" bold>
            PplFinder
          </Text>
          <Switch>
            <Route exact path="/" component={UserLists} />
            <Route exact path="/favorite" component={UserListsFavorite} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AppProvider>
  );
};

export default AppRouter;
