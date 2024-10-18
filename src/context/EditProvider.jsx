import { fakeData } from '../fakeData/fakedata'
import { EditContext } from './EditContext'

const initialState = fakeData


export const EditProvider = ({ children }) => {
    return (
    <EditContext.Provider value={{initialState}}>
        {children}
    </EditContext.Provider>
  )
}
