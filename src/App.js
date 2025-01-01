import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 가져오기

function App() {
  return (
    <div className="container-fluid">
      <header className="App-header">
        <h1 className="headertext">수강!팡</h1>
        <p className="lead" style={{ marginLeft: "1rem" }}>모두의 수강신청의 정상화를 꿈꾸며!</p>
      </header>
      
      <div className="chatbot-container">
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
      </div>
      
      <footer className="mt-4 text-center">
        <p className="text-muted">&copy; 2024 KW Tipster</p>
      </footer>
    </div>
  );
}

export default App;
