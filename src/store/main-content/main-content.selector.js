import { createSelector } from "reselect";

const selectHome = state => state.mainContent;

export const selectMainContent = createSelector(
    [selectHome],
    mainContent => mainContent.hidden
)