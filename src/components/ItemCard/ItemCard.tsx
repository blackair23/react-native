import { useNavigation } from "@react-navigation/native";
import { Image, View, Text, TouchableOpacity } from "react-native"

const ItemCard = () => {

    const navigation = useNavigation<any>();

    return(
        <>
        
        <TouchableOpacity
            className="rounded-[15px] border-grey-300 space-y-2 px-2 py-2   bg-white w-[160px] my-2"
            onPress={() => navigation.navigate("Details")}
        >
            <Image source={{
                uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}}
                className=' w-full h-40 rounded-[12px] object-cover'
            />
            <Text className="text-black font-bold">Name</Text>
            <Text className="text-black font-bold">location</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            className="rounded-[15px] border-grey-300 space-y-2 px-2 py-2   bg-white w-[160px] my-2"
            onPress={() => navigation.navigate("Details")}
        >
            <Image source={{
                uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}}
                className=' w-full h-40 rounded-[12px] object-cover'
            />
            <Text className="text-black font-bold">Name</Text>
            <Text className="text-black font-bold">location</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            className="rounded-[15px] border-grey-300 space-y-2 px-2 py-2   bg-white w-[160px] my-2"
            onPress={() => navigation.navigate("Details")}
        >
            <Image source={{
                uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}}
                className=' w-full h-40 rounded-[12px] object-cover'
            />
            <Text className="text-black font-bold">Name</Text>
            <Text className="text-black font-bold">location</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            className="rounded-[15px] border-grey-300 space-y-2 px-2 py-2   bg-white w-[160px] my-2"
            onPress={() => navigation.navigate("Details")}
        >
            <Image source={{
                uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}}
                className=' w-full h-40 rounded-[12px] object-cover'
            />
            <Text className="text-black font-bold">Name</Text>
            <Text className="text-black font-bold">location</Text>
        </TouchableOpacity>
        
        <View className="rounded-[15px]  border-grey-300 space-y-2 px-2 py-2   bg-white w-[160px] my-2">
           <Image source={{
               uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}}
               className=' w-full h-40 rounded-[12px] object-cover'
           />
           <Text className="text-black font-bold">Name</Text>
           <Text className="text-black font-bold">location</Text>
        </View>
        
        <View className="rounded-[15px]  border-grey-300 space-y-2 px-2 py-2   bg-white w-[160px] my-2">
            <Image source={{
                uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}}
                className=' w-full h-40 rounded-[12px] object-cover'
            />
            <Text className="text-black font-bold">Name</Text>
            <Text className="text-black font-bold">location</Text>
        </View>
        
        <View className="rounded-[15px]  border-grey-300 space-y-2 px-2 py-2   bg-white w-[160px] my-2">
           <Image source={{
               uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}}
               className=' w-full h-40 rounded-[12px] object-cover'
           />
           <Text className="text-black font-bold">Name</Text>
           <Text className="text-black font-bold">location</Text>
       </View>
       </>
    )
}


export default ItemCard;