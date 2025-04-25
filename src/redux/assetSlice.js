import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    { id: 1, name: 'Bitcoin', price: 30000, change: 0, volume: 10000 },
    { id: 2, name: 'Ethereum', price: 2000, change: 0, volume: 5000 },
    { id: 3, name: 'Solana', price: 100, change: 0, volume: 2000 },
  ],
};

const assetSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    updateAsset: (state, action) => {
      const { id, price, change, volume } = action.payload;
      const asset = state.assets.find(asset => asset.id === id);
      if (asset) {
        asset.price = price;
        asset.change = change;
        asset.volume = volume;
      }
    },
  },
});

export const { updateAsset } = assetSlice.actions;
export default assetSlice.reducer;