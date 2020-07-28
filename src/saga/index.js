import { all , spawn } from "redux-saga/effects";
import { profileData,
} from './saga';




export default function* rootSaga() {
    yield all([
        spawn(profileData),
       
    
    ])
  }