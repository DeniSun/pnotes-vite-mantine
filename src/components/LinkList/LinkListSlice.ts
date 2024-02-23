import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '@/Store/store';

// Define a type for the slice state
interface LinkItem {
    id: number;
    title: string;
    href: string;
    tags: string[];
}

interface LinkListState {
    linkItems: LinkItem[];
}

// Define the initial state using that type
const initialState: LinkListState = {
    linkItems: [{id: 1, title: 'Initial', href: 'link to test', tags: ['test', 'initial']}],
};

export const linkListSlice = createSlice({
    name: 'linkList',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<LinkItem>) => {
            state.linkItems.push(action.payload);
        },
        updateItem: (state, action: PayloadAction<LinkItem>) => {
            let index = state.linkItems.findIndex((x) => x.id === action.payload.id);
            if (index !== -1) {
                state.linkItems[index] = {
                    id: action.payload.id,
                    title: action.payload.title,
                    href: action.payload.href,
                    tags: action.payload.tags,
                };
            }
        },
        deleteItem: (state, action: PayloadAction<LinkItem>) => {
            state.linkItems.filter((x) => x.id !== action.payload.id);
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        //    incrementByAmount: (state, action: PayloadAction<number>) => {
        //      state.value += action.payload;
        //    },
    },
});

export const {addItem, deleteItem} = linkListSlice.actions;
export const selectLinkList = (state: RootState) => state.linkList.linkItems;

export default linkListSlice.reducer;
