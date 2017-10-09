import React from 'react'
import { Link } from 'react-router-dom'
import Api from '../../utils/Api'
import List from './List'

import TopicsForm from './TopicsForm'
import CurriculumsForm from './CurriculumsForm'

class Topics extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      topics: []
    }

    this.getTopics = this.getTopics.bind(this)
  }

  componentDidMount () {
    this.getTopics()
  }

  getTopics () {
    Api('GET', '/topics', {})
    .then(results => {
      const { topics } = results

      this.setState({ topics })
    })
    .catch(error => {
      console.error(error)
    })
  }

  render () {
    console.log('RENDER TOPICS')
    const { topics } = this.state

    return (
      <div id='topics'>
        <h1>Topics</h1>
        <Link to='/'>Home</Link>
        <br />
        <br />
        <TopicsForm getTopics={this.getTopics} />
        <CurriculumsForm />
        <br />
        <br />
        <List topics={topics} />
      </div>
    )
  }
}

export default Topics
