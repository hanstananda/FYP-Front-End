const axios = require('axios').default

const postSnakeImage = async (data): Promise<any> => {
  const response = await axios({
    url: '/snake_image/',
    method: 'post',
    data,
  })
  return response
}

export default postSnakeImage
