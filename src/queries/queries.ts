import { gql } from "@apollo/client";

export const GET_RECIPE = gql`
  query getRecipe($id: String) {
    recipe(id: $id) {
      recipe {
        url
        label
        image
        source
        yield
        dietLabels
        healthLabels
        cautions
        ingredientLines
        ingredients {
          text
          quantity
          measure
          food
          weight
          foodId
        }
        calories
        totalWeight
        totalTime
        cuisineType
        mealType
        dishType
      }
      reviews {
        _id
        userId
        review
        rating
      }
      avgRating
      amountOfReviews
    }
  }
`;

export const FORGET_PASSWORD = gql`
  mutation ForgetPassword($userEmail: String) {
    forgetPassword(userEmail: $userEmail) {
      message
    }
  }
`;

export const GET_FRIENDS_ACTIVITY = gql`
  query getFriendsActivity($page: Int, $userId: ID) {
    friendsActivityList(page: $page, userId: $userId) {
      _id
      user {
        _id
        name
        pictures
      }
      activity
      date
    }
  }
`;

export const RECIPE_OF_THE_DAY = gql`
  query GetRecipe($tags: [String]) {
    getRecipe(tags: $tags) {
      recipe {
        url
        label
        image
        dietLabels
        healthLabels
        totalTime
      }
      avgRating
    }
  }
`;

export const GET_SAVED_RECIPES = gql`
  query getSavedRecipes {
    getSavedRecipes {
      recipe {
        url
        label
        image
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($userInput: userInput!) {
    login(input: $userInput) {
      token
      user {
        _id
        name
        email
        role
        pictures
      }
    }
  }
`;

export const REGISTER = gql`
mutation Register($userInput: userInput!) {
  register(input: $userInput)
}
`;

export const GET_RECIPES = gql`
  query GetRecipes($query: String, $page: Int, $tags: [String]) {
    getRecipes(query: $query, page: $page, tags: $tags) {
      recipe {
        url
        label
        image
      }
      avgRating
    }
  }
`;

export const GET_SHOPPING_LIST = gql`
  query GetShoppingList($page: Int) {
    getShoppingList(page: $page) {
      recipe {
        url
        label
        image
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($userId: String) {
    getUser(userId: $userId) {
      user {
        _id
        name
        isActive
        isBlocked
        pictures
        friends
      }
    }
  }
`;

export const ME = gql`
  query Me {
    _id
    name
    pictures
    friends
  }
`;

export const GET_CHAT = gql`
  query GetChat($chatId: String) {
    getChat(chatId: $chatId) {
      user {
        _id
        name
        lastSeen
        picture
      }
      message {
        _id
        message
        sender
        timestamp
        isRead
        isMine
      }
    }
  }
`


export const SEND_MESSAGE = gql`
  mutation SendMessage($receiverId: ID) {
    sendMessage(receiverId: $receiverId) {
      message {
        message
        timestamp
      }
    }
  }
`;