import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;



// import React from 'react';
// import { withRouter } from 'react-router-dom';      // withRouter를 씀으로써 Post의 콘솔에 match 부분(isExact, prarams, path 등)이 생성된다

// import './Post.css';

// const post = (props) => {
//     console.log(props);
//     return (
//         <article className="Post" onClick={props.clicked}>
//             <h1>{props.title}</h1>
//             <div className="Info">
//                 <div className="Author">{props.author}</div>
//             </div>
//         </article>
//     );
// };

// export default withRouter(post);