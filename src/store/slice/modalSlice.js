import { createSlice } from '@reduxjs/toolkit';

const initialState= {
  isOpen: false,
  modalContent: null
}

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    toggleModal(state) {
      state.isOpen = !state.isOpen;
    },
    fetchModalContent(state, action){
      state.modalContent = action.payload
    },
    // changeModalDesc(state, action){
    //   state.modalContent.data[0].MoreDescription = action.payload
    // }
  },
});

export default modalSlice;