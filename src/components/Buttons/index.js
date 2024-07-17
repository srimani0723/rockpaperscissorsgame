import {Btn, Img} from './stylesComponents'

const Buttons = props => {
  const {obj, setChoice} = props
  const {id, imageUrl} = obj
  const yourChoice = () => {
    setChoice({id, imageUrl})
  }
  return (
    <>
      <Btn
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={yourChoice}
      >
        <Img src={imageUrl} alt={id} />
      </Btn>
    </>
  )
}

export default Buttons
