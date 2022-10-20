import {useReducer,createContext, useContext } from 'react'

import { IAction, initialLoginState, initialState, loginReducer, reducer, State,loginState, ILoginAction, ILogoutAction } from './reducer'


// グローバルステイトの初期値を引数として取り、state用のcontextを生成
const stateContext = createContext(initialLoginState)

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
  );
}

// dispatch関数を利用できるようにする
export const useDispatch = () => {
  return useContext(dispatchContextLogin)
}

// keyofでloginStateの要素のプロパティをunion型に変換し、それをKが継承する
export const useGlobalLoginState = <K extends keyof loginState>(property: K) => {
    const state = useContext(stateContext)
    return state[property]
  }