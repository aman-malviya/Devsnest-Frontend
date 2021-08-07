export const updatePlace=(place)=>{
    return {
        type:"UPDATE_PLACE",
        payload:place,
    }
}

export const updatePlaceData=(place)=>{
    // return {
    //     type:"UPDATE_PLACE_DATA",
    //     payload:place,
    // }
    //inorder to use return state which returns function instead of object we use react-thunk a middle ware
    return (dispatch)=>{
        fetch(
            `https://api.weatherapi.com/v1/current.json?key=812db64110f144689c064900210208&q=${place}`
          )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
              dispatch({
                type:"UPDATE_PLACE_DATA",
                    payload:data,
              })
            }); 
    }
}