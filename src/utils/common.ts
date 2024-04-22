// 生成随机字符串
export const randomStr = (len = 10) => {  
  var result = '';  
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  
  var charactersLength = characters.length;  
  for (var i = 0; i < len; i++) {  
    result += characters.charAt(Math.floor(Math.random() * charactersLength));  
  }
  const times = String(+new Date()).slice(-3);
  return result + times;  
}  

export const getImageUrl = (url) => new URL(`../assets/img/${url}`, import.meta.url).href