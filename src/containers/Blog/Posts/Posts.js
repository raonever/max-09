import React, { Component } from 'react';
import axios from '../../../axios';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatePosts});         // axios. get으로 읽어들이면서 setState로 posts에 데이터 저장
                // console.log(response);
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});  // 에러가 발생하면 error를 true로 변경해줌
            });
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id});           
        // this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push('/posts/' + id);
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>something went wrong!</p>
        if (!this.state.error) {         // 에러가 발생하면 => componentDidMount에서 error를 true로 만들기 때문에, 여기에서는 false가 됨으로 구문 작동 x
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/posts/' + post.id}  key={post.id}>
                        <Post       
                            key={post.id}   
                            title={post.title} 
                            author={post.author}
                            // match={this.props.match}
                            clicked={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;