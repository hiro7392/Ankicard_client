import { platform } from 'os';
import React, {useState} from 'react'
//var parser = require('ua-parser-js');
import IWindow from '../../api/i-window';
import ISpeechRecognitionEvent from '../../api/speechRegnition'
// windowの型定義にIWindowを使う
declare const window: IWindow;

// 型定義はISpeechRecognitionConstructor
const Recognition = window.webkitSpeechRecognition || window.SpeechRecognition;

// 型定義はISpeechRecognition
const recognition = new Recognition();

// 補完・型チェックができる！
recognition.lang = 'ja-JP';
recognition.interimResults = true;
recognition.continuous = true;



export const SpeechApi= () => {

  //const ua = parser(navigator.userAgent.toLowerCase());
  const [isVoiceReceive,setIsVoiceReceive] = useState(false);
  const [message,setMessage] = useState<string>("");
  const [recordingState,setRecordingState]=useState(false);

  const SppechView = () =>{
    const btn = document.getElementById('btn');
    
    //const speech = window.webkitSpeechRecognition || window.SpeechRecognition;
    const speech=new Recognition();
    speech.lang = 'ja-JP';


    speech.onresult= (event:any) => {
      setIsVoiceReceive(false)
      speech.stop();
      if(event.results[0].isFinal){
          const  autotext =  event.results[0][0].transcript
          setMessage(autotext)
      }
    }

    speech.onend = () => {
      setIsVoiceReceive(true);
      speech.start();
    };
    const startSpeech =()=>{
      if(!isVoiceReceive){
        setIsVoiceReceive(true);
        speech.start();
      }else{
        setIsVoiceReceive(false);
        speech.stop();
      }
    };
    //  console.log(isVoiceReceive);
    return (
      <>
        <button 
          id="btn" 
          className={isVoiceReceive? "text-red-400 py-1 rounded-lg bg-slate-100 w-1/4 mx-auto"
          :"text-blue-400 py-1 rounded-lg bg-slate-100 w-1/4 mx-auto"} 
          onClick={startSpeech}>
          {isVoiceReceive ?"停止する":"音声入力を開始する"}
        </button>
         {/* <h4>取得した内容:{message}</h4> */}
      </>
      // <>
      //   <button id="btn" onClick={startSpeech}>音声認識開始</button>
      //   {isVoiceReceive ? '話してください' : '話さないでください'}<br/>
      //   メッセージ件数:{message.length}<br/>
      //   <div
      //     dangerouslySetInnerHTML={{
      //       __html: message
      //     }}
      //   />      
      // </>
    )
  }

  // chormeに対応しているか判定
  const agent = window.navigator.userAgent.toLowerCase()
  //console.log(agent);
  // if (agent.indexOf("chrome") != -1) { console.log("ブラウザはchromeです。") }
  // else{
  //   console.log("ブラウザはchromeではありません");
  // }

  return(
    <>
      {(agent.indexOf("chrome") !== -1) ?
        <SppechView /> : 
        'あなたのブラウザはサポートしておりません。Chromeからアクセスしてください。'
      }
    </>
  )
};