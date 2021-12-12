import React from 'react';
import { View, Text, Image} from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Product = () => {
    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                {/* left side*/}
                <View style={styles.leftWrapper}>
                    <Image source={{uri: 'https://cdn-icons.flaticon.com/png/512/2954/premium/2954891.png?token=exp=1639324246~hmac=7031cc86738a43c7e85fac88db739a46'}} style={styles.image}/>
                </View>
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>Product</Text>
                    <Text style={styles.titleVn}>Sản Phẩm</Text>
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
export default Product
