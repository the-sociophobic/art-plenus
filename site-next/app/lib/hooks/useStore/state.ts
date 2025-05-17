export type StateType = {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void

  mobileHeaderOpened: boolean
  setMobileHeaderOpened: (mobileHeaderOpened: boolean) => void
}


export type initializerFnType = (
  partial: StateType | Partial<StateType> | ((state: StateType) => StateType | Partial<StateType>),
  replace?: false | undefined
) => void


export const initializer = (set: initializerFnType) => ({
  isLoading: true,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),

  mobileHeaderOpened: false,
  setMobileHeaderOpened: (mobileHeaderOpened: boolean) => set({ mobileHeaderOpened }),
})
