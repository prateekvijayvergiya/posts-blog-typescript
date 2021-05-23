import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Divider from '@material-ui/core/Divider'
import { Link } from 'react-router-dom'

import post from '../../../../types/post'
import { TruncatedTextStyled, CardContainerStyled } from './styles'
import { Grid } from '@material-ui/core'

const PostItem: React.FC<post> = ({
  image,
  tags,
  text,
  owner: { id: ownerId, firstName, lastName, email },
}: post) => {
  return (
    <CardContainerStyled>
      <Card>
        <CardContent>
          <TruncatedTextStyled gutterBottom variant="h5">
            {firstName} {lastName}
          </TruncatedTextStyled>
          <TruncatedTextStyled variant="body2" color="textSecondary">
            {email}
          </TruncatedTextStyled>
          <Divider/>
        </CardContent>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="user image"
            height="200"
            image={image}
          />
        </CardActionArea>
        <CardContent>
          <Grid container justify="space-evenly">
            {tags.map((tag, index) => (
              <Grid item key={index}>
                <Chip
                  size={'small'}
                  label={tag}
                  variant="outlined"
                  color={'secondary'}
                />
              </Grid>
            ))}
          </Grid>
          <Typography>{text}</Typography>
          <Divider/>
          <Link to={`/user/${ownerId}`}>Get Owner profile</Link>
        </CardContent>
      </Card>
    </CardContainerStyled>
  )
}

export default PostItem
