import { createSlice } from "@reduxjs/toolkit";

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState: {
    respuestas: {},
  },
  reducers: {
    setRespuesta: (state, action) => {
      const { preguntaId, respuesta } = action.payload;
      state.respuestas[preguntaId] = respuesta;
    },
    clearRespuestas: (state) => {
      state.respuestas = {};
    },
  },
});

export const { setRespuesta, clearRespuestas } = questionnaireSlice.actions;

export const selectRespuestas = (state) => state.questionnaire.respuestas;

export default questionnaireSlice.reducer;
