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

import {
  // Attendance reducers
  attendanceCreateReducer,
  attendanceListReducer,
  attendanceDetailsReducer,
} from './reducers/attendanceReducers';

import {
  // Chat reducers
  chatFetchMessagesReducer,
  chatSendMessageReducer,
  chatActiveConversationReducer,
  chatEditDeleteMessageReducer,
} from './reducers/chatReducers';  

import {
  // Payment Transaction reducers
  paymentTransactionListReducer,
  paymentTransactionDetailsReducer,
  paymentTransactionCreateReducer,
  paymentTransactionUpdateReducer,
  paymentTransactionDeleteReducer,
  paymentTransactionByFeeReducer,
  stkPushReducer,
} from './reducers/paymentReducers';

import { uploadFileReducer } from './reducers/uploadReducers';
import { timetableByCourseReducer, timetableCreateReducer, timetableDeleteReducer, timetableDetailsReducer, timetableListReducer, timetableUpdateReducer } from './reducers/timetableReducers';
import { createFeesReducer, getAllFeesReducer, getFeesByStudentReducer, markFeesAsPaidReducer } from './reducers/feeReducers';
import { createConversationReducer, getAllConversationsReducer, getUserConversationsReducer } from './reducers/conversationReducers';
import { accountantCreateReducer } from './reducers/accountantReducers';
import { examCreateReducer, getAllExamsReducer } from './reducers/examReduccers';
import { courseUnitCreateReducer, getAllCourseUnitsReducer, getCourseUnitsByCourseReducer } from './reducers/courseUnitReducers';

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

    // Attendance reducers
    attendanceCreate: attendanceCreateReducer,
    attendanceList: attendanceListReducer,
    attendanceDetails: attendanceDetailsReducer,

    // Chat reducers
    chatMessages: chatFetchMessagesReducer,
    chatSendMessage: chatSendMessageReducer,
    chatActiveConversation: chatActiveConversationReducer,
    chatEditDeleteMessage: chatEditDeleteMessageReducer,
    
      // Timetable reducers
  timetableList: timetableListReducer,
  timetableDetails: timetableDetailsReducer,
  timetableCreate: timetableCreateReducer,
  timetableUpdate: timetableUpdateReducer,
  timetableDelete: timetableDeleteReducer,
  timetableByCourse: timetableByCourseReducer,


  //Fee Reducers
  createFees: createFeesReducer,
  getAllFees: getAllFeesReducer,
  getFeesByStudent: getFeesByStudentReducer,
  markFeesAsPaid: markFeesAsPaidReducer,

    // Payment Transaction reducers
    paymentTransactionList: paymentTransactionListReducer,
    paymentTransactionDetails: paymentTransactionDetailsReducer,
    paymentTransactionCreate: paymentTransactionCreateReducer,
    paymentTransactionUpdate: paymentTransactionUpdateReducer,
    paymentTransactionDelete: paymentTransactionDeleteReducer,
    paymentTransactionByFee: paymentTransactionByFeeReducer,
    stkPush:stkPushReducer,
    

      // Reducers for conversation module
  createConversation: createConversationReducer,
  AllConversations: getAllConversationsReducer,
  userConversationR: getUserConversationsReducer,

  createAccountant:accountantCreateReducer,

  createExam:examCreateReducer,
  examList:getAllExamsReducer,

  courseUnitCreate: courseUnitCreateReducer,
  getAllCourseUnits: getAllCourseUnitsReducer,
  getCourseUnitsByCourse: getCourseUnitsByCourseReducer,

    // Upload reducerr
    uploadFile: uploadFileReducer,
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
