// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClickedEmoji: true}

  clickOnEmoji = () => {
    const {isClickedEmoji} = this.state
    this.setState({isClickedEmoji: !isClickedEmoji})
  }

  renderFeedBackScreen = () => {
    const {resources} = this.props
    return (
      <div className="feedback-container">
        <h1>How satisfied are you with our customer support performance</h1>
        <ul className="emojis-list">
          {resources.emojis.map(each => (
            <li className="list-container" key={each.id}>
              <button type="button">
                <img
                  src={each.imageUrl}
                  alt={each.name}
                  className="emoji"
                  onClick={this.clickOnEmoji}
                />
                <p>{each.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
        <h1 className="thankyou">Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isClickedEmoji} = this.state
    return (
      <div className="bg-container">
        <div>
          {isClickedEmoji
            ? this.renderFeedBackScreen()
            : this.renderThankYouScreen()}
        </div>
      </div>
    )
  }
}

export default Feedback
