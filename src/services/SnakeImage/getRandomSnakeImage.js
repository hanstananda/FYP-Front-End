const axios = require('axios').default

const getRandomSnakeImage = async () => {
  const response = await axios({
    url: '/random_snake_image/',
    method: 'get',
  })

  return response.data
}

export default getRandomSnakeImage
