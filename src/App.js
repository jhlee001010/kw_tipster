import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 가져오기

function App() {
  return (
    
    <div className="container">
      <header className="my-4 text-center">
        <h1 className="text-primary">Welcome to KW Tipster</h1>
        <p className="lead">Your guide to course registration success!</p>
      </header>

      <main>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tips for Beginners</h5>
                <p className="card-text">
                  Learn how to efficiently register for courses and plan your semester.
                </p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Advanced Strategies</h5>
                <p className="card-text">
                  Master advanced techniques for creating the perfect schedule.
                </p>
                <button className="btn btn-success">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-4 text-center">
        <p className="text-muted">&copy; 2024 KW Tipster</p>
      </footer>
    </div>
  );
}

export default App;
