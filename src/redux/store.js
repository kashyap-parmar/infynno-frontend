import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from 'react-redux'
import properyReducer from "./slice/propertySlice";

// --------------------------------------------------------

export const store = () => {
    return configureStore({
        reducer: {
            properyReducer
        }
    })
}

export const useAppDispatch = useDispatch.withTypes()
export const useAppSelector = useSelector.withTypes()
export const useAppStore = useStore.withTypes()