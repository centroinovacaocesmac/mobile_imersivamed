import { LayoutAnimation, Platform, Text, TouchableOpacity, UIManager, View } from "react-native";
import { ReactNode, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";

interface AccordionProps {
    title?: string;
    desc?: ReactNode;
}

export default function Accordion({title, desc}: AccordionProps){
    const [open, setOpen] = useState(false);

    if(Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental){
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const toggleAccordion = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpen(!open);
    }

    return(
        <View className="flex flex-col gap-2">
            <TouchableOpacity className="border-[0.4px] border-mainColorVariant2 rounded-lg flex flex-row justify-between items-center w-96 h-auto p-4 gap-2" onPress={toggleAccordion}>
                <Text className="flex-1 text-lg font-medium color-blackColor2" numberOfLines={open ? undefined : 1}>{title}</Text>
                <FontAwesome6 name="chevron-down" size={14} color="#282828" className="" style={{transform: [{rotate: open ? "180deg" : "0deg"}], transitionDuration: "200ms"}}/>
            </TouchableOpacity>
            {open && <Text className="text-base text-justify font-normal border-[0.4px] border-mainColorVariant2 rounded-lg flex flex-row items-center w-96 h-auto p-4">{desc}</Text>}
        </View>
    )
}