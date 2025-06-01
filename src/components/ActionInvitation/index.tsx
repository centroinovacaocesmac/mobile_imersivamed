import { Text, View } from "react-native";
import Button from "@components/Button";

interface ActionInvitationProps {
    text?: string;
    nameClass?: string;
    nameClassButton?: string;
    nameClassText?: string;
}

export default function ActionInvitation({text, nameClass, nameClassButton, nameClassText}: ActionInvitationProps){
    return(
        <View className={nameClass}>
            <Text className={nameClassText}>{text}</Text>
            <View className={nameClassButton}>
                <Button/>
                <Button/>
            </View>
        </View>
    )
}