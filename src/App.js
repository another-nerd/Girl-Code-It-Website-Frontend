import React, { Component } from "react";
import Navbar from "./commons/Components/Navbar";
import Footer from "./commons/Components/Footer";
import Homepage from "./all_components/Homepage";
// import OppCalendarDetails from "./all_components/OppCalendarDetails";
import ComingSoon from "./all_components/ComingSoon";
import CodeMapDetails from "./all_components/CodeMapDetails";
import OneCodeMapDetails from "./all_components/OneCodeMapDetails";
import MeetTeam from "./all_components/MeetTeam";
import Review from "./all_components/Review";
import Error from "./all_components/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <div>
                  <Homepage />
                </div>
              )}
            />
            <Route
              exact
              path="/oppcalendar"
              render={(props) => (
                <div>
                  <ComingSoon />
                </div>
              )}
            />
            <Route
              exact
              path="/codemaps"
              render={(props) => (
                <div>
                  <CodeMapDetails />
                </div>
              )}
            />
            <Route
              exact
              path="/onecodemap"
              render={(props) => (
                <div>
                  <OneCodeMapDetails />
                </div>
              )}
            />
            <Route
              exact
              path="/meettheteam"
              render={(props) => (
                <div>
                  <MeetTeam />
                </div>
              )}
            />
            <Route
              exact
              path="/reviews"
              render={(props) => (
                <div>
                  <Review />
                </div>
              )}
            />
            <Route
              exact
              path="*"
              render={(props) => (
                <div>
                  <Error />
                </div>
              )}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
