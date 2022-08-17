const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];


export const initialState = {
    user : null
}

export const cartState = {
  cartItems : storage,
  showCart : false ,
}


export function AuthReducer (state = initialState, {payload , type }) {
  switch (type) {
  case "SET_USER":
    return { ...state, 
       user : payload
    } ;
    case "LOGOUT_USER":
    return { ...state, 
       user : null
    } ;

  default:
    return state
  }
}



export function CartReducer (state = cartState , {payload , type}){
  switch (type) {
    case "ADD_TO_CART":
      return {...state , cartItems : [ ...state.cartItems ,   {id:payload.id , price:payload.price , image: payload.image01 , quantity : payload.quantity , title: payload.title }] } ;
   
      case "REMOVE_ITEM":
        return {...state , cartItems: state.cartItems.filter((item) => item.id !== payload.id )} ;

      case "SHOW_CART":
        return {...state , showCart : !state.showCart} ;


      case "INCREASE" :
        return {...state , cartItems : state.cartItems.map( i => i.id === payload.id 
          ? ({...i, quantity: i.quantity + 1 })
          : i )} ;

      case "DECREASE" :
    return {...state , cartItems : state.cartItems.map( i => i.id === payload.id 
      ? ({...i, quantity: i.quantity - 1 })
      : i )} ;
    
    default:
      return state;
  }
}

