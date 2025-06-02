import { useEffect, useState } from "react";
import { Text } from "react-native";

export default function LoadingText(){
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev.length >= 3 ? "" : prev + "."));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return(
        <Text className="text-grayColor3 text-center text-base">
            Carregando conteúdo{dots}
        </Text>
    )
}