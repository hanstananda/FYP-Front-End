const axios = require('axios').default

const postSnakeClassify = async (data): Promise<any> => {
  const response = await axios({
    url: '/snake_classification/',
    method: 'post',
    data,
  })
  return response
}

export default postSnakeClassify
