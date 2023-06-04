import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Details = () => {
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <ScrollView>
                <View className='relative bg-white shadow-lg m-3'>
                    <Image 
                        source={{uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}}
                        className='w-full h-72 object-cover rounded-2xl'
                    />

                    <View className=' absolute flex-row inset-x-0 top-5 justify-between px-6'>
                        <TouchableOpacity className='w-10 h-10 rounded-md items-center justify-center bg-white'>

                        </TouchableOpacity>
                        <TouchableOpacity className='w-10 h-10 rounded-md items-center justify-center bg-[#06b2be]'>

                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Details;