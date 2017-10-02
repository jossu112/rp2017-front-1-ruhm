import React from 'react'

const List = (props) => {
  const { topics } = props

  if (!topics.length) { return null }

  const listItems = topics.map(topic => {
    return (
      <li key={topic._id}>{topic.name}</li>
    )
  })

  return (
    <ul>{listItems}</ul>
  )
}

export default List
