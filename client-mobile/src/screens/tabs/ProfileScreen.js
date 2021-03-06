import { View, Text, FlatList, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import styles from "../../../assets/styles/styles";
import Color from "../../assets/Color";
import Fontisto from "react-native-vector-icons/Fontisto";
const width = Dimensions.get("window").width;
import Svg, { Path } from "react-native-svg"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Modal, Portal, Provider } from 'react-native-paper';
import { useState } from "react";

function ProfileScreen(props) {
   const [visible, setVisible] = useState(false);

   const showModal = () => setVisible(true);
   const hideModal = () => setVisible(false);
   const containerStyle = {
      backgroundColor: 'white',
      padding: 20,
      height: 300,
      width: width - 40,
      alignSelf: 'center',
      borderRadius: 10,
   };

   if (visible) {
      return (
         <Provider>
            <Portal>
               <Modal
                  visible={visible}
                  onDismiss={hideModal}
                  contentContainerStyle={containerStyle}>
                  <View style={{
                     height: 210,
                     width: 210,
                     alignSelf: 'center',
                     alignItems: 'center',
                     justifyContent: 'center',
                     backgroundColor: Color.white,
                     borderRadius: 10,
                     shadowColor: "#000",
                     shadowOffset: {
                        width: 0,
                        height: 2,
                     },
                     shadowOpacity: 0.23,
                     shadowRadius: 2.62,
                     elevation: 4,
                  }}>
                     <Image
                        source={require("../../assets/qr.png")}
                        style={{
                           height: 200,
                           width: 200,
                           alignSelf: 'center',
                        }}
                     />
                  </View>
               </Modal>
            </Portal>
         </Provider>
      );
   }

   function portionBtn(item) {
      return (
         <View
            style={{
               backgroundColor: Color.white,
               alignItems: "center",
               width: 335,
               borderRadius: 10,
               height: 350,
               justifyContent: "center",
               marginLeft: 10,
               marginRight: 10,
               // padding: 10,
            }}
         >
            <Image source={item.image} style={{ width: 300, height: 310, borderRadius: 10 }} />
            <Text style={{
               fontWeight: "bold", color: Color.dark,
               fontSize: 20, marginTop: 5,
            }}>{item.name}</Text>
            <Text style={{ color: Color.darkGray, fontSize: 15 }}>{item.role}</Text>
         </View>
      );
   }

   return (
      <View style={styles.container}>
         <ScrollView>
            <View style={styles.headwrapper}>
               <View style={styles.logoWrapper}>
                  <Image
                     source={require("../../../assets/newLogo.png")}
                     style={styles.logo}
                  />
               </View>
               <View style={styles.barAndLove}>
                  <TouchableOpacity style={styles.barIcon}
                     onPress={showModal}>
                     <Ionicons
                        name="qr-code-sharp"
                        size={30}
                        color={Color.white}
                     />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.barIcon}>
                     <Ionicons
                        name="heart"
                        size={30}
                        color={Color.white}
                     />
                  </TouchableOpacity>
               </View>
            </View>
            <View style={{
               height: 50,
               width: width,
               alignItems: 'center',
               justifyContent: 'center',
               paddingLeft: 10,
            }}>
               <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={160.72}
                  height={31.28}
                  {...props}
               >
                  <Path
                     stroke={Color.dark}
                     fill={Color.dark}
                     d="m132.52 26.56.6 1.52q-2.48 1.76-4.96 1.76a4.475 4.475 0 0 1-1.76-.323q-1.867-.792-2.31-3.527a9.468 9.468 0 0 1-.05-.35q-3.935 3.443-6.929 4.064a6.26 6.26 0 0 1-1.271.136 5.369 5.369 0 0 1-1.502-.2 4.13 4.13 0 0 1-1.798-1.06 4.039 4.039 0 0 1-1.001-1.719q-.194-.64-.243-1.412a8.437 8.437 0 0 1-.016-.529q0-1.4.94-4.54a2301.94 2301.94 0 0 0 .325-1.087q.529-1.771.712-2.395a38.756 38.756 0 0 0 .063-.218 17.339 17.339 0 0 1-2.698-1.371Q106.8 12.884 106.8 9.24a6.75 6.75 0 0 1 1.64-4.397 10.218 10.218 0 0 1 1.4-1.383 10.964 10.964 0 0 1 3.632-2.02A10.202 10.202 0 0 1 116.6.96a7.467 7.467 0 0 1 1.995.243q3.125.868 3.125 4.837 0 2.588-1.828 8.702a113.449 113.449 0 0 1-.132.438q-1.96 6.46-1.96 8.24a2.761 2.761 0 0 0 .078.688q.282 1.092 1.582 1.092 1.306 0 3.366-1.509A21.307 21.307 0 0 0 124 22.76q.092-1.562.442-3.593a54.34 54.34 0 0 1 .238-1.287q1.379-7.319 3.242-11.326a17.195 17.195 0 0 1 .838-1.594 12.296 12.296 0 0 1 1.311-1.82q.812-.918 1.701-1.45a4.963 4.963 0 0 1 2.588-.73q1.406 0 2.286.615a2.839 2.839 0 0 1 .534.485 3.794 3.794 0 0 1 .805 1.636q.133.573.135 1.243a6.818 6.818 0 0 1 0 .021q0 4.581-5.048 11.712a70.449 70.449 0 0 1-2.712 3.568q-.12 1.56-.12 3.16a15.027 15.027 0 0 0 .033 1.043q.11 1.569.585 2.057a.679.679 0 0 0 .502.22q.68 0 1.16-.16zM18.76 2v-.4a40.531 40.531 0 0 1 3.241-.475A29.611 29.611 0 0 1 25.04.96l2.4.16a7.471 7.471 0 0 1 .651 1.58q.231.787.36 1.732A18.118 18.118 0 0 1 28.6 6.22q.111 3.002.153 10.058a1160.078 1160.078 0 0 1 .007 1.242 27.505 27.505 0 0 1 4.916 2.741 23.416 23.416 0 0 1 2.484 2.019 2.308 2.308 0 0 1-.255.547q-.14.224-.338.444a3.89 3.89 0 0 1-.027.029 5.798 5.798 0 0 1-.323.326q-.158.146-.308.259a2.677 2.677 0 0 1-.229.155l-.4.24a22.893 22.893 0 0 0-5.045-3.726 25.734 25.734 0 0 0-.435-.234q.08 2.28.44 3.84.422 1.928.957 2.404a.543.543 0 0 0 .363.156 2.414 2.414 0 0 0 .376-.032q.303-.048.664-.168l.6 1.56q-2.329 1.485-4.487 1.717a7.416 7.416 0 0 1-.793.043 3.499 3.499 0 0 1-3.335-1.932q-.825-1.551-.825-4.348v-5.24q-2.614-.635-4.775-.816a22.19 22.19 0 0 0-.305-.024 51.612 51.612 0 0 1-2.183 5.037Q11.075 31.28 5.56 31.28a5.975 5.975 0 0 1-2.038-.336A5.226 5.226 0 0 1 1.58 29.7a5.527 5.527 0 0 1-1.134-1.596A4.925 4.925 0 0 1 0 26.02q0-2.1 1-3.92 1-1.82 2.86-3.38a12.149 12.149 0 0 1 1.994-1.344q1.272-.694 2.866-1.236 3-1.02 6.64-1.14 2.12-5.24 3.76-11.72a2.476 2.476 0 0 0 .023-.182q.017-.189.017-.438 0-.364-.366-.636A1.478 1.478 0 0 0 18.76 2zm50.32 10.92.04-.52a22.811 22.811 0 0 1 2.073-.319q1.087-.12 2.359-.181a57.801 57.801 0 0 1 2.728-.06q.193.502.2 1.788a17.922 17.922 0 0 1 0 .092 6.405 6.405 0 0 1-.053.742q-.149 1.232-.708 3.595a103.781 103.781 0 0 1-.359 1.463q-1.112 4.41-1.12 5.505a2.144 2.144 0 0 0 0 .015 2.149 2.149 0 0 0 .032.387q.122.661.71.692a1.122 1.122 0 0 0 .058.001q.855 0 1.905-.456a9.108 9.108 0 0 0 .775-.384q.131-.788.586-2.76a202.998 202.998 0 0 1 .214-.92q1.434-6.374 1.44-9.137a10.712 10.712 0 0 0 0-.023q1.352-.541 4.793-.559A45.85 45.85 0 0 1 85 11.88h.76a11.102 11.102 0 0 1-.053.994q-.147 1.593-.694 4.467a135.905 135.905 0 0 1-.373 1.879q-1.008 4.913-1.109 6.166a2.998 2.998 0 0 0-.011.234q0 .796.287.918a.286.286 0 0 0 .113.022.577.577 0 0 0 .145-.031q.462-.141 2.135-.929l.76 1.28a19.822 19.822 0 0 1-1.881 1.397q-2.096 1.359-3.842 1.536a5.107 5.107 0 0 1-.517.027 3.786 3.786 0 0 1-1.134-.164 3.176 3.176 0 0 1-1.046-.556 2.661 2.661 0 0 1-1.015-1.835 3.283 3.283 0 0 1-.005-.045 16.842 16.842 0 0 1-1.775 1.276q-2.188 1.352-4.071 1.364a5.299 5.299 0 0 1-.034 0 3.481 3.481 0 0 1-1.129-.176 2.951 2.951 0 0 1-1.171-.744 2.984 2.984 0 0 1-.728-1.282q-.172-.594-.172-1.338 0-1.7 1.04-5.84a126.267 126.267 0 0 0 .354-1.44q.675-2.828.686-3.614a1.819 1.819 0 0 0 0-.026q0-.94-1.44-2.5zM38.72 28.96l-.6-.28a16.214 16.214 0 0 1-3.289.774 13.974 13.974 0 0 1-1.711.106q-.226-.188-.239-1.738a23.283 23.283 0 0 1-.001-.202 7.86 7.86 0 0 1 .079-.935Q33.3 24.046 35.12 16.1a197.188 197.188 0 0 0 .927-4.245q1.102-5.351 1.279-8.153a15.646 15.646 0 0 0 .034-.982q0-.43-.09-1.023a13.625 13.625 0 0 0-.11-.617 20.27 20.27 0 0 1 3.329-.858A16.154 16.154 0 0 1 43.12 0q.145.407.185.983a6.654 6.654 0 0 1 .015.457 16.029 16.029 0 0 1-.097 1.609q-.271 2.616-1.29 7.374a202.934 202.934 0 0 1-.653 2.937 12.382 12.382 0 0 1 1.451-.905q.771-.404 1.488-.608a5.121 5.121 0 0 1 1.401-.207 4.121 4.121 0 0 1 3.012 1.285 5.745 5.745 0 0 1 .308.335 5.021 5.021 0 0 1 .894 1.597q.486 1.372.486 3.343a22.9 22.9 0 0 1-.213 3.229q-.234 1.64-.726 2.983A9.935 9.935 0 0 1 48.14 26.8a8.711 8.711 0 0 1-1.512 1.652 5.788 5.788 0 0 1-3.788 1.388q-1.16 0-2.34-.28t-1.78-.6zm58-16.84h3.88q-.08 1-.68 2.32-1.52-.16-2.88-.16h-.72a298.294 298.294 0 0 0-.625 3.109q-1.214 6.22-1.215 8.009a4.089 4.089 0 0 0 0 .002q0 .992.366 1.136a.364.364 0 0 0 .134.024 1.219 1.219 0 0 0 .272-.041q.656-.159 2.331-.933a53.343 53.343 0 0 0 .057-.026l.72 1.32q-2.23 1.854-4.256 2.547a7.227 7.227 0 0 1-2.344.413 3.649 3.649 0 0 1-1.092-.157 2.972 2.972 0 0 1-1.208-.723 2.938 2.938 0 0 1-.85-1.687 4.146 4.146 0 0 1-.05-.653q0-1.46.34-3.3a83.854 83.854 0 0 1 .292-1.495q.273-1.342.648-3.005.537-2.379.818-3.943a42.506 42.506 0 0 0 .062-.357q-1.473.119-2.193.239a8.651 8.651 0 0 0-.007.001 4.722 4.722 0 0 1-.042-.333q-.035-.376-.038-.893a16.332 16.332 0 0 1 0-.074 9.225 9.225 0 0 1 .014-.528q.015-.25.044-.464a3.864 3.864 0 0 1 .062-.348h2.52a30.001 30.001 0 0 0 .275-2.606A24.735 24.735 0 0 0 91.4 8.04l-.04-1.24v-.12q3.12-1.08 5.88-1.08.12.597.15 1.416a15.812 15.812 0 0 1 .01.584 7.429 7.429 0 0 1-.037.679q-.122 1.299-.643 3.841zm51.201 15.652a4.738 4.738 0 0 0 1.639-3.652 3.637 3.637 0 0 0-.022-.399q-.104-.946-.698-2.001a21.842 21.842 0 0 0-.337-.58q-.328-.544-.585-.879a3.427 3.427 0 0 0-.238-.281q-.44-.46-.72-.74a25.75 25.75 0 0 0 .018-.02q2.422-2.706 2.422-4.24 0-.896-.433-1.576a3.101 3.101 0 0 0-.847-.864 3.416 3.416 0 0 0-.099-.067q-1.277-.833-3.721-.833-2.54 0-4.34 1.1a4.84 4.84 0 0 0-.345.232q-.709.521-1.072 1.215a3.51 3.51 0 0 0-.383 1.653 2.506 2.506 0 0 0 .001.057q.035 1.549 1.977 3.91a25.034 25.034 0 0 0 1.262 1.413q3.24 3.38 3.24 5.22 0 1.28-1.48 1.4-.7-1.75-1.615-2.986a8.029 8.029 0 0 0-1.665-1.694 2.837 2.837 0 0 0-.279.098q-.592.243-1.333.815a13.035 13.035 0 0 0-.748.627q-1.061.955-1.318 1.508a.758.758 0 0 0-.082.312 1.3 1.3 0 0 0 .15.578q.24.483.863 1.03a8.76 8.76 0 0 0 .647.512 5.404 5.404 0 0 0 .975.557q1.447.643 3.525.643 2.84 0 5.06-1.6a6.669 6.669 0 0 0 .581-.468zM60.84 11.64l1.44.08a3.124 3.124 0 0 1 1.262-.351 3.755 3.755 0 0 1 .258-.009q2.892 0 3.137 4.991a19.748 19.748 0 0 1 .023.969q1.64-.08 3.32-.44l.64-.16.24 1.56a11.549 11.549 0 0 1-1.016.371q-.537.17-1.173.327a29.031 29.031 0 0 1-1.371.302l-.8.16a18.159 18.159 0 0 1-1.505 4.71 15.841 15.841 0 0 1-1.575 2.59 8.233 8.233 0 0 1-2.014 1.949 6.953 6.953 0 0 1-3.946 1.151 6.304 6.304 0 0 1-1.901-.273A4.959 4.959 0 0 1 53.44 27.9a6.502 6.502 0 0 1-1.139-2.22q-.283-.935-.376-2.058a13.868 13.868 0 0 1-.045-1.142 13.852 13.852 0 0 1 .577-4.07 11.644 11.644 0 0 1 1.803-3.57 7.59 7.59 0 0 1 5.528-3.147 10.171 10.171 0 0 1 1.052-.053zm.2 2.44.2-.4a.705.705 0 0 0-.167-.057q-.079-.017-.17-.022a1.347 1.347 0 0 0-.063-.001 1.161 1.161 0 0 0-.125.006q-.137.015-.221.065a.323.323 0 0 0-.014.009q-1 .64-1.88 3a13.609 13.609 0 0 0-.711 2.87 18.201 18.201 0 0 0-.169 2.53 12.739 12.739 0 0 0 .074 1.441q.166 1.45.704 2.169a1.685 1.685 0 0 0 1.422.71 2.714 2.714 0 0 0 1.639-.572q.428-.316.829-.807a7.428 7.428 0 0 0 .552-.781q1.34-2.16 1.86-4.56a11.327 11.327 0 0 1-.058 0q-4.019-.021-4.212-2.901a4.458 4.458 0 0 1-.01-.299q0-1.28.52-2.4zm-46.68 3.36a13.421 13.421 0 0 0-4.022.921A11.379 11.379 0 0 0 6.84 20.6q-2.748 2.565-2.979 4.828a4.062 4.062 0 0 0-.021.412 4.644 4.644 0 0 0 .078.891q.279 1.421 1.563 1.538a2.629 2.629 0 0 0 .239.011q3.84 0 8.64-10.84zm28.6-2.4q-.76 0-2.28.72-1.825 7.697-1.997 11.065a15.672 15.672 0 0 0-.003.055q1.2.52 2.28.52a1.747 1.747 0 0 0 1.183-.489q.763-.681 1.357-2.311 1.02-2.8 1.02-6.18a11.059 11.059 0 0 0-.05-1.106q-.111-1.098-.467-1.666a1.175 1.175 0 0 0-1.043-.608zM22.034 4.12a2.675 2.675 0 0 0-.034 0 2.293 2.293 0 0 0-.097.002q-.146.006-.211.033a.172.172 0 0 0-.012.005 17.599 17.599 0 0 1-.3 1.691q-.707 3.196-2.82 9.229a29.212 29.212 0 0 1 2.426.255 36.617 36.617 0 0 1 1.774.305q0-9.84-.44-11.48-.074-.037-.286-.04zm113.686.76a2.149 2.149 0 0 0-.032-.387q-.121-.661-.71-.692a1.122 1.122 0 0 0-.058-.001 1.071 1.071 0 0 0-.78.561q-1.212 1.692-2.641 8.479a143.53 143.53 0 0 0-.619 3.12q1.8-2.36 3.32-5.66 1.52-3.3 1.52-5.42zm-21.64 8.92q1.4-4.88 1.4-7.28 0-2.4-1.7-2.4a3.768 3.768 0 0 0-2.219.735 5.631 5.631 0 0 0-.881.785 5.672 5.672 0 0 0-.932 1.336 4.486 4.486 0 0 0-.468 2.004q0 1.82 1.4 3.04t3.4 1.78zm40.758 15.942a3.733 3.733 0 0 0 .882.098 3.278 3.278 0 0 0 1.401-.304 3.722 3.722 0 0 0 1.059-.756 4.391 4.391 0 0 0 .19-.202 3.294 3.294 0 0 0 .87-2.238 4.07 4.07 0 0 0-.098-.92 2.762 2.762 0 0 0-.662-1.28 2.342 2.342 0 0 0-.292-.267q-.433-.332-1.027-.465a3.945 3.945 0 0 0-.861-.088q-1.42 0-2.46 1.02a4.198 4.198 0 0 0-.048.048 3.265 3.265 0 0 0-.992 2.372 4.201 4.201 0 0 0 .098.934A2.852 2.852 0 0 0 153.56 29a2.46 2.46 0 0 0 1.278.742zm1.48-11.64a3.733 3.733 0 0 0 .882.098 3.278 3.278 0 0 0 1.401-.304 3.722 3.722 0 0 0 1.059-.756 4.391 4.391 0 0 0 .19-.202 3.294 3.294 0 0 0 .87-2.238 4.07 4.07 0 0 0-.098-.92 2.762 2.762 0 0 0-.662-1.28 2.342 2.342 0 0 0-.292-.267q-.433-.332-1.027-.465a3.945 3.945 0 0 0-.861-.088q-1.42 0-2.46 1.02a4.198 4.198 0 0 0-.048.048 3.265 3.265 0 0 0-.992 2.372 4.201 4.201 0 0 0 .098.934 2.852 2.852 0 0 0 .662 1.306 2.46 2.46 0 0 0 1.278.742zm-11.198-.782.6.52a7.268 7.268 0 0 0 .774-.762q.906-1.05.906-2.078a1.424 1.424 0 0 0-.143-.661q-.305-.59-1.256-.709a4.211 4.211 0 0 0-.521-.03 3.68 3.68 0 0 0-.645.053q-.375.067-.68.218a2.106 2.106 0 0 0-.195.109 1.931 1.931 0 0 0-.275.207q-.136.126-.215.261a.764.764 0 0 0-.11.392 1.311 1.311 0 0 0 .124.518q.31.711 1.395 1.738a16.023 16.023 0 0 0 .241.224z"
                  />
               </Svg>
            </View>
            <View style={{
               // height: 185,
               width: width,
               padding: 10,
            }}>
               <Text style={{
                  color: Color.darkGray,
                  textAlign: 'justify',
                  lineHeight: 20,
               }}>{`    Introducing NuerPay (read NewerPay), a smart and sophisticated mobile app that elevates your dining experience. There is no need for waiting in line anymore, you could just book your favourite restaurant directly from our app. We will remind you when your booked time is coming.`}</Text>
               <Text style={{
                  color: Color.darkGray,
                  textAlign: 'justify',
                  lineHeight: 20,
               }}>{`    After you get there, you will be greeted by our custom QR Code on your table that you can scan, order, and pay directly from our app! Gone is the day where you wait for waiters to get the menus, take your orders and the best of all, no more getting wrong orders!`}</Text>
            </View>

            {/* <View style={{
               width: width / 1.1,
               height: 200,
               alignSelf: 'center',
               alignItems: 'center',
               justifyContent: 'center',
               shadowColor: "#000",
               shadowOffset: {
                  width: 0,
                  height: 2,
               },
               shadowOpacity: 0.25,
               shadowRadius: 3.84,
               elevation: 5,
               backgroundColor: Color.white,
               borderRadius: 10,
               flexDirection: 'row'
            }}>
               <View style={{
                  width: width / 2.6,
                  borderWidth: 1,
                  height: 190,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  padding: 10,
                  justifyContent: 'center',
               }}>
                  <Text style={{
                     fontWeight: 'bold',
                     color: Color.dark
                  }}>Tomy</Text>
                  <Text style={{
                     color: Color.darkGray,
                     fontSize: 12,
                  }}>Full Stack - Leader</Text>
                  <Text style={{
                     fontSize: 12,
                     // fontWeight: 'bold',
                     color: Color.dark
                  }}>Economic</Text>
               </View>
               <View style={{
                  width: width / 2,
                  borderWidth: 1,
                  height: 190,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  // padding: 5,
               }}>

                  <Image
                     source={require('../../assets/image/tomy.jpg')}
                     style={{
                        width: width / 2.1,
                        height: 175,
                        borderRadius: 10,
                     }}
                  />

               </View>
            </View> */}

            <View style={{
               height: 30,
               width: width / 1.1,
               flexDirection: 'row',
               justifyContent: 'center',
               paddingLeft: 10,
            }}>
               <Text style={{ color: Color.dark, fontWeight: 'bold', fontSize: 20 }}>Co-Founders</Text>
            </View>
            <View style={{
               height: 30,
               width: width / 1.1,
               flexDirection: 'row',
               justifyContent: 'flex-end',
               paddingLeft: 10,
            }}>
               <Fontisto
                  name="arrow-right-l"
                  size={30}
                  color={Color.red}
               />
            </View>
            <View style={{
               height: 400,
               width: width,
               justifyContent: 'center',
               alignItems: 'center',
               alignSelf: 'center',
               // paddingLeft: 70,
            }}>
               <FlatList
                  data={[
                     {
                        key: 1,
                        name: "Tommy",
                        role: 'Full Stack - Leader',
                        image: require('../../assets/image/tomy.jpg'),
                     },
                     {
                        key: 2,
                        name: "Aditya Furkon Hendriadi",
                        role: 'Full Stack',
                        image: require('../../assets/image/adit.jpg'),
                     },
                     {
                        key: 3,
                        name: 'Rasyid Arifin',
                        role: 'Full Stack',
                        image: require('../../assets/image/acid.jpg'),
                     },
                     {
                        key: 4,
                        name: 'Arda F.',
                        role: 'Full Stack',
                        image: require('../../assets/image/arda.jpg'),
                     },
                     {
                        key: 5,
                        name: 'Ode Afdal',
                        role: 'Front End',
                        image: require('../../assets/image/afdal.jpg'),
                     },
                  ]}
                  horizontal={true}
                  renderItem={({ item }) => portionBtn(item)}
                  keyExtractor={(item) => item.key}
               />
            </View>
            <View style={{
               width: width,
               height: 50,
               justifyContent: 'center',
               alignItems: 'center'
            }}>
               <Text style={{ color: Color.dark, fontWeight: 'bold', fontSize: 20 }}>Our Partners</Text>
            </View>
            <View style={styles.ourPartnerWrap}>
               <View style={styles.ourPartnerBox}>
                  <Image
                     source={require('../../assets/partners/cuci-01.png')}
                     style={{
                        width: 300,
                        height: 90,
                        borderRadius: 10,
                     }}
                  />
               </View>
               <View style={styles.ourPartnerBox2}>
                  <Image
                     source={require('../../assets/partners/mahakarya.png')}
                     style={{
                        width: 300,
                        height: 230,
                        borderRadius: 10,
                     }}
                  />
               </View>
               <View style={styles.ourPartnerBox2}>
                  <Image
                     source={require('../../assets/partners/Logo-Palms.jpg')}
                     style={{
                        width: 260,
                        height: 120,
                        borderRadius: 10,
                     }}
                  />
               </View>
               <View style={styles.ourPartnerBox2}>
                  <Image
                     source={require('../../assets/partners/logo_gomank-01.png')}
                     style={{
                        width: 260,
                        height: 120,
                        borderRadius: 10,
                     }}
                  />
               </View>
            </View>
         </ScrollView >
      </View >
   );
}

export default ProfileScreen;
