import { View,Text,StyleSheet } from "react-native"

const Cell = ({value})=><View style={styles.container}><Text>{value === -1 ?"" : value === 0 ? "O":"X" }</Text></View>


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

