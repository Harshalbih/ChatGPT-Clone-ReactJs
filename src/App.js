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

function App() {
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
         <div className="listicon"><img src={rocket} alt="" className="logo" />Contact Harshal</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
         <div className="chat">
          <img className="chatimg" src={usericon} alt="" /> <p className="txt">Hi I'm Harshal, Want to ask you some questions</p>
         </div>
         <div className="chat bot">
          <img className="chatimg" src={gptimg} alt="" /> <p className="txt">Hi I'm ChatGPT, Please ask any questions.If only one egg is available and we wish to be sure of obtaining the right result, the experiment can be carried out in only one way. Drop the egg from the first-floor window; if it survives, drop it from the second-floor window. Continue upward until it breaks. In the worst case, this method may require 100 droppings. Suppose 2 eggs are available. What is the least number of egg droppings that are guaranteed to work in all cases? The problem is not actually to find the critical floor, but merely to decide floors from which eggs should be dropped so that the total number of trials is minimized. </p>
         </div>
        </div>
        <div className="chatfooter">
          <div className="inp">
            <input type="text" name="" placeholder="Send a message" /><button className="send">
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
