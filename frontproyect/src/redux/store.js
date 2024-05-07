import { configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from "./questionnaireSlice";
import modalReducer from "./modalSlice";

export default configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
    modal: modalReducer,
  },
});
