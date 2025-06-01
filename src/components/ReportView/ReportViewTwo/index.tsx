import { Text, View } from "react-native";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAssessmentStore } from "@services/assessment.services";
import Button from "@components/Button";

interface ReportViewTwoProps {
    title?: string;
    subtitleOne?: string;
    subtitleTwo?: string;
    subtitleThree?: string;
    correct?: number;
    error?: number;
    suggestion?: string;
    questions?: number
}

export default function ReportViewTwo({title, subtitleOne, subtitleTwo, subtitleThree, correct, error, suggestion, questions}: ReportViewTwoProps){
    const { results } = useAssessmentStore();
    const showSuggestionIcon = results.incorrect > results.correct;

    return(
        <View className="bg-white flex flex-col 
        w-screen rounded-t-3xl px-4 py-8 gap-4">
            <View>
                <Text className="colorbla2 text-2xl font-medium text-center">{title}</Text>
            </View>
            <View className="flex flex-row gap-2 w-full">
                <View className="flex-1 flex-row justify-between items-center border-[0.4px] border-mainColorVariant2 rounded-lg h-14 px-2 gap-2">
                    <View className="flex flex-row items-center gap-1">
                        <FontAwesome name="check-circle" color="#4F4F4F" size={16}/>
                        <Text className="color-blackColor2 text-xl font-normal">{subtitleOne}:</Text>
                    </View>
                    <View>
                        <Text className="color-blackColor2 text-xl font-normal">{correct}/{questions}</Text>
                    </View>
                </View>
                <View className="flex-1 flex-row justify-between items-center border-[0.4px] border-mainColorVariant2 rounded-lg h-14 px-2 gap-2">
                    <View className="flex flex-row items-center gap-1">
                        <FontAwesome name="times-circle" color="#4F4F4F" size={16}/>
                        <Text className="color-blackColor2 text-xl font-normal">{subtitleTwo}:</Text>
                    </View>
                    <View>
                        <Text className="color-blackColor2 text-xl font-normal">{error}/{questions}</Text>
                    </View>
                </View>
            </View>
            <View className="flex flex-col border-[0.4px] border-mainColorVariant2 rounded-lg p-3 gap-2 bg-white">
            <View className="flex flex-row items-center gap-2 mb-1">
                <FontAwesome6 name={showSuggestionIcon ? "book" : "trophy"} color="#4F4F4F" size={16} />
                <Text className="text-blackColor2 text-lg font-medium">{subtitleThree}:</Text>
            </View>
            {suggestion ? (
                <Text className="text-blackColor2 text-xl font-normal">{suggestion}</Text>
            ) : (
                <Text className="text-gray-400 text-xl">Sem sugestão no momento</Text>
            )}
            </View>
            <Button nameClass="bg-mainColor flex flex-row justify-center item-center rounded-lg p-4 w-auto h-auto" name="Sair" nameClassText="color-white text-xl" iconClass="hidden" onPress={() => router.push("/(tabs)/Home")}/>
        </View>
    )
}