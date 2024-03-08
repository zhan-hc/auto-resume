import { Get } from '@/services'

export const getUserInfo = (params: any = {}) => Get('/user/getUser', params)