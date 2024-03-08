export default [
  {
    url: '/user/getUser',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        msg: 'success',
        data: [{
          name: '张三',
          age: 18
        }],
      }
    },
  },
]