// import { createContext, useContext, useState } from 'react'
// import { IAction } from './reducer';

// const StateContext = createContext({})

// type StateProviderProps = {
//     servideName: string;
//     isLogin: boolean;
//     setIsLogin: (isLogin: boolean) => void;
//     isOn: boolean;
//     setIsOn: (isOn: boolean) => void;
// };
// // IAction型の引数を取る空の関数を初期値とし、dispatch用のcontextを生成
// const dispatchContext = createContext((() => true) as React.Dispatch<IAction>)

// export const StateProvider = ( children:StateProviderProps) => {
//   const serviceName = 'todo memo app'
//   const [isLogin, setIsLogin] = useState(false)
//   const [isOn, setIsOn] = useState(false)

//   return (
//     <StateContext.Provider
//       value={{ serviceName, isLogin, setIsLogin, isOn, setIsOn }}
//     >
//       {children}
//     </StateContext.Provider>
//   )
// }

// export const useStateContext = () => useContext(StateContext)

// // dispatch関数を利用できるようにする
// export const useDispatch = () => {
//     return useContext(dispatchContext)
//   }
  
//   // グローバルステイトを利用できるようにする
//   export const useGlobalState = <K extends keyof State>(property: K) => {
//     const state = useContext(stateContext)
//     return state[property]
//   }
import {useState,useReducer,createContext, useContext } from 'react'

import { IAction, initialLoginState, initialState, loginReducer, reducer, State,loginState, ILoginAction, ILogoutAction } from './reducer'


// グローバルステイトの初期値を引数として取り、state用のcontextを生成
const stateContext = createContext(initialLoginState)

const stateContextSimple = createContext({})
// IAction型の引数を取る空の関数を初期値とし、dispatch用のcontextを生成
const dispatchContextLogin = createContext((() => true) as React.Dispatch<ILoginAction>)
const dispatchContextLogout = createContext((() => true) as React.Dispatch<ILogoutAction>)


export const Provider = (props:any) => {
//    const [state, dispatch] = useReducer(reducer, initialState)
   const [loginState, dispatch] = useReducer( loginReducer,initialLoginState)
  return (
    <dispatchContextLogin.Provider value={dispatch}> {/* dispatch用contextにdispatchを設置 */}
      <stateContext.Provider value={loginState}> {/* state用contextにstateを設置 */}
        {props.children}
      </stateContext.Provider>
    </dispatchContextLogin.Provider>
    
  )
}

// dispatch関数を利用できるようにする
export const useDispatch = () => {
  return useContext(dispatchContextLogin)
}

export const useDispatchLogout = () => {
    return useContext(dispatchContextLogout)
}  

// グローバルステイトを利用できるようにする
// export const useGlobalState = <K extends keyof State>(property: K) => {
//   const state = useContext(stateContext)
//   return state[property]
// }

// keyofでloginStateの要素のプロパティをunion型に変換し、それをKが継承する
export const useGlobalLoginState = <K extends keyof loginState>(property: K) => {
    const state = useContext(stateContext)
    return state[property]
  }