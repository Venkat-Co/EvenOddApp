import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  isIncrement = () => {
    const {count} = this.state
    this.setState({
      count: Math.floor(Math.random() * 100) + count,
    })
  }

  checkCount = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return <p className="desc">Count is Even</p>
    }
    return <p className="desc">Count is Odd</p>
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="main">
          <h1 className="heading">Count {count}</h1>
          {this.checkCount()}
          <button className="btn" type="button" onClick={this.isIncrement}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
