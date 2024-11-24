import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Zip Code"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;