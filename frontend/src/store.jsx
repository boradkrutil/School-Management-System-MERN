import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
  userResetPasswordReducer,
  userChangePasswordReducer,
} from './reducers/userReducers';

import {
  courseCreateReducer,
  courseListReducer,
  courseDetailsReducer,
  courseUpdateReducer,
  courseDeleteReducer,
} from './reducers/courseReducers';

import {
  schoolCreateReducer,
  schoolListReducer,
  schoolDetailsReducer,
  schoolUpdateReducer,
  schoolDeleteReducer,
} from './reducers/schoolReducers';

import {
  // Student reducers
  studentCreateReducer,
  studentListReducer,
  studentDetailsReducer,
  studentUpdateReducer,
  studentDeleteReducer,
} from './reducers/studentReducers';

import {
  // Lecturer reducers
  lecturerCreateReducer,
  lecturerListReducer,
  lecturerDetailsReducer,
  lecturerUpdateReducer,
  lecturerDeleteReducer,
} from './reducers/lecturerReducers';

import {
  // Parent reducers
  parentCreateReducer,
  parentListReducer,
  parentDetailsReducer,
  parentUpdateReducer,
  parentDeleteReducer,
} from './reducers/parentReducers';

const reducer = combineReducers({
  // User reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  userResetPassword: userResetPasswordReducer,
  userChangePassword: userChangePasswordReducer,

  // Course reducers
  courseCreate: courseCreateReducer,
  courseList: courseListReducer,
  courseDetails: courseDetailsReducer,
  courseUpdate: courseUpdateReducer,
  courseDelete: courseDeleteReducer,

  // School reducers
  schoolCreate: schoolCreateReducer,
  schoolList: schoolListReducer,
  schoolDetails: schoolDetailsReducer,
  schoolUpdate: schoolUpdateReducer,
  schoolDelete: schoolDeleteReducer,

  // Student reducers
  studentCreate: studentCreateReducer,
  studentList: studentListReducer,
  studentDetails: studentDetailsReducer,
  studentUpdate: studentUpdateReducer,
  studentDelete: studentDeleteReducer,

  // Lecturer reducers
  lecturerCreate: lecturerCreateReducer,
  lecturerList: lecturerListReducer,
  lecturerDetails: lecturerDetailsReducer,
  lecturerUpdate: lecturerUpdateReducer,
  lecturerDelete: lecturerDeleteReducer,

  // Parent reducers
  parentCreate: parentCreateReducer,
  parentList: parentListReducer,
  parentDetails: parentDetailsReducer,
  parentUpdate: parentUpdateReducer,
  parentDelete: parentDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
