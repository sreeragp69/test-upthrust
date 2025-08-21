import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user:  null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

interface SetUserPayload {
  user: null;
  token: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SetUserPayload>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer; 