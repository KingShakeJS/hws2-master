const initState = {
    themeId: 1,
}
type stateType = typeof initState

type changeThemeIdAT = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state: stateType = initState, action: changeThemeIdAT): stateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {
                ...state,
                themeId: action.id
            }

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdAT => ({type: 'SET_THEME_ID', id}) // fix any
