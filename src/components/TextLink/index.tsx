import { Text, TouchableOpacity, View } from "react-native";

interface TextLinkProps {
    textOne?: string;
    textTwo?: string;
    onPrees?(): void;
}

export default function TextLink({textOne, textTwo, onPrees}: TextLinkProps){
    return(
        <View className="flex flex-row justify-center gap-2">
            <Text className="text-lg color-blackColor3">{textOne}</Text>
            <TouchableOpacity onPress={onPrees}>
                <Text className="text-lg underline color-mainColor">{textTwo}</Text>
            </TouchableOpacity>
        </View>
    )
}