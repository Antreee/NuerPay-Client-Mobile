import { StyleSheet, Dimensions, ColorPropType } from "react-native";
import Color from "../../src/assets/Color";
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 25,
      paddingBottom: 50,
   },
   restoListWrap: {
      flex: 1
   },
   iconSmall: {
      width: 15,
      height: 15,
      marginRight: 10,
   },
   navIcon: {
      width: 25,
      height: 25,
   },
   background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 50,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
   },
   headerApp: {
      height: 50,
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.0)',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
   },
   appImg: {
      backgroundColor: '#EEEBDD',
      height: 40,
      width: 40,
      borderRadius: 100,
      marginRight: 10,
   },
   searchWrap: {
      height: 60,
      width: width,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',

   },
   search: {
      backgroundColor: '#F4F4F4',
      height: 30,
      borderWidth: 1,
      borderColor: '#797A7E',
      width: '80%',
      borderRadius: 10,
      marginRight: 10,
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: 'bold',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
   },
   contentWrap: {
      flex: 1,
      width: width,
      alignItems: 'center',
   },
   contentMenuWrap: {
      height: 500,
      width: width,
      alignItems: 'center',
   },
   titleWrap: {
      height: 50,
      width: '90%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
   },
   redBox: {
      backgroundColor: 'red',
      height: 15,
      width: 5,
      borderRadius: 100,
      marginRight: 5,
   },
   contentTitle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   carouselWrap: {
      height: 200,
      width: width,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      // borderWidth: 1
   },

   carouselImg: {
      height: 200,
      width: width,
   },


   //? == Style Detail Resto == //
   doubleBtn: {
      height: 35,
      width: width / 2 / 2.2,
      alignSelf: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: -20,
      marginRight: 30
   },
   btnMap: {
      backgroundColor: Color.red,
      height: 35,
      width: 35,
      borderRadius: 4,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      borderColor: Color.gray,
      elevation: 14,
      justifyContent: 'center',
      alignItems: 'center'
   },
   restaurantAddress: {
      width: width / 1.1,
      // borderWidth: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   restaurantAddressIcon: {},
   restaurantAddressText: {
      width: 300,
      color: Color.dark,
   },
   restaurantAvailable: {
      width: width / 1.1,
      height: 35,
      // borderWidth: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      marginTop: 5,
      // justifyContent: 'space-between',
   },
   restaurantAddressIcon: {},
   btnLove: {
      backgroundColor: Color.white,
      height: 35,
      width: 35,
      borderRadius: 100,
      shadowColor: "#000",
      borderColor: Color.gray,
      shadowOffset: {
         width: 0,
         height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14,
      justifyContent: 'center',
      alignItems: 'center'
   },
   headTitleWrap: {
      width: width / 1.1,
      alignSelf: 'center',
      marginBottom: 10,
   },
   headTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Color.dark,
      marginBottom: 2
   },
   cuisine: {
      color: Color.darkGray
   },
   restoAddress: {
      width: width / 1.1,
      alignSelf: 'center',
      flexDirection: 'row',
      marginBottom: 10,
   },
   restoAddressIcon: {
      marginRight: 3
   },
   restoAddressText: {
      color: Color.dark
   },
   restoAvailable: {
      width: width / 1.1,
      alignSelf: 'center',
      flexDirection: 'row',
      marginBottom: 25,
   },
   available: {
      color: Color.dark
   },
   availableOpen: {
      color: Color.red,
      fontWeight: 'bold'
   },
   menuListWrap: {
      width: width / 1.1,
      alignSelf: 'center',
      flexDirection: 'row',
   },
   menuListItem: {
      height: 30,
      width: width / 1.1,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Color.red,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15
   },
   menuCategoryName: {
      color: Color.white,
      fontWeight: 'bold',
      fontSize: 18
   },
   listWrapper: {
      width: width / 1.1,
      flexDirection: 'row',
   },
   itemListItem: {
      width: width / 2.3,
      paddingBottom: 10,
      paddingTop: 10,
      alignItems: 'center',
      backgroundColor: Color.white,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      flexDirection: 'column',
      justifyContent: 'center',
      elevation: 4,
      marginBottom: 15,
      marginRight: 10
   },
   imgCardMenu: {
      width: '90%',
      height: 100,
      borderRadius: 5,
      borderWidth: 1,
   },
   itemListItemLeft: {
      alignItems: 'center'
   },
   itemListItemName: {
      fontSize: 14,
      fontWeight: 'bold',
      color: Color.dark,
   },
   itemListItemPrice: {
      fontSize: 12.5,
      color: Color.dark,
   },
   itemListItemRight: {
      alignItems: 'center',
      padding: 3
   },
   itemListItemDesc: {
      fontSize: 12,
      color: Color.dark
   },
   orderList: {
      borderTopColor: Color.gray,
      borderTopWidth: 1,
      paddingTop: 3,
      marginTop: 5,
      width: '90%',
      justifyContent: 'space-between',
      flexDirection: 'row',
   },
   itemCounter: {
      color: Color.red,
      marginRight: 5,
      marginLeft: 5,
   },
   groupOrderView: {
      flexDirection: 'row',
   },
   addChart: {
      backgroundColor: Color.red,
      paddingRight: 5,
      width: 60,
      borderRadius: 5,
      paddingLeft: 6,
      paddingRight: 6,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },
   btnAddChart: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

   },
   textAddChart: {
      color: Color.white,
      fontWeight: 'bold'
   },

   //? == Style Profil User == //
   profilHead: {
      width: width,
      height: 250,
      borderBottomLeftRadius: 150,
      borderBottomRightRadius: 150,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Color.red,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      // zIndex: 5,
      // marginTop: -300,
   },
   welcomeHome: {
      marginTop: -150,
      color: Color.white,
      fontSize: 30,
   },
   profilPic: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: Color.white,
      zIndex: 100,
      marginTop: -200
   },
   profilInfo: {
      width: width / 1.1,
      alignSelf: 'center',
      height: '100%',
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      marginTop: -80,
      paddingTop: 120,
      backgroundColor: Color.white,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      // zIndex: 3
   },
   profilInfoLabel: {
      color: Color.darkGray,
      fontSize: 13
   },
   infoWrap: {
      width: '80%',
      // borderWidth: 1,
      alignSelf: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 30,
   },
   profilInfoInputWrap: {
      width: width / 1.1,
      flexDirection: 'row',
      alignItems: 'center',
   },
   iconInput: {
      marginRight: 10,
   },
   profilInfoInput: {
      color: Color.dark,
      fontWeight: 'bold',
   },
   btnButtomWrap: {
      width: width / 1.1,
      marginTop: -15,
      flexDirection: 'row',
      justifyContent: 'center',
   },
   btnLogout: {
      width: 60,
      height: 60,
      backgroundColor: Color.red,
      borderRadius: 100,
      shadowColor: "#000",
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      margin: 10
   },
   btnFavo: {
      margin: 10,
      width: 60,
      height: 60,
      backgroundColor: Color.white,
      borderRadius: 100,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      justifyContent: 'center',
      alignItems: 'center',
   },
   cardFavHis: {
      height: 100,
      alignSelf: 'center',
      justifyContent: 'space-between',
      width: width / 1.2,
      marginBottom: 15,
      backgroundColor: Color.white,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: 'row',

   },
   cardWrapAll: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 10
   },
   badgeTitle: {
      alignSelf: 'center',
      height: 10,
      width: width / 4,
      backgroundColor: Color.gray,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },
   badgeTitle2: {
      alignSelf: 'center',
      justifyContent: 'center',
      height: 10,
      width: width / 4,
      backgroundColor: Color.gray,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },
   inputMoney: {
      width: 94,
      height: 40,
      backgroundColor: Color.white,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },
   inputWrapAll: {
      width: width / 1.3,
      paddingBottom: 20,
      paddingTop: 20,
      backgroundColor: Color.white,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      height: 150,
      borderRadius: 5,
      paddingLeft: 10,
      justifyContent: 'space-between',
      flexDirection: 'column',

   },
   profileCardWrap: {
      flexDirection: 'column',
      alignSelf: 'center',
      borderRadius: 5,
      width: width / 2.4,
      height: 70,
      backgroundColor: Color.white,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },
   cardMoney: {
      height: 50,
      width: 130,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Color.red,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      alignSelf: 'center',
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },
})

export default styles;