import { useSelector, useDispatch } from 'react-redux'

import {clearResponse} from '../../redux/actions/errorActions'
import { Form } from '../../components/index'

export default function AddGame() {
  const dispatch = useDispatch()
  const formResponse = useSelector(state => state.formData)


  return (
    <>
      <h2>Add your own game</h2>
      {formResponse.message === 'Success!' &&
        <>
          <h3>Game addded successfully!</h3><button onClick={()=>dispatch(clearResponse())}>X</button>
        </>}
      <Form />
    </>
  )
}
