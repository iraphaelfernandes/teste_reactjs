import React, {Component} from 'react';


class Mybutton extends Component{
  render(){
    return <button
    onClick={() =>{this.props.handleClick(this.props.label);}}
    >
    {this.props.label}
    </button>

  }
}
/*todo componente tem o this.props e o this.state 
 *tudo que você passa como parâmetro para o component é dito como this.props
 *O state representa o estado, simples assim.
*/
class MyLabel extends Component{
  render(){
    return(
        <p>Click no: {this.props.text}</p> 
    )
  }
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      labelText: '',
    }
  }

  setLabelText = (labelText) =>{
    this.setState({labelText});
    
  }
  render(){
    return(
    <div className="App">
      <MyLabel text={this.state.labelText}/>
      <Mybutton handleClick={this.setLabelText} label="Botão 1"/>
      <Mybutton handleClick={this.setLabelText} label="Botão 2"/>
      <Mybutton handleClick={this.setLabelText} label="Botão 3"/>
      <Mybutton handleClick={this.setLabelText} label="Botão 4"/>
    </div>)
  }
}
export default App;
