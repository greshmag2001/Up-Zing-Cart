.                                      ----------------------------------
.                                        REDUX - STATE MANAGEMENT TOOL
.                                      ----------------------------------

-To avoid props drilling to acheive state management
-Installing: npm i @reduxjs/toolkit react-redux
-install react toastify : npm i react-toastify
-REDUX toolkit:
    -configurestore() : creating a Redux store
    -Provider from react-redux :provide store to react application
    -createSlice():used to hold both action & reducer together and it return reducer, actions
    -useSElector : hook used to access state from store to component
    -useDispatch : hook used to dispatch/excecute actions from components
    -createAsyncThunk : A function that accepts a Redux action type string and a callback function that should return a  promise.
    -extraReducers : used to handle actions requiring promise.


