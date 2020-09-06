import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Post from './Component/Header/Post/Post';
import Comment from './Component/Header/Comment/Comment';
import Error from './Component/Error/Error';
import AboutUs from './Component/Error/AboutUs';
import PostDetail from './Component/Header/PostDetail/PostDetail';

 

function App() {

    return ( 
      <div className = "App">
        <header className = "App-header">
       <Header></Header>
            <Router>
                <Switch>
                  <Route path="/home">
                    <Post/>
                    </Route>
                    <Route path="/post">
                    <Post></Post>
                    </Route>
                  <Route path="/postComment/:comments">
                    <Comment></Comment>
                  </Route>
                  <Route path="/aboutUs">
                  <AboutUs></AboutUs>
                  </Route>
                  <Route path="/postDetails/:detail">
                  <PostDetail></PostDetail>
                   </Route>
                  <Route exact path="/">
                    <Post/>
                  </Route>
                  <Route path="*">
                    <Error></Error>
                  </Route>
                </Switch>
            </Router>
        </header>
     </div>
    );
  }

export default App; 