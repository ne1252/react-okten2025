

const url = 'https://dummyjson.com'
export const getUser = async(page:string)=>{
    console.log('ser')
    const limit = 30;
    const skip = limit*(+page)-limit;
    const respons = await fetch(url + '/users' + '?skip=' + skip)
        .then(value => value.json());
    return respons;
}
//url +'/users'+'?skip'+'30'
//'https://dummyjson.com/users?skip=30'