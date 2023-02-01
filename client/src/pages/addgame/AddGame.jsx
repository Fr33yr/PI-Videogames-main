import { useSelector, useDispatch } from 'react-redux'

import { clearResponse, resetErrors } from '../../redux/actions/errorActions'
import { Form } from '../../components/index'

export default function AddGame() {
  const dispatch = useDispatch()
  const formResponse = useSelector(state => state.formData)
  const errorState = useSelector(state => state.error)

  return (
    <>
      <h2 >Add your own game</h2>
      {formResponse.message === "Succes!" &&
        <>
          <h3>Game addded successfully!</h3><button onClick={() => dispatch(clearResponse())} type='button'>X</button>
        </>}
      {errorState === "name most be unique" &&
        <>
          <h3>A game with that name already exists</h3><button onClick={()=> dispatch(resetErrors())} type='button'>X</button>
        </>
      }
      <Form />
    </>
  )
}
