import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------

export const initialState = {
    page: 1,
    limit: 9,
    type: 'Kaufen',
    category: '',
    minPrice: '',
    maxPrice: '',
    minArea: '',
    maxArea: '',
    room: '',
    search: '',
    propertiesData: []
}

const propertySlice = createSlice({
    name: "properties",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setMinPrice: (state, action) => {
            state.minPrice = action.payload;
        },
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
        },
        setMinArea: (state, action) => {
            state.minArea = action.payload;
        },
        setMaxArea: (state, action) => {
            state.maxArea = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setRoom: (state, action) => {
            state.room = action.payload;
        },
        setPropertiesData: (state, action) => {
            state.propertiesData = action.payload;
        },
        setInitialData: (state, action) => {
            const {
                page,
                limit,
                type,
                category,
                minPrice,
                maxPrice,
                minArea,
                maxArea,
                room,
                search,
                propertiesData
            } = action.payload;

            state.page = page;
            state.limit = limit;
            state.type = type;
            state.category = category;
            state.minPrice = minPrice;
            state.maxPrice = maxPrice;
            state.minArea = minArea;
            state.maxArea = maxArea;
            state.room = room;
            state.search = search;
            state.propertiesData = propertiesData;
        }
    },
});

export const {
    setCategory,
    setLimit,
    setMaxArea,
    setMaxPrice,
    setMinArea,
    setMinPrice,
    setPage,
    setPropertiesData,
    setSearch,
    setType,
    setRoom,
    setInitialData
} = propertySlice.actions;

export default propertySlice.reducer;
