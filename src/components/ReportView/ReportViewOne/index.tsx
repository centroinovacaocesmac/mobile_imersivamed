import { Text, View } from "react-native";
import { router } from "expo-router";
import Button from "@components/Button";

interface ReportViewOneProps {
    title?: string;
    subtitleOne?: string;
    subtitleTwo?: string;
    correct?: number;
    error?: number; 
}

export default function ReportViewOne({title, subtitleOne, subtitleTwo, correct, error}: ReportViewOneProps){
    return(
        <View className="bg-white flex flex-col rounded-t-[20px] w-screen h-auto px-4 py-8 gap-8">
            <View className="flex flex-row justify-center items-center">
                <Text className="color-blackColor2 text-2xl font-normal text-center">{title}</Text>
            </View>
            <View className="flex flex-row justify-between items-center">
                <View className="flex flex-col-reverse justify-center items-center border-[0.4px] border-mainColorVariant2 rounded-[10px] w-40 h-auto p-3">
                    <Text className="color-grayColor1 text-xl font-normal">{subtitleOne}</Text>
                    <Text className="color-blackColor2 text-4xl font-bold">{correct}</Text>
                </View>
                <View className="flex flex-col-reverse justify-center items-center border-[0.4px] border-mainColorVariant2 rounded-[10px] w-40 h-auto p-3">
                    <Text className="color-grayColor1 text-xl font-normal">{subtitleTwo}</Text>
                    <Text className="color-blackColor2 text-4xl font-bold">{error}</Text>
                </View>
            </View>
            <Button nameClass="bg-mainColor flex flex-row justify-center item-center rounded-lg p-4 w-auto h-auto" name="Sair" nameClassText="color-white text-xl" iconClass="hidden" onPress={() => router.push("/(tabs)/Home")}/>
        </View>
    )
}