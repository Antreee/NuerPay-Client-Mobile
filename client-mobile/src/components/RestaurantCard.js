import { TouchableOpacity, View, Text, Image } from "react-native"
import homeStyles from '../../assets/styles/homeStyles';
import fontStyles from '../../assets/styles/fontStyles';

export default function RestaurantCard({ resto, navigation }) {

   function doDetail(id) {
      navigation.navigate('RestaurantScreen', { id })
   }

   return (
      <TouchableOpacity onPress={() => doDetail(resto._id)}>
         <View style={homeStyles.mainCard}>
            <View style={homeStyles.cardImg}>
               <Image style={homeStyles.imgStyle} source={{ uri: resto.logoUrl }} />
            </View>
            <View style={homeStyles.cardDsc}>
               <Text
                  style={fontStyles.cardRestoTitle}>{resto.name}
               </Text>
               <Text
                  style={fontStyles.cardRestoAddress}>{resto.address}
               </Text>
               <Text
                  style={fontStyles.cardRestoNation}>Indonesian
               </Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}