import './App.css';
import gptlogo from './assets/chatgpt.svg';
import addimg from './assets/add-30.png';
import msgimg from './assets/message.svg';
import homei from './assets/home.svg';
import savedi from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendbtn from './assets/send.svg';
import usericon from './assets/user.jpg';
import gptimg from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';

function App() {

  const [input , setInput] = useState("");
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState([
    {
    text: "Hi, I'm ChatGPT",
    isBot: true,
  }
]);

  const handleSend = async() => {
    try{const res = await sendMsgToOpenAI(input)
    setMsg([...msg,
    {text: input, isBot:false},
    {text: res, isBot:true}
    ])}
    catch (error) {
    setError("Sorry, ChatGPT service is temporary down, as API used for this project is expired.");
    }
  }
  const handleEnter = async (e)=>{
    if (e.key === 'Enter') await handleSend();
  }

  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside">
        <div className="uppersidetop"><img src={gptlogo} alt="" className="logo" />ChatGPT</div>
        <button className="midbtn"><img src={addimg} alt="" className="addbtn" />New Chat</button>
        <div className="uppersidebottom">
          <button className="query"><img src={msgimg} alt="" className="q1" />What is Programming</button>
          <button className="query"><img src={msgimg} alt="" className="q2" />Places to visit in Pune </button>
          </div>
        </div>
        <div className="lowerside">
         <div className="listicon"><img src={homei} alt="" className="logo" />Home</div>
         <div className="listicon"><img src={savedi} alt="" className="logo" />Saved</div>
         <div className="listicon"><img src={rocket} alt="" className="logo" /><a href='https://in.linkedin.com/in/harshal-bihade' target="blank">Contact Harshal</a></div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
         <div className="chat">
          <img className="chatimg" src={usericon} alt="" /> <p className="txt">Hi I'm Harshal, Want to ask you some questions</p>
         </div>
         <div className="chat bot">
          <img className="chatimg" src={gptimg} alt="" /> <p className="txt">Hi I'm ChatGPT, Please ask any questions.. </p>
         </div>
        </div>
        {error && <p className="error chat bot"><img className="chatimg" src={gptimg} alt="" />{error}</p>}
        <div className="chatfooter">
          <div className="inp">
            <input type="text" name="" placeholder="Send a message" value={input} onKeyDown={handleEnter} onChange={(e)=>setInput(e.target.value)}/><button className="send" onClick={handleSend}>
              <img src={sendbtn} alt=""/>
            </button>
          </div>
          <p>ChatGPT may produce incorrect results. Also, all copyrights belongs to chatGPT, We have cloned ChatGPT for leaning purpose.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
