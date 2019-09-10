import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div className="test">
        Hello World!
        Hello React!
      </div>
    )
  }
}

export default App

ReactDOM.render(
  <App />, document.getElementById('app')
)
