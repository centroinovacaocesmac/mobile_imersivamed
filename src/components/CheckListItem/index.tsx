import { FontAwesome6 } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

interface CheckListItemProps {
    label?: string;
    isSelected?: boolean;
    onPress?(): void;
}

export default function CheckListItem({label, isSelected, onPress}: CheckListItemProps){
    return(
        <TouchableOpacity className="bg-white border-[0.4px] border-mainColorVariant2 rounded-lg flex flex-row justify-between items-center w-96 h-auto p-4 gap-2" onPress={onPress}>
            <Text className="flex-1 text-base font-medium color-blackColor2">{label}</Text>
            <FontAwesome6 name={isSelected ? "check-circle" : "circle"} size={16} color={isSelected ? "#8068E3" : "#6F51EC"}/>
        </TouchableOpacity>
    )
}