import {useParams} from 'react-router-dom'

const Level = Component => {
  const Wrapper = props => {
    const params = useParams()
    return <Component {...props} params={params} />
  }
  return Wrapper
}

export default Level
