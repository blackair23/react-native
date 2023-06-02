import { useLayoutEffect } from 'react';


import { Text, View, Image, Button, Touchable, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return(
        <SafeAreaView className='flex-1'>
            
            <View className='absolute top-0 bottom-0 left-0 right-0'>
                <Image source={{
                    uri: "https://images.unsplash.com/photo-1604334270628-35da53cbc063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                }}
                    className=' w-full h-full object-cover'
                />
            </View>

            <View className='m-5'>
                <Text className='text-white font-bold text-5xl my-2'>Explore.</Text>
                <Text className='text-black font-bold text-5xl my-2'>Travel.</Text>
                <Text className='text-black font-bold text-5xl my-2'>Inspire.</Text>
            </View>

            <View className='mx-5 text-black'>
                <Text className='text-black'>
                    Life is all about journey
                </Text>
                <Text className='text-black'>
                    Find yours.
                </Text>
            </View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Discover')}
                className='absolute left-0 right-0 bottom-11 items-center'
            >
                <View >
                    <Text className=' bg-[#22b3ae] py-3 px-20 rounded-full text-lg font-bold'>Get Started -{'>'}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home;