import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import styles from '../../assets/styles/styles'
// import restaurant from "../../data/restaurant"; // sementara
import Color from '../assets/Color'
import Carousel from 'react-native-snap-carousel'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useContext, useEffect, useRef, useState } from 'react'
import { CartContext } from '../components/Tabs'

import CardListMenu from '../components/CardListMenu'
import { useQuery } from '@apollo/client'
import { GET_RESTAURANT_BY_ID } from '../../config/queries'

function StackDetail({ route, navigation }) {
  const { id } = route.params
  //   let carouselRef = useRef()
  //   const [state, setState] = useState({
  //    activeIndex: 0,
  //    carouselItems: [],
  //  })
  const { loading, error, data } = useQuery(GET_RESTAURANT_BY_ID, {
    variables: { id, itemsByRestaurantIdId2: id },
  })
  if (loading) {
    return <Text>Loading...</Text>
  }
  if (error) {
    return <Text>error...</Text>
  }

  const restaurant = data.restaurant
  const items = data.itemsByRestaurantId
  console.log('items', items)
  // const [restaurant, setrestaurant] = useState([])

  // useEffect(() => {
  //    const { id } = route.params
  //    if (id) {
  //       const tmp = restaurant.find(item => item._id === id)
  //       setrestaurant(tmp)
  //    }
  // }, [id])

  //    let imagesList = []

  //    restaurant.mainImagesUrl.forEach(el => {
  //       if (el) {
  //          imagesList.push({ images: el })
  //       }
  //    })
  //    setState({
  //       ...state,
  //       carouselItems: imagesList
  //    })
  // }, [id])

  // const restaurant = restaurant.find(item => item._id === id)
  // console.log("🚀 ~ file: StackDetail.js ~ line 50 ~ restaurant", restaurant)

  // let imagesList = []

  // restaurant.mainImagesUrl.forEach(el => {
  //    if (el) {
  //       setState({
  //          ...state,
  //          carouselItems: { image: el }
  //       })
  //    }
  // })

  // console.log(imagesList, "==")

  const myCuisine = restaurant.cuisine.join(', ')
  const able = () => {
    if (restaurant.available) {
      return (
        <Text style={styles.available}>
          {' '}
          <Text style={styles.availableOpen}>OPEN</Text>{' '}
          {restaurant.openingHours}
        </Text>
      )
    }
  }

  const foods = items.filter((item) => item.categoryItem === 'food')
  console.log('foods', foods)
  const drinks = items.filter((item) => item.categoryItem === 'drink')
  console.log('drinks', drinks)
  const snacks = items.filter((item) => item.categoryItem === 'snack')
  console.log('snacks', snacks)
  const myMenus = [
    {
      Foods: foods,
    },
    {
      Drinks: drinks,
    },
    {
      Snacks: snacks,
    },
  ]

  //   function _renderItem({ item, index }) {
  //      return (
  //         <View style={{
  //            backgroundColor: 'floralwhite',
  //            borderRadius: 20,
  //            height: 200,
  //         }}>
  //            <ImageBackground
  //               source={item.image}
  //               style={{
  //                  flex: 1,
  //                  resizeMode: 'cover',
  //                  justifyContent: 'flex-end',
  //               }}
  //               imageStyle={{ borderRadius: 20 }}
  //            >
  //               <View style={{
  //                  backgroundColor: 'rgba(0,0,0,0.5)',
  //                  flexDirection: 'column',
  //                  justifyContent: 'space-between',
  //                  alignItems: 'center',
  //                  borderBottomRightRadius: 20,
  //                  paddingBottom: 10,
  //               }}>
  //               </View>
  //            </ImageBackground>
  //         </View>

  //      )
  //   }

  return (
    <>
      {data && (
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.carouselWrap}>
              <View style={styles.contentWrap}>
                {/* <View style={styles.carouselWrap}> */}
                {/* <Carousel
                     layout={"default"}
                     ref={carouselRef}
                     data={state.carouselItems}
                     sliderWidth={300}
                     itemWidth={300}
                     renderItem={_renderItem}
                     onSnapToItem={index => setState({ ...state, activeIndex: index })} /> */}
                {/* </View> */}
              </View>
            </View>
            <View style={styles.doubleBtn}>
              <View style={styles.btnMap}>
                <FontAwesome5 name='map-marked-alt' size={20} color={'white'} />
              </View>
              <View style={styles.btnLove}>
                <MaterialCommunityIcons
                  name='heart-outline'
                  size={25}
                  color={Color.red}
                />
              </View>
            </View>
            <View style={styles.headTitleWrap}>
              <Text style={styles.headTitle}>{restaurant.name}</Text>
              <Text style={styles.cuisine}>{myCuisine}</Text>
            </View>
            <View style={styles.restaurantAddress}>
              <View style={styles.restaurantAddressIcon}>
                <Entypo name='shop' size={20} color={Color.red} />
              </View>
              <Text style={styles.restaurantAddressText}>
                {restaurant.address}
              </Text>
            </View>
            <View style={styles.restaurantAvailable}>
              <View style={styles.restaurantAddressIcon}>
                <MaterialCommunityIcons
                  name='calendar-clock'
                  size={20}
                  color={Color.red}
                />
              </View>
              {able()}
            </View>
            <View style={styles.menuListWrap}>
              <View>
                <CardListMenu myMenus={myMenus} />
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  )
}

export default StackDetail
