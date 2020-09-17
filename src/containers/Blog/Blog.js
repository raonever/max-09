import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/"
                                exact    // 사용 안하면, "/","/:id" 둘다 활성화되어 있는 상태
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                >Posts</NavLink></li>
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
                <Switch>
                    <Route path="/new-post"  component={NewPost} /> 
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;

// exact : 정확한 path 에서만 작동, exact가 없으면 다른 path를 이동해도 기존 path 유지
// exact를 제거하는 경우 : 해당 path 뒤에 다른 path를 이용하기 위해서 제거

// Link, NavLink 는 a link 기능의 확장판. 즉, css를 사용할 때 ☞a { } ☜ 방식 사용할 수 있다.

// <Switch></Switch> 를 통해, 여러개의 라우트가 아닌 1개의 라우트만 실행하게 할 수 있음

// path="/id" 가 먼저 실행이 되면, "/new-post" 역시 /id의 표현으로 인식하기 때문에 "/new-post"가 실행되지 않는다
// <Route path="/:id" exact component={FullPost} />
// <Route path="/new-post"  component={NewPost} />
// 해결책 1: "/new-post"를 위로 위치시킨다.
// 해결책 2: "/:id"를 "/posts/id"로 하여 "/new-post"를 id로 인식하지 않게 한다.