import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 가져오기

function App() {
  return (
    <div className="container-fluid">
       {/* Header */}
       <header className="App-header">
        <h1 className="text-info">수강!팡</h1>
        <p className="lead">모두의 수강신청의 정상화를 꿈꾸며!</p>
      </header>

      {/* Sidebar */}
      <nav className="sidebar text-black">
        <h4 className="text-center py-3">Menu</h4>
        <ul className="nav flex-column">
          {Array.from({ length: 20 }, (_, index) => (
            <li className="nav-item" key={index}>
              <a
                className="nav-link text-black"
                href={`#section${index + 1}`}
              >
                Section {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="mt-4 text-center">
        <p className="text-muted">&copy; 2024 KW Tipster</p>
      </footer>
    </div>
  );
}

export default App;
