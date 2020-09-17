import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                >Home</NavLink></li>
                            <li><NavLink to={{
                                // pathname: this.props.match.url + '/new-post',   // 상대 경로
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />   
                <Route path="/" render={() => <h1>Home 2</h1>} />    */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post"  component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;

// exact : 정확한 path 에서만 작동, exact가 없으면 다른 path를 이동해도 기존 path 유지
// exact를 제거하는 경우 : 해당 path 뒤에 다른 path를 이용하기 위해서 제거

// Link, NavLink 는 a link 기능의 확장판. 즉, css를 사용할 때 ☞a { } ☜ 방식 사용할 수 있다.