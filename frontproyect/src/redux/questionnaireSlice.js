import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const enviarCuestionario = createAsyncThunk(
  "questionnaire/enviarCuestionario",
  async ({ usuarioId, respuestas }, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:4000/api/cuestionario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuarioId, respuestas }),
      });
      if (response.ok) {
        return true;
      } else {
        throw new Error(
          "Error al enviar el cuestionario: " + response.statusText
        );
      }
    } catch (error) {
      throw error;
    }
  }
);

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
