import { call, put,  takeLatest } from 'redux-saga/effects';
import {  profileApi 
} from '../api/api';
import {   PROFILE_START , PROFILE_START_SUCCESS, PROFILE_START_FAILURE, 

} from '../action/actionType';



//login function start here
export function* profileData() {
	yield takeLatest(PROFILE_START, profile);
}


export function* profile(action) {
	try {
		const responeData = yield call(profileApi, action.payload);
		// console.log(responeData, "responeData")
		if (responeData) {
			yield put({ type: PROFILE_START_SUCCESS, payload: responeData });
		}
	} catch (err) {
		yield put({ type: PROFILE_START_FAILURE, payload: err });
	}
}

