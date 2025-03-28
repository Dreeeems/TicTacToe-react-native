import { View ,StyleSheet} from "react-native"
import Cell from "./cell"
import { useState } from "react"

const Board = ({size})=>{
        const [cellStatus, setCellStatus] = useState(Array(size*size).fill(-1))

        const renderRow = (index) =>{
            let row = []
            for (let i = 0; i< size ; i++){
                row.push(<Cell value={cellStatus[index * size + i]}/>)
            }
            return row 
        }

    return(
<View style={styles.container}>
 {[...Array(size).keys()].map((rowIndex) => {
    return (<View style={styles.rowContainer}>{renderRow(rowIndex)}</View> )})}
</View>)
}


const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column"

    },
    rowContainer:{
        display:"flex",
        flexDirection:"row"
    }

})

export default Board

