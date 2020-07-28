import {  PROFILE_START , PROFILE_START_SUCCESS, PROFILE_START_FAILURE ,
	
} from '../action/actionType';

const initialState = {
	payload: null,
	error: null,
	loading: false,
	repo:[]
};

export default function profile(state = initialState, action = {}) {
	switch (action.type) {
		case PROFILE_START:
			return {
				...state,
				loading: true
			};
		case PROFILE_START_SUCCESS:
			return {
				...state,
				payload: action.payload,
				loading: false,
				error: null
			};

		case PROFILE_START_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		
		
			

		default:
			return state;
	}
}