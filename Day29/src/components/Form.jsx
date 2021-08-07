import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePlace, updatePlaceData } from '../actions'


function Form() {
const place = useSelector(state => state.place)
const dispatch = useDispatch()

    return (
    <div className="container">
         <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <input
                    type="text"
                    className="p-1 px-2 m-2"
                    value={place}
                    onChange={(e)=>{
                        dispatch(updatePlace(e.target.value))
                    }}
                    />
                <button className="btn btn-dark m-1"
                onClick={
                    ()=>{
                        dispatch(updatePlaceData(place))
                    }
                } >
                    Search
                    </button>
             </div>
        </div>
    </div> 

    )
}

export default Form
