import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

interface CardOneProps {
    name?: string;
    nameClass?: string;
    icon?: string;
    iconSize?: number;
    iconColor?: string;
    iconClass?: string;
    onPress?(): void;
}

export default function CardOne({name, nameClass, icon, iconSize, iconColor = "#FFFFFF", iconClass, onPress}: CardOneProps){
    return(
        <View className="flex flex-col gap-4 w-32">
            <TouchableOpacity className="bg-mainColor flex flex-row justify-center items-center w-auto h-32 rounded-[22px]" onPress={onPress}>
                <View className={nameClass}>
                    <FontAwesome6 className={iconClass} name={icon} size={iconSize} color={iconColor}/>
                </View>
            </TouchableOpacity>
            <View className="w-auto">
                <Text className="color-blackColor2 text-lg font-normal text-center">{name}</Text>
            </View>
        </View>
    )
}