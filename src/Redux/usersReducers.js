const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        { id: 1, photoUrl: '', followed: true, fullName: "Mars", status: "I'm SUPERSTAR ejje", location: { city: "Ufa", country: "Great of Bashortostan" } },
        { id: 2, photoUrl: '', followed: false, fullName: "татарин", status: "I'm gavnoed", location: { city: "kazan", country: "FCK Tatarstan" } },
        { id: 3, photoUrl: '', followed: true, fullName: "ЭНДРЮ", status: "I'm столичный", location: { city: "Moscow", country: "Russia" } },
        { id: 4, photoUrl: '', followed: true, fullName: "Северяк", status: "Че так холодно, ебать?", location: { city: "Raduzhnuy", country: "Russia" } }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return { ...u, followed: false }
                        }
                        return u
                    })
                }
        case SET_USERS:
                return{
                    ...state, users:[...state.users, ...action.users]
                }
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default usersReducer