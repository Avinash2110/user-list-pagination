export const getUsers = (page=1) =>{
    return fetch(`https://reqres.in/api/users?page=${page}`)
            .then(response =>{
                return response.json();
            })
            .catch(() => console.log("Error in fetching the data"));
}