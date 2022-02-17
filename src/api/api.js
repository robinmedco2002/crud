const axios = require('axios').default;

export const getListing = () => {
    let getData = axios.get('https://gorest.co.in/public/v1/users').then(resp => {
        console.log("resp", resp)
        return resp
    }).catch(error => {
        console.log("error", error)
        return error
    })
    return getData;
}

export const postUserData = (inputData) => {
    console.log("inputData", inputData)
    let getData = axios.put('https://gorest.co.in/public/v1/users', {
        name:inputData.name,
        gender:inputData.gender,
        email:inputData.email  
    }).then(function (response){
        return response
            console.log(response)
        }).catch(function (error){
            return error
            console.log(error)
        });
        return getData
}


export const post2UserData = (inputData) => {
    console.log("inputData", inputData)
    let getData = axios.post('https://gorest.co.in/public/v1/users', {
        name:inputData.name,
        gender:inputData.gender,
        email:inputData.email  
    }).then(function (response){
        return response
            console.log(response)
        }).catch(function (error){
            return error
            console.log(error)
        });
        return getData
}