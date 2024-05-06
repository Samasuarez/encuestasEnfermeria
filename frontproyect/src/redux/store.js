import { configureStore } from '@reduxjs/toolkit';
import questionnaireReducer from './questionnaireSlice';

export default configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});
