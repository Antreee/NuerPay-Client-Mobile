import { gql } from '@apollo/client'

export const GET_RESTAURANTS = gql`
  query Restaurants {
    restaurants {
      _id
      name
      logoUrl
      cuisine
      address
      contactNumber
      location {
        type
        coordinates
      }
      available
      capacity
      mainImagesUrl
      adminId
    }
  }
`

export const GET_RESTAURANT_BY_ID = gql`
  query Restaurant($id: ID!, $itemsByRestaurantIdId2: ID!) {
    restaurant(_id: $id) {
      _id
      name
      logoUrl
      cuisine
      address
      contactNumber
      location {
        type
        coordinates
      }
      available
      capacity
      mainImagesUrl
      adminId
    }
    itemsByRestaurantId(_id: $itemsByRestaurantIdId2) {
      _id
      restaurantId
      name
      price
      categoryItem
      imageUrl
      description
    }
  }
`

export const CREATE_ORDER = gql`
  mutation CreateOrder(
    $customerName: String
    $customerPhoneNumber: String
    $tableNumber: String
    $totalPrice: Int
    $bookingDate: String
    $numberOfPeople: Int
    $orderDetails: OrderDetails
  ) {
    createOrder(
      customerName: $customerName
      customerPhoneNumber: $customerPhoneNumber
      tableNumber: $tableNumber
      totalPrice: $totalPrice
      bookingDate: $bookingDate
      numberOfPeople: $numberOfPeople
      orderDetails: $orderDetails
    ) {
      message
    }
  }
`
