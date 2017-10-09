import { connect } from 'react-redux'
import { getTopics, saveTopic } from './TopicsActions'
import Topics from './Topics'

const mapStateToProps = state => ({
  topics: state.topics
})

export default connect(mapStateToProps, { getTopics, saveTopic })(Topics)
