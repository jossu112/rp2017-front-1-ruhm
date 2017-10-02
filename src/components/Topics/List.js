import React from 'react'

const List = (props) => {
  const { topics } = props

  if (!topics.length) { return null }

  return (
    <ul>
      <li>{topics[0].name}</li>
    </ul>
  )
}

export default List
