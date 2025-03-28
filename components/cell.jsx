import { View,Text,StyleSheet } from "react-native"

const Cell = ()=><View style={styles.container}><Text>X</Text></View>


const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderStyle:"solid",
        borderColor:"black",
        width:50,
        height:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Cell

