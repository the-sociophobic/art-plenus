import { create } from 'zustand'

import { WebAppAuthObject } from '../utils/auth'


export type SortOrderType = 'asc' | 'desc'

export type StateType = {
  user: null | WebAppAuthObject
  setUser: (user: null | WebAppAuthObject) => void
}


const useStore = create<StateType>(set => ({
  user: null,
  setUser: (user: null | WebAppAuthObject) => set({ user }),
}))


export default useStore
