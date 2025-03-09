// 'use client'
// import { useRef } from 'react'
// import { Provider } from 'react-redux'
// import { store } from './store'
// import { initialState } from './slice/propertySlice'

// export default function StoreProvider({ children }) {
//     const storeRef = useRef(null)
//     if (!storeRef.current) {
//         // Create the store instance the first time this renders
//         storeRef.current = store()
//     }

//     return <Provider store={storeRef.current}>{children}</Provider>
// }

'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { setInitialData } from './slice/propertySlice'

// ------------------------------------------------------------------

export default function StoreProvider({ initialData, children }) {
    const storeRef = useRef(null)

    if (!storeRef.current) {
        storeRef.current = store();
        storeRef.current.dispatch(setInitialData(initialData))
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}
