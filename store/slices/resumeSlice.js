import { createSlice } from "@reduxjs/toolkit";

const defaultResume = {
  contact: {},
  summary: {},
  education: [],
  experience: [],
  projects: [],
  skills: {},
  certificates: [],
  languages: [],
  references: [],

  saved: false,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState: defaultResume,
  reducers: {
    updateResumeValue: (state, action) => {
      const { tab, name, value, index } = action.payload;

      // Initialize the array or object if it doesn't exist
      if (!state[tab]) {
        state[tab] = Array.isArray(defaultResume[tab]) ? [] : {};
      }

      if (index != null) {
        // Initialize the array if it doesn't exist
        if (!Array.isArray(state[tab])) {
          state[tab] = [];
        }

        // Initialize the object at the index if it doesn't exist
        if (!state[tab][index]) {
          state[tab][index] = {};
        }

        state[tab][index][name] = value;
      } else {
        state[tab][name] = value;
      }

      state.saved = false;
    },

    addNewIndex: (state, action) => {
      const { tab, name, value } = action.payload;

      // Initialize the array if it doesn't exist
      if (!state[tab]) {
        state[tab] = [];
      }

      // Add a new empty object to the array
      state[tab].push({});

      state.saved = false;
    },

    deleteIndex: (state, action) => {
      const { index, tab } = action.payload;
      console.log("deleting", index, "from", tab);

      // Check if the array exists
      if (state[tab] && Array.isArray(state[tab])) {
        state[tab].splice(index, 1);
      }

      state.saved = false;
    },

    // for move index
    moveIndex: (state, action) => {
      const { index, tab, dir } = action.payload;

      // Check if the array exists
      if (!state[tab] || !Array.isArray(state[tab])) {
        return;
      }

      const newIndex = dir === "up" ? index - 1 : index + 1;

      // Check if indices are valid
      if (newIndex < 0 || newIndex >= state[tab].length) {
        return;
      }

      const temp = state[tab][index];
      state[tab][index] = state[tab][newIndex];
      state[tab][newIndex] = temp;

      state.saved = false;
    },

    saveResume: (state) => {
      state.saved = true;
    },
  },
});

export const {
  updateResumeValue,
  addNewIndex,
  deleteIndex,
  saveResume,
  moveIndex,
} = resumeSlice.actions;
export default resumeSlice.reducer;
