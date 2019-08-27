import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>React 小书</h1>
//             </div>
//         )
//     }
// }

// 等同于 

class Header extends Component {
    render() {
        return(
            React.createElement(
                'div', 
                null,
                React.createElement(
                    'h1', 
                    { className: 'title'},
                    "React 小书")
            )
        )
    }
}

ReactDOM.render(<Header />, document.getElementById('root'));
