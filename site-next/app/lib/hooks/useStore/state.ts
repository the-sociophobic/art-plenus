export type StateType = {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void

  mobileHeaderOpened: boolean
  setMobileHeaderOpened: (mobileHeaderOpened: boolean) => void

  artistsSearch: string
  setArtistsSearch: (artistsSearch: string) => void

  artistsSearchPage: number
  setArtistsSearchPage: (artistsSearchPage: number) => void

  showFoundArtistDropdown: boolean
  setShowFoundArtistDropdown: (showFoundArtistDropdown: boolean) => void
}


export const initializer = (set: initializerFnType) => ({
  isLoading: true,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),

  mobileHeaderOpened: false,
  setMobileHeaderOpened: (mobileHeaderOpened: boolean) => set({ mobileHeaderOpened }),

  artistsSearch: '',
  setArtistsSearch: (artistsSearch: string) => set({ artistsSearch }),

  artistsSearchPage: 1,
  setArtistsSearchPage: (artistsSearchPage: number) => set({ artistsSearchPage }),

  showFoundArtistDropdown: false,
  setShowFoundArtistDropdown: (showFoundArtistDropdown: boolean) => set({ showFoundArtistDropdown }),
})


export type initializerFnType = (
  partial: StateType | Partial<StateType> | ((state: StateType) => StateType | Partial<StateType>),
  replace?: false | undefined
) => void
