import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
    };
  }

  render() {
    let message;
    let button_message;

    if (this.state.liked) {
      message = "You have liked this page";
      button_message = "Unlike"
    } else {
      message = "You have not liked this page";
      button_message = "Like"
    }

    return (
      <div id="like_button_container">
        <div>{message}</div>
        <button onClick={() => this.setState(this.state.liked ? {liked: false} : {liked: true})}>{button_message}</button>
      </div>
    );
  }
}

ReactDOM.render(
  <LikeButton />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
