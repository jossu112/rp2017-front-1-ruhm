import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'

import TopicsForm from './TopicsForm'
import CurriculumsForm from './CurriculumsForm'

class Topics extends React.Component {
  componentDidMount () {
    this.props.getTopics()
  }

  render () {
    console.log('RENDER TOPICS')
    const { topics, getTopics, saveTopic } = this.props
    // const { msg, error } = topics.save
    console.log(topics)

    return (
      <div id='topics'>
        <h1>Topics</h1>
        <Link to='/'>Home</Link>
        <br />
        <br />
        <TopicsForm {...this.props} />
        <CurriculumsForm />
        <br />
        <br />
        <List topics={topics.data} />
      </div>
    )
  }
}

export default Topics
