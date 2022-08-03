export const initialState = { // グローバルステイトの初期値
    currentUser: {
      age: 99,
      name: "DefaultName",
      occupation: "DefaultOccupation",
      spouse: false
    }
}
export const initialLoginState = {
    loginState:{
        serviceName: "Anki Card",
        isLogin: false,
    }
}
  
  export type State = typeof initialState // グローバルステイトの型定義
  export type loginState = typeof initialLoginState
  
  export interface IAction { // グローバルステイトの更新を行わせる指示の型定義
    type: 'setUser',
    payload: {
      name: string,
      age: number,
      occupation: string,
      spouse: boolean
    }
  }
  export interface ILoginAction {
    type: 'setLogin',
    payload: {
        serviceName: string,
        isLogin: boolean,
    },
 }
 export interface ILogoutAction {
    type: 'setLogout',
    payload: {
        serviceName: string,
        isLogin: boolean,
    },
 }
  
  export const reducer = (state: State, action: IAction) => {
    switch (action.type) {
      case 'setUser': return { // グローバルステイトの更新を行わせる指示のtypeが'setUser'の時の処理
        ...state,
        currentUser: action.payload
      }
      default: return state
    }
  }
  export const loginReducer = (state: loginState, action: ILoginAction) => {
    switch (action.type) {
      case 'setLogin': return { // グローバルステイトの更新を行わせる指示のtypeが'setUser'の時の処理
        ...state,
        loginState: action.payload
      }
      default: return state
    }
  }
  export const logoutReducer = (state: loginState, action: ILogoutAction) => {
    switch (action.type) {
      case 'setLogout': return { // グローバルステイトの更新を行わせる指示のtypeが'setUser'の時の処理
        ...state,
        loginState: action.payload
      }
      default: return state
    }
  }