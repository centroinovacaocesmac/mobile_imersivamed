import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import Constants  from "expo-constants";

export default function Home(){
    const statusBarHeight = Constants.statusBarHeight;

    return(
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={"dark-content"}/>
            <ScrollView style={{ marginTop: statusBarHeight + 8}} showsVerticalScrollIndicator={false} className="flex-1 px-4">
                <View className="flex gap-10 pb-4">
                    <View className="flex-1">
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}