import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Table from "./Table";
import Button from "./Button";
import {tryy} from "./try";

injectTapEventPlugin();

class App extends Component {
  state = {
    data: [],
    dialog: []
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })}
          />
          <Table
            multiSelectable = {true}
            selectable = {false}
            data={this.state.data}
            header={[
              {
                name: "Tag",
                prop: "tag"
              },
              {
                name: "Sinonimos",
                prop: "sinonimo"
              },
              {
                name: "Frase ativação",
                prop: "frase"
              }
            ]}
          />
          <button onClick = {tryy}> CRIAR DIALOGO</button>
          {/* <Button 
            onSubmit = {
              submission =>
              this.setState({
                dialog: [submission]
              })
            }
          /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
