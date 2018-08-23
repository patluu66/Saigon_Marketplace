import axios from "axios";

export function fetchTweets() {
  return function(dispatch) {
    dispatch({type: "FETCH_TWEETS"});

    /*
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    // axios.get("https://www.omdbapi.com/?t=sport&apikey=40e9cece")
      // axios.get("https://api.sendwyre.com/v2/rates")
      axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP,BCH,EOS,XLM,USDT&tsyms=USD")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}
