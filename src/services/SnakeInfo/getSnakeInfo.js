const axios = require('axios').default

const getSnakeInfo = async (id) => {
  const response = await axios({
    url: `/snake_info/${id}`,
    method: 'get',
  })

  return response.data
}

export default getSnakeInfo
