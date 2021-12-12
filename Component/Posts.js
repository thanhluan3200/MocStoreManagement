import React from 'react';
import { View, Text, Image} from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Turnover = () => {
    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                {/* left side*/}
                <View style={styles.leftWrapper}>
                    <Image source={{uri: 'https://cdn-icons.flaticon.com/png/512/1043/premium/1043838.png?token=exp=1639326584~hmac=6862e2fa6c9c10faffe82e1d36a61c1b'}} style={styles.image}/>
                </View>
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>Posts</Text>
                    <Text style={styles.titleVn}>Bài Viết</Text>
                </View>
                {/* left side*/}
                <View>
                    {/* <Text>link</Text> */}
                </View>                
            </View>
        </TouchableOpacity>
        
    )
}
const styles = StyleSheet.create({
    itemWrapper:{
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
        // alignItems: 'cemter',
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 60,
        width: 60,
    },
    titlesWrapper:{
        marginLeft: 40
    },
    title:{
        fontSize: 20        
    },
    titleVn: {
        fontSize: 20 
    }

})
export default Turnover
