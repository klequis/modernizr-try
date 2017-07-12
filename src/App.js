import React, {Component} from 'react';
import './App.css';
import Modernizr from './modernizr'

class App extends Component {
  render() {
    let qFlexbox = Modernizr.flexbox
      ? 'yes'
      : 'no'
    console.log(Modernizr.flexbox)
    let qFlexboxLegacy = Modernizr.flexboxlegacy
      ? 'yes'
      : 'no'
    console.log(Modernizr.flexboxlegacy)
    let qFlexboxTweener = Modernizr.flexboxtweener
      ? 'yes'
      : 'no'
    console.log(Modernizr.flexboxtweener)
    let qFlexWrap = Modernizr.flexwrap
      ? 'yes'
      : 'no'
    console.log(Modernizr.flexwrap)

    return (
      <div className="App">
        <ul>
          <li>flexbox: {qFlexbox}</li>
          <li>flexboxlegacy: {qFlexboxLegacy}</li>
          <li>flexboxtweener: {qFlexboxTweener}</li>
          <li>flexwrap: {qFlexWrap}</li>
        </ul>
      </div>
    )
  }
}

export default App;
