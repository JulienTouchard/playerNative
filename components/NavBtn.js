import { Image,StyleSheet} from "react-native";
const NavBtn = (props)=>{
    console.log(props.icone)
    return(
        <Image source={{
            uri: props.icone
        }}
            style={styles.imgIcone}
        />
    )
}
const styles = StyleSheet.create({
        imgIcone:{
            width:60,
            height:60,
            backgroundColor:'#333333'
        }
    })

export default NavBtn;