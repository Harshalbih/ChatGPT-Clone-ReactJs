import './App.css';
import gptlogo from './assets/chatgpt.svg';
import addimg from './assets/add-30.png';
import msgimg from './assets/message.svg';
import homei from './assets/home.svg';
import savedi from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';

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

      </div>
    </div>
  );
}

export default App;
