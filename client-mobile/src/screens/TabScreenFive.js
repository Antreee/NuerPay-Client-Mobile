import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../assets/styles/styles";
import Color from "../assets/Color";
import users from "../../data/users"
import Ionicons from "react-native-vector-icons/Ionicons"

function TabScreenFive({ navigation }) {
   console.log(users)
   return (
      <View style={styles.container}>
         <View style={styles.profilHead}>
            <Text style={styles.welcomeHome}>Weelcome</Text>
         </View>
         <View style={styles.profilInfo}>
            <View style={styles.profilPic}>
               <Image
                  source={{ uri: users.profilePicture }}
                  style={{ height: 143, width: 143, borderRadius: 100 }}
               />
            </View>
            <View style={styles.infoWrap}>
               <View style={styles.cardFavHis}>
                  <View style={styles.profileCardWrap}>
                     <View style={styles.badgeTitle} />
                     <View style={styles.badgeTitle} />

                  </View>
                  <View style={styles.cardHisList}></View>
               </View>
               <View style={styles.profilInfoInputWrap}>
                  <Ionicons style={styles.iconInput} name="person-circle-sharp" size={19} color={Color.red} />
                  <Text style={styles.profilInfoInput}>{users.fullName}</Text>
               </View>
               <View style={styles.profilInfoInputWrap}>
                  <Ionicons name="ios-at-circle" style={styles.iconInput} size={19} color={Color.red} />
                  <Text style={styles.profilInfoInput}>{users.email}</Text>
               </View>
               <View style={styles.profilInfoInputWrap}>
                  <Ionicons name="md-call" size={19} style={styles.iconInput} color={Color.red} />
                  <Text style={styles.profilInfoInput}>{users.phoneNumber}</Text>
               </View>

            </View>
            <View style={styles.btnButtomWrap} >
               <TouchableOpacity style={styles.btnFavo}>
                  <Ionicons name="heart-outline" size={45}
                     color={Color.red} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.btnLogout}>
                  <Ionicons name="log-out-outline" size={45}
                     color={Color.white} />
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
}

export default TabScreenFive