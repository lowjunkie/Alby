import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {COLORS, SIZES, SHADOWS, assets } from '../constants'

const NFTCard = ({data}) => {
  const navigation = useNavigation()
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{width:"100%", height:250}}>
        <Image
          source={data.Image}
          resizeMode="cover"
          style={{
            width:"100%",
            height:"100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
      </View>
      <Text>NFTCard</Text>
    </View>
  )
}

export default NFTCard