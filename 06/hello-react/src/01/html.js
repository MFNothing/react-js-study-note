
import React, { Component } from 'react';

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

// class Header extends Component {
//     render() {
//         return(
//             React.createElement(
//                 'div', 
//                 null,
//                 React.createElement(
//                     'h1', 
//                     { className: 'title'},
//                     "React 小书")
//             )
//         )
//     }
// }

 
class Title extends Component {
	handleClickTitle(word,e) {
		console.log(this)
		console.log(e.target.innerHTML)
		console.log(word)
	}
  render () {
    return (
      <h1 onClick={this.handleClickTitle.bind(this, 'hello')}>React 小书</h1>
    )
  }
}

export class Header extends Component {
  render () {
    return (
    <div>
      <Title />
      <h2>This is Header</h2>
    </div>
    )
  }
}

export class Main extends Component {
  render () {
    return (
    <div>
      <h2>This is main content</h2>
    </div>
    )
  }
}

export class Footer extends Component {
  render () {
    return (
    <div>
      <h2>This is footer</h2>
    </div>
    )
  }
}

export class HTML extends Component {
    render () {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}