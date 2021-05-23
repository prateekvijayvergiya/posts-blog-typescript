import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import post from '../../../../types/post'

const PostItem: React.FC<post> = ({
  id,
  image,
  likes,
  link,
  publishDate,
  tags,
  text,
  // owner: { id: ownerId, firstName, lastName, email },
}: post) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="user image"
          height="200"
          image={image}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Hello
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Hola
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PostItem
