import React, { Component } from 'react';

// -----------------------------------------------------------------------
// Import CSS
// -----------------------------------------------------------------------
import './Post.css';

// --------------------------------------------------------------------
// Functional Component
// --------------------------------------------------------------------
// function Post() {
//     return (
//         <div className="Post">
//             <h1>Post Component</h1>
//         </div>
//     );
// }

// // ES6 - Recommended
// const Post = () => {
//     // Function Body
//     return (
//         <div className="Post">
//             <h2>Post Component</h2>
//         </div>
//     );
// }


// --------------------------------------------------------------------
// Class Component
// --------------------------------------------------------------------
// Create Class
class Post extends Component {
    // render(){} - Important Function in Class Components
    render() {
        return (
            <div className="Post">
                <h2>Post Component</h2>
            </div>
        );
    }
}

export default Post;