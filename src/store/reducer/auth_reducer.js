

const INITIAL_STATE ={
    name : 'Yasir Bajwa',
    email : 'yasirbajwa369@gmail.com'
}

export default ( state = INITIAL_STATE ,action) => {
    console.log('auth_action==>',action)

    return state;
      
}