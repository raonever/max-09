import React, { Component } from 'react';
// import axios from 'axios';
import { Route } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />   
                <Route path="/" render={() => <h1>Home 2</h1>} />    */}
                <Route path="/" exact component={Posts} />
            </div>
        );
    }
}

export default Blog;

// exact : 정확한 path 에서만 작동, exact가 없으면 다른 path를 이동해도 기존 path 유지