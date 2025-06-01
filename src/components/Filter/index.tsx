import { View, TextInput } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

interface FilterInputProps {
  placeholderName?: string;
  icon?: string;
  iconSize?: number;
  iconColor?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export default function FilterInput({placeholderName = "Buscar exercício", icon = "magnifying-glass", iconSize = 16, iconColor = "#4F4F4F", value, onChangeText, onFocus, onBlur}: FilterInputProps){
  return(
    <View className="w-full mb-4">
      <View className="flex-row items-center bg-white border border-grayColor4 rounded-[10px] px-3 py-2">
        {icon && (<FontAwesome6 className="mr-2" name={icon} size={iconSize} color={iconColor}/>)}
        <TextInput className="flex-1 text-base text-black" placeholder={placeholderName} placeholderTextColor="#BDBDBD" value={value} onChangeText={onChangeText} onFocus={onFocus} onBlur={onBlur}/>
      </View>
    </View>
  )
}