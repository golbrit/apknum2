import { StyleSheet, Text, View } from 'react-native';
import Home from './telas/Home';
import Receitas from './telas/Receitas';
import { useState } from 'react';


export default function App() {
const[navegacao, steNavegacao] = useState('home');
const navegar= (tela)=>{
  steNavegacao(tela);
}

  const renderizacao = ()=>{
    switch (navegacao) {
      case 'home':
        return <Home navegar={navegar}></Home>
        
      case 'receitas':
        return <Receitas navegar={navegar}></Receitas>

    
      default:
          <Text>
            Pagina não encontrada!!
            Error 404
          </Text>
        break;
    }
}

  return (
    <View style={styles.container}>
      {renderizacao()}
    </View>
    
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
