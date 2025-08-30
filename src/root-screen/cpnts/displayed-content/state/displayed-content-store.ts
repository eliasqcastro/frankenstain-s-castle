import { createStore, useStore } from "zustand"

export const ContentsForDisplay = {

    ALERTS: 'alerts',
    FEED: 'feed',
    FRANKENSTEINS_CASTLE: 'frankensteins-castle',
    HOME: 'home',
    MESSAGES: 'messages',
    PROJECT_FINANCING: 'project-financing',
    SETTINGS: 'settings',
    LOGOUT: 'logout',
    WALLET: 'wallert'

}

export type ContentsForDisplay = typeof ContentsForDisplay[keyof typeof ContentsForDisplay]

type DisplayedContentState = {

    contentToDisplay: ContentsForDisplay
    setContentToDisplay: (contentToDisplay: ContentsForDisplay) => void
}

export const displayedContentStore = createStore<DisplayedContentState>((set) => ({

    contentToDisplay: ContentsForDisplay.FEED,
    setContentToDisplay: (newContentToDisplay) => set({ contentToDisplay: newContentToDisplay })
}))

export function useDisplayedContentStore() {

    return useStore(displayedContentStore)
}