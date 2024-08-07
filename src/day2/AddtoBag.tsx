import { useState } from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
export default function AddtoBag () {
    const [selectedSize, setSelectedSize] = useState('S');
    const [selectedImg,setSelectedImg] = useState(require('../../asset/img/aopolo.jpg'))
    const handleSelect = (size: any) => {
      setSelectedSize(size);
    };
    const handleSelectedImg = (img :any) => {
    setSelectedImg(img)
    }
    return (
        <View style={style.container}>
            <View style={style.conten}>
                <View>
                    <Image style={style.image} source={selectedImg}/>
                </View>
                <View>
                    <TouchableOpacity onPress={ () => handleSelectedImg(require('../../asset/img/aopolo.jpg'))}>
                        <Image style={style.image1} source={require('../../asset/img/aopolo.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> handleSelectedImg(require('../../asset/img/polo.jpg'))}>
                        <Image  style={style.image1} source={require('../../asset/img/polo.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> handleSelectedImg(require('../../asset/img/oo.jpg'))}>
                        <Image style={style.image1} source={require('../../asset/img/oo.jpg')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.contentProduct}>
                <Text style={style.title}>POLO RALPHI</Text>
                <Text style={style.name}>CUSTOM FIT POLO BEAR OXFORD SHIRT</Text>
                <View style={style.contentPrice}>
                    <Text style={style.price}>$99.00</Text>
                    <Text style={style.discount}>-25%</Text>
                </View>
                <Text style={style.originalPrice}>$132.00</Text>
            </View>
            <View style={style.contentsiize}>
                <Text style={style.textchooosize}>CHOOSE SIZE</Text>
                <View style={style.choosesize}>
                    {['S', 'M', "L", "XL", "XXL"].map((size) => (
                        <TouchableOpacity
                            key={size}
                            onPress={() => handleSelect(size)}
                            style={[
                                style.sizeButton,
                                selectedSize === size && style.selectedSizeButton,
                            ]}
                            >
                               <Text style={style.sizeText}>{size}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <TouchableOpacity style={style.addtobag}>
                <Text style={style.textAddtobag}>ADD TO BAG</Text>
            </TouchableOpacity>
        </View>
    )
}

export const style = StyleSheet.create ({
    container: {
        marginHorizontal: 12,
        backgroundColor:'#8D9191',
        height:600,
        margin:30,
        borderRadius: 25,
        elevation: 30,
    },
    image: {
        height: 250,
        width: 200,
        borderRadius:10
    },
    image1: {
        height: 80,
        width: 80,
       margin:2,
       marginLeft:15,
        borderRadius:10
    },
    conten: {
        flexDirection: 'row',
        marginTop: 20,
        
    },
    title: {
        color:'#0C7489',
        fontWeight:'bold',
        fontSize: 12,
    },
    name: {
        fontWeight:'bold',
        color:'#000',
    },
    contentPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    discount: {
        marginLeft: 30,
        backgroundColor:'#0C7489',
        width: 50,
        textAlign: 'center',
        height: 20,
        alignItems: 'center',
        justifyContent:'center',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    contentProduct: {
        marginTop: 30,
    },
    choosesize: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    contentsiize: {
        marginTop: 30,
    },
    sizeButton: {
        padding: 10,
        marginTop: 5,
      },
      selectedSizeButton: {
        backgroundColor: '#000', 
        
      },
      sizeText: {
        textAlign: 'center',
        color:"#FFFFFF",
      },
      textchooosize: {
        fontWeight:'700',
        color:'#000',
      },
      originalPrice: {
        textDecorationLine: 'line-through',
        color: '#000',
        fontSize: 16,
      },
      addtobag: {
        backgroundColor:'#079CDC',
        width: 300,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:5,
        marginTop: 30,
      },
      textAddtobag: {
        color:'#FFFFFF',
        fontWeight:'500'
      }
})