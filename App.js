import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
  } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'GO',
      ultimo: null
    };

    this.timer = null;

    this.Go = this.Go.bind(this);
    this.Clear = this.Clear.bind(this);
  }

  Go(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'GO'});
    }else{
      this.timer = setInterval(() =>{
        this.setState({numero: this.state.numero + 0.1})
      }, 100);

      this.setState({botao: 'STOP'});
    }
    
  }
  Clear(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({ultimo: this.state.numero , numero: 0, botao: 'GO'})
  }


  render(){
    return (
      <View style={styles.container}>
        
        <Image
        source={require('./src/cronometro.png')}
        style={styles.cronometro}
        />

        <Text style={styles.timer} >{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.Go}>
            <Text style={styles.btnTxt}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.Clear}>
            <Text style={styles.btnTxt}>CLEAR</Text>
          </TouchableOpacity>
        
        </View>
        <View style={styles.areaUltimo}>
          <Text style={styles.txtUltimo}>
            {this.state.ultimo > 0 ? 'Last Time: ' + this.state.ultimo.toFixed(1) +'s' : ''}
            </Text>
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F4F3F'
  },
  timer: {
    marginTop: -160,
    color:'white',
    fontSize:65,
    fontWeight: 'bold'
  }, 
  btnArea:{
    flexDirection: 'row',
    marginTop: 80,
    height: 40,
  },
  btn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 18,
    borderRadius: 9,
  },
  btnTxt:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F4F3F'
  },
  areaUltimo:{
    marginTop: 50,
  },
  txtUltimo:{
    fontSize:20,
    fontStyle: 'italic',
    color: 'white'
  }
});

export default App;
