import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};



export default class Button extends React.Component {
  state = {
    dialog: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  
  render () {
    console.log("EXIBINDO O CONTEUDO DO PROPS - Button");
    console.log(this.props);

    return (
      <div>
        {/* <RaisedButton label='Criar Dialogo' primary fullWidth style={style} onClick={e => this.onSubmit(e)}/> */}
         {/* <RaisedButton label = 'Criar Dialogo' primary fullWidth style = {style} onClick={tryy("TesteQualquerCoisa")} /> */}

        <br />
      </div>
    )
  }
}
