import {connect}from 'react-redux'
import Users from './Users'
import {followAC, unFollowAC, setUsersAC} from '../../Redux/usersReducers'

let mapStateToPropsm = (state) => {
    return {
        users:state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToPropsm, mapDispatchToProps)(Users)