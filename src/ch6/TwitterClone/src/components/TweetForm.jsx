import React from 'react'
import { Input, Button } from 'semantic-ui-react'

class TweetForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      img: '',
      text: '',
    }
  }

  changeName(e) {
    const name = e.target.value
    this.setState({ name: name})
  }

  changeImg(e) {
    const img = e.target.value
    this.setState({ img: img })
  }

  changeText(e) {
    const text = e.target.value
    this.setState({ text: text })
  }

  handleSubmit(e) {
    console.log(
      'name:', this.state.name,
      'img:', this.state.img,
      'text:', this.state.text,
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className="w__f__tweet-form">
          <div className="f__tweet-form">
            <h1>投稿する</h1>
            <div className="w__input">
              <label>名前</label>
              <Input onChange={e => this.changeName(e)} placeholder="名前を入力してください。" />
            </div>
            <div className="w__input">
              <label>画像URL</label>
              <Input onChange={e => this.changeImg(e)} placeholder="画像URLを入力してください" />
            </div>
            <div className="w__input">
              <label>内容</label>
              <Input onChange={e => this.changeText(e)} placeholder="テキストを入力してください。" />
            </div>
            <div className="w__button">
              <Button onClick={e => this.handleSubmit(e)}>Tweetする</Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default TweetForm
