import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './components/HelloComponent';

// function HelloWorld() {
//   return <p>Hello function component</p>
// }


// class StateFull extends React.Component {
//   constructor(props) {
//     super(props);
//     this.name = props.name;
//   }
//   render() {
//     return <p>Statefull Component, { this.name}</p>
//   }
// }
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'>Submit</button>
    </form>
  )
}

  // render() {
  //   return (
  //     <div> 
  //       <h1>Hello, world!</h1>
  //       <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
  //     </div>
  //   );
  // }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateFull name="Gunang Harefa" /> */}
    <Form />
    <HelloWorld name="Refa" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
