import { ImageSourcePropType, Text, View } from "react-native";
import { Image } from "react-native";

interface TitleProps {
    textOne?: string;
    textTwo?: string;
    nameClassOne?: string;
    nameClassTwo?: string;
    nameClassTextOne?: string;
    nameClassTextTwo?: string;
    nameClassImage?: string;
    imageSource?: ImageSourcePropType;
}

export default function Title({textOne, textTwo, nameClassOne, nameClassTwo, nameClassTextOne, nameClassTextTwo, nameClassImage, imageSource}: TitleProps){
    return(
        <View className={nameClassOne}>
            <Text className={nameClassTextOne}>{textOne}</Text>
            <View className={nameClassTwo}>
                <Text className={nameClassTextTwo}>{textTwo}</Text>
                <Image source={imageSource} className={nameClassImage}/>
            </View>
        </View>
    )
}