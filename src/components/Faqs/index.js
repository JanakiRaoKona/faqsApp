// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div>
        <h1>Faqs</h1>
        <ul className="ul-list">
          {faqsList.map(eachItem => (
            <FaqItem
              eachFaq={eachItem}
              key={eachItem.id}
              answerShowHide={this.answerShowHide}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
