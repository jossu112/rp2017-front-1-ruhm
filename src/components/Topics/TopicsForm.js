import React from 'react'

class TopicsForm extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)

    this.formSubmit = this.formSubmit.bind(this)
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
