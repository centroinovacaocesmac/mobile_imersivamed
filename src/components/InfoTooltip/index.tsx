import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import Button from "@components/Button";

interface InfoTooltipProps {
    title?: string;
    messageOne?: string;
    messageTwo?: string;
}

export default function InfoTooltip({title, messageOne, messageTwo}: InfoTooltipProps){
    const [visible, setVisible] = useState(false);

    return(
        <>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <FontAwesome6 name="circle-info" size={20} color="#A394E4" />
            </TouchableOpacity>
            <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}> 
                <Pressable className="flex-1 justify-center items-center bg-black/30" onPress={() => setVisible(false)}>
                    <View className="bg-grayColor4 flex flex-col justify-between rounded-lg gap-8 px-4 py-4 w-96 h-fit shadow-lg">
                        <Text className="text-base text-blackColor1 font-medium">{title}</Text>
                        <View className="flex flex-col gap-2">
                            <Text className="text-base text-grayColor1">{messageOne}</Text>
                            <Text className="text-base text-grayColor1">{messageTwo}</Text>
                        </View>
                        <Button name="Fechar" nameClass="bg-mainColor self-end px-8 py-2 rounded-[6px]" nameClassText="text-white text-sm font-medium" iconClass="hidden" onPress={() => setVisible(false)}/>
                    </View>
                </Pressable>
            </Modal>
        </>
    )
}