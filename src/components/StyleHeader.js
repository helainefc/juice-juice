import styled from 'styled-components'
import defaultImage from '../images/juiceDefault.jpg'

const StyleHeader = styled.header`
    min-height: 40vh;
    --background: url(${props => (props.img ? props.img : defaultImage)}) center/contain no-repeat;
    background: url(${props => (props.img ? props.img : defaultImage)}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export default StyleHeader;