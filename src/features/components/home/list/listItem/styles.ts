import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const TruncatedTextStyled = styled(Typography)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const CardContainerStyled = styled.div`
  max-width: 250;
  padding: 5;
`
export { TruncatedTextStyled, CardContainerStyled}
