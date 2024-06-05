import {useState} from 'react'
import {
  Bg,
  BgCard,
  Head,
  Para,
  ReactImg,
  Description,
  ReadBtn,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isFull, setIsFull] = useState(false)
  const slicedFirst = reactHooksDescription.slice(0, 170)
  const slicedLast = reactHooksDescription.slice(
    171,
    reactHooksDescription.length,
  )

  const onClickBtn = () => {
    setIsFull(prevState => !prevState)
  }

  const btnText = isFull ? 'Read Less' : 'Read More'

  return (
    <Bg>
      <BgCard>
        <Head>React Hooks</Head>
        <Para>Hooks are a new addition to React</Para>
        <ReactImg
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>
          {slicedFirst} {isFull && slicedLast}
        </Description>
        <ReadBtn type="button" onClick={onClickBtn}>
          {btnText}
        </ReadBtn>
      </BgCard>
    </Bg>
  )
}
export default ReadMore
