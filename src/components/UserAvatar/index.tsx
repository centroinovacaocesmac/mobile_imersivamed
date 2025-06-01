import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

interface UserAvatarProps {
    name?: string;
    nameClassOne?: string;
    nameClassTwo?: string;
    nameClassText?: string;
    nameClassImage?: string;
    imageSource?: ImageSourcePropType;
    onPress?(): void;
}

export default function UserAvatar({name, nameClassOne, nameClassTwo, nameClassText, nameClassImage, imageSource, onPress}: UserAvatarProps){
    return(
        <TouchableOpacity className={nameClassOne} onPress={onPress}>
            <View className={nameClassTwo}>
                <Image source={imageSource} className={nameClassImage}/>
                {name && <Text className={nameClassText}>{name}</Text>}
            </View>
        </TouchableOpacity>
    )
}