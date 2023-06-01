import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
    return(
        <SafeAreaView>
            <View>
                <Text className='text-black font-bold text-3xl'>Explore.</Text>
                <Text className='text-black font-bold text-3xl'>Travel.</Text>
                <Text className='text-black font-bold text-3xl'>Inspire.</Text>
            </View>
            <View>
                <Text className='text-black'>
                    Life is all about journey
                    Find yours.
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Home;