import React from 'react';
import { View, Text, Image} from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Turnover = () => {
    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                {/* left side*/}
                <View style={styles.leftWrapper}>
                    <Image source={{uri: 'https://cdn-icons.flaticon.com/png/512/1043/premium/1043849.png?token=exp=1639353574~hmac=7dc9e20bebe54963e23905d1bdb16d6c'}} style={styles.image}/>
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
