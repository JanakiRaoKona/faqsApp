// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    showAnswer: false,
  }

  toggleAnswer = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer,
    }))
  }

  render() {
    const {eachFaq} = this.props
    const {questionText, answerText} = eachFaq
    const {showAnswer} = this.state
    console.log(showAnswer)

    return (
      <li className="list-cont">
        <div className="question-tag">
          <h1>{questionText}</h1>
          <button type="button" className="button" onClick={this.toggleAnswer}>
            <img
              src={
                showAnswer
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={showAnswer ? 'minus' : 'plus'}
            />
          </button>
        </div>
        {showAnswer && (
          <div>
            <hr />
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
