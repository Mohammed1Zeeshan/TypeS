import axios, { AxiosResponse} from'axios'
import { IUser } from '../Intefaces/IUser'

export const url='http://localhost:3005/users'

export const getuserlist= async()=> {
  return  await axios.get(url)
}
// export const addempbyid= async(employee)=> {
//     return await axios.post(url,employee)
//   }

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),

}


const UserData = {
  list: () => requests.get<IUser[]>('/all'),

}
const agent = {
  UserData
}

export default agent;