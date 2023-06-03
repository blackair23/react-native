import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native"
import { useLayoutEffect } from 'react'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from "../ItemCard/ItemCard";

const Discover: React.FC = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])    

    return(
        <SafeAreaView className="flex-1">
            <View className="m-5">
                <Text className="text-black text-2xl font-bold">It's a big world,</Text>
                <Text className="text-black text-2xl font-bold">Let's Discover it!</Text>
            </View>
            <View className="flex flex-row p-2">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <Text className="text-black text-lg font-bold bg-gray-200 rounded-full py-2 px-3 mx-1 items-center justify-center">Experiences</Text>
                        <Text className="text-black text-lg font-bold bg-gray-200 rounded-full py-2 px-3 mx-1 items-center justify-center">Adventure</Text>
                        <Text className="text-black text-lg font-bold bg-gray-200 rounded-full py-2 px-3 mx-1 items-center justify-center">Activiries</Text>
                </ScrollView>
            </View>

            <Text className="text-black text-lg font-bold  m-5 mt-8">Deals</Text>
        <View className="px-4 flex-row items-center justify-evenly flex-wrap">
            <ItemCard />
        </View>

        </SafeAreaView>
    )
}

export default Discover;