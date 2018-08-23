import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchUser, setUserName } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"
// import { WyreClient } from 'wyre-api'



import { Button, Navbar, FormGroup, FormControl, Text, Image, Thumbnail } from 'react-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem, InputGroup, Row, Col, Grid, DropdownButton } from 'react-bootstrap';
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
    // const WyreClient = require('wyre-api').WyreClient

  componentDidMount() {
    // console.log("Hello----------------------------")



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
    // console.log(tweets.ETH)


    // if (tweets.length > 0) {
    //   return (<Button onClick={this.fetchTweets.bind(this)}>Load tweets</Button>)
    // }

    const imgStyle = {
      width: '80%',
      height: 'auto'
    };

    const testStyle = {
      backgroundColor: "red"
    }

    const modelStyle = {
      padding: "0 50px 0 30px"
    }

    const mileageStyle = {
      margin: "0"
    }

    const footerNavStyle = {
      padding: "30px 0 0 0",
      margin: "0"
    }

    const carYearStyle = {
      padding: "0 10px 0 0"
    }


    const mappedTweets2 = function(tweets) {
        let arr = [];

        for(var key in tweets) {
            arr.push(" | " + key + ": " + tweets[key].USD)
        }

        // const mappedTweets = arr.map(tweet => <li key={tweet}>{tweet}</li>);

        return arr;
      }

    // const mappedTweets2 = function(tweets) {
    //     let str = "";
    //
    //     for(var key in tweets) {
    //         str +=  key + ": " + tweets[key].USD + " --- "
    //     }
    //
    //     // const mappedTweets = arr.map(tweet => <li key={tweet}>{tweet}</li>);
    //
    //     return str;
    //   }


    // const mappedTweets = function(tweets) {
    //   let arr = [];
    //   let trackCoinRate = ['USDETH', 'USDBTC', 'USDDAI', 'USDEUR']
    //
    //   for(var key in tweets) {
    //     if(trackCoinRate.includes(key))
    //       arr.push(key + ": $" + tweets[key].toFixed(2))
    //   }
    //
    //   const mappedTweets = arr.map((tweet, index) => <li key={index.toString()}>{tweet}</li>);
    //
    //   return mappedTweets;
    // }

    const usdToEther = function(cryptoRateObj, carPrice) {
      let cryptoObj = cryptoRateObj.ETH;
      let etherPrice = 0;

      for(let key in cryptoObj) {
        // console.log("----------------")
        // console.log(cryptoObj[key])
        if(key === "USD") {
          etherPrice = parseInt(carPrice) / parseInt(cryptoObj[key]);
        }
      }
      return etherPrice.toFixed(2);
    }

    // const usdToEther = function(cryptoRateObj, carPrice) {
    //   let cryptoObj = cryptoRateObj.ETH.USD;
    //   let cryptoRate = cryptoRateObj.ETH.USD;
    //
    //
    //   return parseInt(carPrice) / parseInt(cryptoRate);
    // }


    const mapUsers2 = function(user, tweets) {
      let arr = [];

      for(let i = 0; i < user.length - 1; i++) {
        let element = user[i];
        let nextElement = user[i + 1];
        let carPrice = element.price;
        let carPrice2 = nextElement.price;

        let etherPrice = usdToEther(tweets, carPrice);
        let etherPrice2 = usdToEther(tweets, carPrice2);

        arr.push(
          <div>
          <Grid>

            <Row className="show-grid">
              <Col md={6} mdPush={6}>
                  <Row xs={4} md={2}>
                    <Image key={element.picture} src={element.picture} style={imgStyle} alt="Car" />
                    </Row>
                  <Row style={modelStyle} xs={4} md={2}>
                      <Col xs={12} md={8}>
                          <p key={i}>{element.model}</p>
                      </Col>
                      <Col xs={6} md={4}>
                          <p key={i}>{etherPrice2} Ether</p>
                      </Col>
                  </Row>
                  <Row style={modelStyle} xs={4} md={2}>
                      <Col xs={6} md={4}>
                          <p key={i}><strong style={carYearStyle} key={i}>{element.year}</strong> {element.mile}k miles</p>


                      </Col>
                      <Col style={mileageStyle} xs={6} md={4}>

                      </Col>
                      <Col xsHidden md={4}>
                            <p key={i}>${element.price}</p>

                       </Col>
                  </Row>
              </Col>


              <Col md={6} mdPull={6}>
                  <Row xs={2} md={2}>
                    <Image key={nextElement.picture} src={nextElement.picture} style={imgStyle} alt="Car" />
                  </Row>
                  <Row style={modelStyle} xs={2} md={2}>
                      <Col xs={12} md={8}>
                          <p key={i}>{nextElement.model}</p>
                      </Col>
                      <Col xs={6} md={4}>
                          <p key={i}>{etherPrice2} Ether</p>
                      </Col>
                  </Row>
                  <Row style={modelStyle} xs={2} md={2}>
                      <Col xs={6} md={4}>
                          <p key={i}><strong style={carYearStyle} key={i}>{nextElement.year}</strong> {nextElement.mile}k miles</p>

                      </Col>
                      <Col style={mileageStyle} xs={6} md={4}>

                      </Col>
                      <Col xsHidden md={4}>
                         <p key={i}>${nextElement.price}</p>
                       </Col>


                  </Row>
              </Col>
            </Row>
          </Grid>

          </div>);
      }

      return arr;
    }

    const divStyle = {
      color: 'white'
    };

    const acceptEtherStyle = {
      color: 'white',
      padding: "10px 0 0 10px"
    };

    const searchStyle = {
      width: '400px'
    };

    const listingStyle = {
      padding: "0px 20px 20px 20px"
    }

    const cryptoStyle = {
      backgroundColor: "#e0ac02",
      padding: "5px"
    }

    const submitStyle = {
      backgroundColor: "#e0ac02",
    }

    const navbarStyle = {
      margin: "0 0 0 0",
      padding: "10px 0 0 0"
    }

    const liveStyle = {
      color: "red"
    }

    const carMenuStyle = {
      // backgroundColor: "green",
      textAlign: "left"
    }

    const accountMenuStyle = {
      // backgroundColor: "green",
      textAlign: "right"
    }

    const getToKnowStyle = {
      color: "white",
      margin: "0 0 10px 0"
    }

    const careerStyle = {
      color: "white",
      // margin: "0 0 10px 0"
    }

    return(
      <div>

      <Navbar style={navbarStyle}>
        <Navbar.Header>

          <Navbar.Brand>
            <a href="">DREAM MARKETPLACE</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>

            <InputGroup>
              <FormControl style={searchStyle} placeholder="Search" type="text" />
             </InputGroup>

            </FormGroup>{' '}
            <Button style={submitStyle} type="submit">Submit</Button>

          </Navbar.Form>
            <p style={acceptEtherStyle}>We accept Ether</p>

        </Navbar.Collapse>

        <Row className="show-grid">
          <Col style={carMenuStyle} xs={12} md={8}>
            <Button style={divStyle}>Cars</Button>
            <Button style={divStyle}>Houses</Button>
            <Button style={divStyle}>Phones</Button>
            <Button style={divStyle}>Jewelries</Button>
            <Button style={divStyle}>Shoes</Button>
          </Col>
          <Col style={accountMenuStyle} xs={6} md={4}>
            <DropdownButton title="Account" id="bg-nested-dropdown">
                <MenuItem eventKey="1">Sell</MenuItem>
                <MenuItem eventKey="2">Wyre Payment</MenuItem>
                <MenuItem eventKey="3">MakerDOA</MenuItem>
            </DropdownButton>
            <Button style={divStyle}>Order</Button>
            <Button style={divStyle}>Cart</Button>
          </Col>

        </Row>




      </Navbar>
      <div style={cryptoStyle}>
          <center>
          <p><strong style={liveStyle}>Live</strong> {mappedTweets2(tweets)}</p>
          </center>
      </div>















        <div style={listingStyle}>
          {mapUsers2(user, tweets)}
        </div>































          <Navbar style={footerNavStyle}>
            <Grid>
               <Row className="show-grid">
                 <Col sm={6} md={4}>
                      <p style={getToKnowStyle}><strong>Get to Know Us</strong></p>
                      <p><a style={careerStyle}>Career</a></p>
                      <p><a style={careerStyle}>About Dream Marketplace</a></p>
                      <p><a style={careerStyle}>Investor Relations</a></p>
                      <p><a style={careerStyle}>DM Devices</a></p>
                   <br />

                 </Col>
                 <Col sm={6} md={4}>
                    <p style={getToKnowStyle}><strong style={getToKnowStyle}>Make Money with Us</strong></p>
                    <p><a style={divStyle}>Sell on Dream Marketplace</a></p>
                    <p><a style={divStyle}>Sell you items on DM</a></p>
                    <p><a style={divStyle}>Become an Affiliate</a></p>
                    <p><a style={divStyle}>Advertise Your Products</a></p>
                    <p><a style={divStyle}>Self-Publish with Us</a></p>
                   <br />

                 </Col>
                 <Col sm={6} md={4}>
                    <p style={getToKnowStyle}><strong style={getToKnowStyle}>Let Us Help You</strong></p>
                    <p><a style={divStyle}>Your Account</a></p>
                    <p><a style={divStyle}>Your Order</a></p>
                    <p><a style={divStyle}>Shipping Rates & Policies</a></p>
                    <p><a style={divStyle}>DM Assistant</a></p>
                    <p><a style={divStyle}>Help</a></p>
                   <br />

                 </Col>
               </Row>
              </Grid>
                <center><p style={divStyle}>Copyright 2018 Patrick Luu</p></center>

          </Navbar>



      </ div>
    )
  }
}

























//
// <Row className="show-grid">
//   <Col md={6} mdPush={6}>
//       <Row xs={4} md={2}>
//         <Image key={element.picture} src={element.picture} style={imgStyle} alt="Car" />
//         </Row>
//       <Row style={modelStyle} xs={4} md={2}>
//           <Col xs={12} md={8}>
//               <p key={i}>{element.model}</p>
//           </Col>
//           <Col xs={6} md={4}>
//               <p key={i}>Ether 100</p>
//           </Col>
//       </Row>
//       <Row style={modelStyle} xs={4} md={2}>
//           <Col xs={6} md={4}>
//               <strong key={i}>{element.year}</strong>
//
//           </Col>
//           <Col style={mileageStyle} xs={6} md={4}>
//               <p key={i}>{element.mile}k miles</p>
//           </Col>
//           <Col xsHidden md={4}>
//                 <p key={i}>${element.price}</p>
//
//            </Col>
//       </Row>
//   </Col>










        // <ul>{mappedTweets(tweets)}</ul>


// <h1>Name: {user[1].name}</h1>
// <h1>{user[1].age}</h1>




















        // <ul>{mappedTweets2(tweets)}</ul>







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
