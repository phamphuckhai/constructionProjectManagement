import { call, put,takeLatest } from 'redux-saga/effects';
import { action } from 'typesafe-actions';
import {api, getTestGQL} from '../../../services/api';

import { loadSuccess, loadFailure, auth } from './actions';
import { RepositoriesTypes } from './types';


export function* load(action: any) {
  try {
    console.log("hello");
    
    // const response = yield call(api.get, 'users/diego3g/repos');
    console.log(action.payload);
    
 
    // const response: string =  yield call(getTestGQL, action.payload);
    
    // console.log(response.data);

    // yield put(loadSuccess(response));
    // console.log(data);
    
  } catch (err) {
    // yield put(auth());
    console.log("lỗi rồi");
    
  }
}
function* doSomething(){
  console.log("hello there");
  
  // console.log(action.username)
  return "hhello"
}

// export function* authUser(username: string, password: string) {
//   try {
//     console.log("hello");

//     // const response = yield call(api.get, 'users/diego3g/repos');
    
//     // const response: ITest =  yield call(getTestGQL);
    
//     console.log(response.data);

//     // yield put(loadSuccess(response));
//   } catch (err) {
//     yield put(auth());
//   }
// }


