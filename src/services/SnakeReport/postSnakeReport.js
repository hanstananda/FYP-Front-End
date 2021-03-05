const axios = require('axios').default

const postSnakeReport = async (data): Promise<any> => {
  const response = await axios({
    url: '/snake_report/',
    method: 'post',
    data,
  })
  return response
}

export default postSnakeReport
