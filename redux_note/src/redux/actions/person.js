import { ADD_PERSON } from "../constant";

// 创建增加一个人的action
export const createAddPerson = (data) => {
  return {
    type: ADD_PERSON,
    data,
  }
}