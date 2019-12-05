import {connect}from 'react-redux'
import Users from './Users'
import {followAC, unFollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC} from '../../Redux/usersReducers'

let mapStateToPropsm = (state) => {
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCounts:state.usersPage.totalUsersCounts,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToPropsm, mapDispatchToProps)(Users)