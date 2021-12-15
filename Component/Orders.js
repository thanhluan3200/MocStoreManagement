import React from 'react';
import { View, Text, Image} from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Orders = () => {
    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                {/* left side*/}
                <View style={styles.leftWrapper}>
                    <Image source={{uri: 'https://cdn-icons.flaticon.com/png/512/4304/premium/4304491.png?token=exp=1639354101~hmac=00639fdf61ee9117502c7e3387c7cfa7'}} style={styles.image}/>
                </View>
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>Orders</Text>
                    <Text style={styles.titleVn}>Đơn Hàng</Text>
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
export default Orders
