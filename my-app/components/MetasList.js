import { ScrollView } from "react-native";

function MetasList(props)
{
    return{
        <ScrollView>
            {props.array.map((meta,index)=> <Text key={index} style={StyleSheet.item}>meta</Text>)}]
        </ScrollView>    
    }

};

export default MetasList;