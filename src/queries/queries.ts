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
      averageRating
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
      averageRating
    }
  }
`;

export const GET_SAVED_RECIPES = gql`
  query getSavedRecipes($userId: ID) {
    recipes(userId: $userId) {
      url: String
      label: String
      image: String
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
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
mutation Register($email: String, $password: String. passwordConfirm: String) {
  register(email: $email, password: $password, passwordConfirm: $passwordConfirm) {
  }
}
`;

export const GET_RECIPES = gql`
  query GetRecipes($query: String, $page: Int) {
    getRecipes(query: $query, page: $page) {
      recipe {
        url
        label
        image
      }
      averageRating
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
