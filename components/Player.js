import { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { playlist } from "../playlist";
import NavBtn from "./NavBtn";


class Player extends Component {
    state = {
        currentTrack: 0,
        playlist: playlist,
    }
    render() {
        return (
            <View style={{width:'100%'}}>
                <Image source={{
                    //require(this.state.playlist[this.state.currentTrack].cover)
                    uri: this.state.playlist[this.state.currentTrack].cover
                }}
                    style={styles.slider}
                />
                <View style={styles.navigation}>
                   <NavBtn icone={"https://images-ext-1.discordapp.net/external/9F4vUDN1FrkadHp6j5uZS2_JcboV0WcxEhM4d-dmYuM/https/img.icons8.com/ios-glyphs/500/skip-to-start--v1.png"}/> 
                   <NavBtn icone={"https://images-ext-2.discordapp.net/external/oiYxOTwUG0RKUDkKJKnUDwhZMIl83ZxoXPMTsQ9wzo8/https/img.icons8.com/fluency-systems-filled/500/play.png"}/> 
                   <NavBtn icone={"https://images-ext-1.discordapp.net/external/NxBV6i6f7MdvoXwKUB6sgVuR7tFrO81d6dJb6jGCOsc/https/img.icons8.com/ios-glyphs/500/end--v1.png"}/> 
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    navigation:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    slider:{ width: '100%',
    height:300,
    backgroundColor: 'skyblue' }
})
export default Player;