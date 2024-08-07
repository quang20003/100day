import React from "react";
import { StyleSheet, Text, View,Dimensions, Image  } from "react-native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
const { width } = Dimensions.get('window');
const images = [
    'https://tech24.vn/upload/post/images/2023/12/20/323/anh-gai-k8-7.jpg',
    'https://topshare.vn/wp-content/uploads/2022/07/gai-xinh-cute-12.jpg',
    'https://thuthuatnhanh.com/wp-content/uploads/2022/12/hinh-gai-k7-k8-2k7-2k8-an-tuong.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGsPuHzwLsvY8D2EByvtTD5Tjsf6I6YpdPA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSadttjy-jQIsv1oZXaZMgPYTmydoM4PqGRSw&s',
  ];
  
export default function Restaurant() {
    return(
        <View style={styles.container}>
            <View>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={3}
                    autoplayLoop
                    index={0}
                    showPagination
                    >
                    {images.map((image, index) => (
                    <View style={styles.child} key={index}>
                        <Image source={{ uri: image }} style={styles.image} />
                    </View>
                    ))}
                </SwiperFlatList>
            </View>
            <View>
                
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFFFFF'
      },
      child: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF', // Màu nền để kiểm tra hiển thị
      },
      image: {
        width,
        height: 250,
        resizeMode: 'cover',
      },
})