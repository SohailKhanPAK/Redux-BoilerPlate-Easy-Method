import { formatCountdown } from 'antd/lib/statistic/utils'
import auth_reducer from './auth_reducer'
import firebase_reducer from './firebase_reducer'
import { combineReducers } from 'redux'


export default combineReducers (

    {

        authData : auth_reducer,
        firebaseData : firebase_reducer
    }
)