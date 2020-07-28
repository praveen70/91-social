import { PROFILE_START , PROFILE_START_SUCCESS, PROFILE_START_FAILURE, } from './actionType';


export function profileStart(payload){
      return {
          type: PROFILE_START,
          loading: true,
          payload:payload,
      };
  }
  
  export function profileSucess(payload){
      return {
          type: PROFILE_START_SUCCESS,
          payload : payload,
          loading: false
      };
  }
  
  
  export function profileError(error){
      return {
          type: PROFILE_START_FAILURE,
          error: error,
         loading: false
      };
  }


 