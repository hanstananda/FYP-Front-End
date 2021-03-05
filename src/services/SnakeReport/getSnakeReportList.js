const axios = require('axios').default

const getSnakeReportList = async () => {
  const response = await axios({
    url: '/snake_report_view/',
    method: 'get',
  })

  return response.data
}

export default getSnakeReportList
