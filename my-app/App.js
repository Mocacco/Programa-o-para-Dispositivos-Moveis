import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, button } from 'react-native';
import { rotulo_input_meta,rotulo_btn_cadastro_meta,rotulo_lista_metas } from './mensagens';

export default function App() 
{
  return (
    <View style={styles.main_container}>
    <View style={{width:'60%', position:'absolute', left:5, top:30}}>
      <TextInput style={styles.inputText} placeholder={rotulo_input_meta}/>
    </View>
    
    <View style={{width:'40%', position:'absolute', right:5, top:30}}>
      <button title={rotulo_btn_cadastro_meta}/>
    </View> 

    <View style={{width:150, position:'absolute', left:5, top:80}}>
      <text> const rotulo_lista_metas </text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_container:
  {
    padding : 30,
  },
  inputText:
  {
    borderColor : '#ccccccc',
    borderWidth : 1,
  }
});

console.log(rotulo_btn_cadastro_meta);
console.log(rotulo_input_meta);
console.log(rotulo_lista_metas);
