import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {       // Update가 아니기 때문에 componentDidUpdate를 쓰지 않는다.
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {  // 실수 : loadedPosts 
                axios.get('/posts/' + this.props.match.params.id)
                .then(response => {
                    console.log(response);
                    this.setState({loadedPost: response.data});
                });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
        .then(response => {
            console.log(response);
        });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        if (this.state.loadedPost) {        // this.props.id를 하면, 기존 state가 null이기 때문에 에러 발생
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
       
        return post;
    }
}

export default FullPost;
 
// this.state.loadedPost.id !== +this.props.match.params.id      "!== +"  뒤에 타입을 number로 바꿈으로써 타입을 같게 만듬
// this.state.loadedPost.id != this.props.match.params.id        "!="  앞은 number, 뒤는 string.. 글자만 같으면 같다고 인식