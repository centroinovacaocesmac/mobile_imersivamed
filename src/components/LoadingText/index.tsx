import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function LoadingText(){
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev.length >= 3 ? "" : prev + "."));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return(
        <View className="flex-1 bg-white justify-center items-center">
            <Text className="text-grayColor3 text-center text-base">
                Carregando conteúdo{dots}
            </Text>
        </View>
    )
}