const axios = require('axios').default

const getSnakeInfoList = async () => {
  const response = await axios({
    url: '/snake_info/',
    method: 'get',
  })

  return response.data
}

export default getSnakeInfoList
