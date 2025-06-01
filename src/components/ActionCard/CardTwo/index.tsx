import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

interface CardTwoProps {
    title?: string;
    desc?: string;
    imageSource?: ImageSourcePropType;
    onPress?():  void;
}

export default function CardTwo({title, desc, imageSource, onPress}: CardTwoProps){
    return(
        <TouchableOpacity className="flex flex-row border-[0.4px] border-mainColorVariant2 rounded-[22px] p-4 gap-4" onPress={onPress}>
            <View className="flex-1 gap-4">
                <Text className="text-xl font-semibold color-blackColor2">{title}</Text>
                <Text className="text-lg font-normal color-grayColor1">{desc}</Text>
            </View>
            <View className="flex flex-row items-center">
                <Image source={imageSource}/>
            </View>
        </TouchableOpacity>
    )
}