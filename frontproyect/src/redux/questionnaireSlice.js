import { createSlice } from "@reduxjs/toolkit";

export const enviarCuestionario = async () => {
  try {
    const respuestas = obtenerRespuestasDelFormulario(); 

    const response = await fetch('http://localhost:4000/api/cuestionario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ respuestas }),
    });

    const data = await response.json();
    console.log(data); 
  } catch (error) {
    console.error('Error al enviar el cuestionario:', error);
  }
};


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
