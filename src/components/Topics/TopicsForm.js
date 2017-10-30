import React from 'react'

import { message } from 'antd'

class TopicsForm extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)

    this.formSubmit = this.formSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    const { msg, error } = nextProps.topics.save
    
    if(msg && this.props.topics.save.msg!=msg){
      message.success(msg)
    }

    const errorMsg = error
    ? error.data.message || error.data.errors[0].msg
    : null

    if(errorMsg){
      message.error(errorMsg)
    }

  }

  formSubmit (event) {
    event.preventDefault()

    const name = document.querySelector('input#name').value

    this.props.saveTopic(name)
  }

  render () {
    const { save: { msg, error, loading } } = this.props.topics
    console.log('RENDER FORM')
        
    const errorMsg = error
      ? error.data.message || error.data.errors[0].msg
      : null

    return (
      <div>
        <p>{ msg || errorMsg }</p>
        <form onSubmit={this.formSubmit}>
          <input id='name' type='text' />
          <input disabled={loading} type='submit' value='save' />
        </form>
      </div>
    )
  }
}

export default TopicsForm
