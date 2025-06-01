import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";

interface InputFielProps {
  name?: string;
  placeholderName?: string;
  icon?: string;
  iconSize?: number;
  iconColor?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export default function InputFiel({placeholderName, icon, iconSize = 16, iconColor = "#4F4F4F", secureTextEntry, value, onChangeText, onFocus, onBlur}: InputFielProps){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    }

    const isPassword = !!secureTextEntry;

  return(
    <View className="w-full mb-4">
      <View className="flex-row items-center bg-white border border-grayColor4 rounded-[10px] px-3 py-2">
        {icon && (<FontAwesome6 className="mr-2" name={icon} size={iconSize} color={iconColor}/>)}
        <TextInput className="flex-1 text-base text-black" placeholder={placeholderName} placeholderTextColor="#BDBDBD" secureTextEntry={isPassword && !isPasswordVisible} value={value} onChangeText={onChangeText} onFocus={onFocus} onBlur={onBlur}/>

        {isPassword && (
            <TouchableOpacity onPress={togglePasswordVisibility}>
                <FontAwesome6 name={isPasswordVisible ? "eye" : "eye-slash"} size={16} color="#E0E0E0"/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
}