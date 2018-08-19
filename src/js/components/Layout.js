import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchUser, setUserName } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"
// import { WyreClient } from 'wyre-api'



import { Button, Navbar, FormGroup, FormControl, Text, Image, Thumbnail } from 'react-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem, InputGroup, Row, Col } from 'react-bootstrap';
// import './styles1.css';


@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,

  };
})
export default class Layout extends React.Component {
  // const WyreClient = require('wyre-api').WyreClient

  componentDidMount() {
    // console.log("Hello----------------------------")

    // const WyreClient = require('wyre-api').WyreClient

    // import {WyreClient} from 'wyre-api'
    // var WyreClient = "https://api.testwyre.com";
    // var WYRE_BASEURL = "https://api.testwyre.com";

    // let wyre = new WyreClient({
    //     apiKey: "AK-HB9JQ9YH-GPZBMQNP-D3VDLBD3-ATY8PQ3L",
    //     secretKey: "SK-3UBUMEM4-HRGN4XHH-WFUFVGHD-7ZH22PGR",
    //     baseUrl: "https://api.testwyre.com"
    // })

    // let wyre = new WyreClient({
    //     apiKey: "AK-3X8A8R7H-PZBFJEY6-FT3BFJMJ-2C47CGH2",
    //     secretKey: "SK-AY6ZYETU-M4RZQ7D7-DYWRJTV2-ZM34Z6R3"
    // })

    // wyre.get("/account")
    //     .then(data => {
    //       console.log("xxxxxxxxxxxxxxxxxxxxx")
    //         console.log(data)
    //     },
    //     err => {
    //         // .. error
    //         console.log("Error--------------------")
    //     })
  }

  componentWillMount() {

    this.props.dispatch(fetchUser())
  }

  fetchTweets() {
    // this.props.dispatch(setUserName("Minh Luu"))
    this.props.dispatch(fetchTweets())
  }




  render() {
    // console.log(this.props)
    const {user, tweets } = this.props;

    if (tweets.length > 0) {
      this.fetchTweets()
      // this.fetchTweets.bind(this)
    }



    // console.log("-------------------")
    // console.log(fetchTweets())
    // console.log(tweets)


    // if (tweets.length > 0) {
    //   return (<Button onClick={this.fetchTweets.bind(this)}>Load tweets</Button>)
    // }

    const imgStyle = {
      width: '50%',
      height: 'auto'
    };

    const mappedTweets = function(tweets) {
      let arr = [];

      for(var key in tweets) {
          arr.push(key + ": " + tweets[key])
      }

      const mappedTweets = arr.map(tweet => <li key={tweet}>{tweet}</li>);

      return mappedTweets;
    }

    const mapUsers = function(user) {
      const people = user.map((
        element, index) =>

        <div>
        <Image key={element.picture} src={element.picture} style={imgStyle} alt="W3Schools.com" />
        <p key={index}>{element.name} < br></ br>
        {element.age} < br></ br>
        {element.picture}</ p>
        </div>);

      return people;
    }

    const divStyle = {
      color: 'white'
    };

    const searchStyle = {
      width: '400px'
    };

    const listingStyle = {
      padding: "0px 20px 20px 20px"
    }


    return(
      <div>

      <Navbar>
        <Navbar.Header>

          <Navbar.Brand>
            <a href="">SAIGON MARKETPLACE</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>

            <InputGroup>
              <InputGroup.Addon>All</InputGroup.Addon>
              <FormControl style={searchStyle} placeholder="Search" type="text" />
             </InputGroup>

            </FormGroup>{' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>

        <Row className="show-grid">
          <Col xs={4} md={2}>
            <Button style={divStyle}>Location</Button>
          </Col>
          <Col xs={4} md={2}>
            <Button style={divStyle}>Department</Button>
          </Col>
          <Col xs={4} md={2}>
            <Button style={divStyle}>Browsing History</Button>
          </Col>
          <Col xs={4} md={2}>
            <Button style={divStyle}>Account & List</Button>
          </Col>
          <Col xs={4} md={2}>
            <Button style={divStyle}>Order</Button>
          </Col>
          <Col xs={4} md={2}>
            <Button style={divStyle}>Cart</Button>
          </Col>
        </Row>

      </Navbar>


        <div style={listingStyle}>

          {mapUsers(user)}

        </div>


        <ul>{mappedTweets(tweets)}</ul>

      </ div>
    )
  }
}















// <h1>Name: {user[1].name}</h1>
// <h1>{user[1].age}</h1>




























// import React from "react"
// import { connect } from "react-redux"
//
// import { fetchUser } from "../actions/userActions"
// import { fetchTweets } from "../actions/tweetsActions"
//
// @connect((store) => {
//   return {
//     user: store.user.user,
//     userFetched: store.user.fetched,
//     tweets: store.tweets.tweets,
//   };
// })
// export default class Layout extends React.Component {
//   componentWillMount() {
//     this.props.dispatch(fetchUser())
//   }
//
//   fetchTweets() {
//     this.props.dispatch(fetchTweets())
//   }
//
//   render() {
//     const { user, tweets } = this.props;
//
//     if (!tweets.length) {
//       return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
//     }
//
//     const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)
//     console.log("Prop: " + this.props)
//
//     return <div>
//       <h1>{user.name}</h1>
//       <ul>{mappedTweets}</ul>
//     </div>
//   }
// }
