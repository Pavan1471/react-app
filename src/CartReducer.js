import {createSlice} from '@reduxjs/toolkit';
const initialState ={
    cartValues:[]
}

const CartReducer = createSlice({
    name:'Cartreducer',
    initialState,
    reducers :{
        incrementcart:(state,action)=>{
            state.cartValues.push(action.payload)
            
        }
    }
})

export const {incrementcart} =CartReducer.actions;
export default CartReducer.reducer;