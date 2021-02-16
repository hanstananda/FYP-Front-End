const axios = require('axios').default

const postExpertClassify = async (data): Promise<any> => {
  const response = await axios({
    url: '/expert_classification/',
    method: 'post',
    data,
  })
  return response
}

export default postExpertClassify
