import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';  
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';  
import { rotulo_input_meta, rotulo_btn_cadastro_meta, rotulo_lista_metas } from './mensagens';

export default function App() {
  const [InputMetaText, setInputMetatext] = useState('');
  const [metas, setMetas] = useState([]);

  function metaInputHandler(inputText) {
    setInputMetatext(inputText);
  }

  function adicionarMetaHandler() {
    setMetas([...metas, InputMetaText]);
    setInputMetatext('');  
  }

  return (
    <View style={styles.main_container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
        <View style={{width: '65%'}}>
          <TextInput 
            style={styles.inputText} 
            placeholder={rotulo_input_meta}
            onChangeText={metaInputHandler}  
            value={InputMetaText}  
          />
        </View>
      
        <View style={{width: '30%'}}>
          <Button 
            title={rotulo_btn_cadastro_meta}
            onPress={adicionarMetaHandler}
          />
        </View>
      </View>

      <ScrollView style={styles.metaContainer}>  
        {metas.map((meta, index) => <Text key={index}style={styles.item}>{meta}</Text>)} 
        
      </ScrollView>

      <View style={styles.metaContainer}>  
        <Text>{rotulo_lista_metas}</Text>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  main_container: {
    padding: 30,
    flex: 1,
    flexDirection: 'column'
  },
  inputText: {
    borderColor: '#cccccc',  
    borderWidth: 1,
    padding: 8  
  },
  metaContainer: {  
    flex: 1,
    paddingTop: 20  
  },
  item:{
    margin: 8,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'lightblue',

  }
});