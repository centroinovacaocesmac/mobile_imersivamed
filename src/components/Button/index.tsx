import { Text, TouchableOpacity} from "react-native"
import { FontAwesome6 } from "@expo/vector-icons"

interface ButtonProps {
    name?: string;
    nameClass?: string;
    nameClassText?: string;
    icon?: string;
    iconSize?: number;
    iconColor?: string;
    iconClass?: string;
    onPress?(): void;
    disabled?: boolean;
}

export default function Button({name, nameClass, nameClassText, icon, iconSize, iconColor, iconClass, onPress, disabled = false}: ButtonProps){
    return(
        <TouchableOpacity className={nameClass} onPress={onPress} disabled={disabled}>
            <FontAwesome6 className={iconClass} name={icon} size={iconSize} color={iconColor}/>
            <Text className={nameClassText}>{name}</Text>
        </TouchableOpacity>
    )
}