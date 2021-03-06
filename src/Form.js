import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    tag: "",
    sinonimo: "",
    frase: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("EXIBINDO O CONTEUDO DO PROPS - Form");
    console.log(this.props)
    this.props.onSubmit(this.state);
    // clear form
    this.setState({
      tag: "",
      sinonimo: "",
      frase: ""
    });
  };

  render() {
    return (
      <form>
        <TextField
          name="tag"
          hintText="TAG"
          floatingLabelText="TAG"
          value={this.state.tag}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="sinonimo"
          hintText="SINÔNIMOS"
          floatingLabelText = "SINÔNIMOS"
          value={this.state.sinonimo}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name = "frase"
          hintText = "Frase Ativação"
          floatingLabelText="Frase de Ativação"
          value={this.state.frase}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
