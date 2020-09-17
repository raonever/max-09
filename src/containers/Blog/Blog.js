import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';

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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />   
                <Route path="/" render={() => <h1>Home 2</h1>} />    */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post"  component={NewPost} />
            </div>
        );
    }
}

export default Blog;

// exact : 정확한 path 에서만 작동, exact가 없으면 다른 path를 이동해도 기존 path 유지
// exact를 제거하는 경우 : 해당 path 뒤에 다른 path를 이용하기 위해서 제거