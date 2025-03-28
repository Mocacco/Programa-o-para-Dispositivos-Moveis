import { StatusBar } from 'expo-status-bar';
import { use, useState } from 'react';
import { StyleSheet, Text, TextInput, View, button } from 'react-native';
import { rotulo_input_meta,rotulo_btn_cadastro_meta,rotulo_lista_metas } from './mensagens';

export default function App() 
{
  const[InputMetaText, setInputMetatext] = useState('');
  const[metas, setMetas] = useState([]);   
  return (
    <View style={styles.main_container}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
     <View style = {{width: '65%'}}>
        <TextInput style={styles.inputText} placeholder={rotulo_input_meta}/>
      </View>
    
      <View style = {{width: '30%'}}>
        <button title={rotulo_btn_cadastro_meta}/>
      </View>

    </View> 

    <View style = {styles.metaConteiner}>
      <text> const rotulo_lista_metas </text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    alignItems: 'center',
    justifyContent: 'center'
  },
  main_container:
  {
    padding : 30,
    flex: 1,
    flexDirection: 'column'
  },
  inputText:
  {
    borderColor : '#ccccccc',
    borderWidth : 1,
  },
  metaConteiner:
  {
    flex: 1,
  }
});

console.log(rotulo_btn_cadastro_meta);
console.log(rotulo_input_meta);
console.log(rotulo_lista_metas);
