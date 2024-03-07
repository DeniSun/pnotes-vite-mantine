import {LinkAPI} from '@/API/LinkAPI';
import {ILinkItem} from '@/components/LinkList/types';
import type {RootState} from '@/Store/store';
import type {PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState: ILinkItem[] = [
  // { id: 1, title: 'Initial', href: 'link to test', tags: ['test', 'initial'] },
];

export const fetchLinkList = createAsyncThunk('linkList/fetchLinkList', async () => {
  return await LinkAPI.getLinkList();
});

export const linkListSlice = createSlice({
  name: 'linkList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Partial<ILinkItem>>) => {
      //state.linkItems.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLinkList.fulfilled, (state, { payload }) => {
      return { ...state, linkItems: payload };
    });
  },
});

export const { addItem } = linkListSlice.actions;
export const selectLinkList = (state: RootState) => state.linkList;

export default linkListSlice.reducer;
