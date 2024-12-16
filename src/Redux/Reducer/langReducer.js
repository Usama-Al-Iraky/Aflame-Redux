export const langReducer = (state = {language:''}, action) => {
    if(action.type === 'en'){return{language: 'en_US'}}
    if(action.type === 'ar'){return{language: 'ar'}}
    return{state}
}