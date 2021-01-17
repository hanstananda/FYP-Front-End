const axios = require('axios').default

const postLogin = async (data): Promise<any> => {
  const response = await axios({
    url: '/api-token-auth/',
    method: 'post',
    data,
  })
  return response
}

export default postLogin
