import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCel, setCel } from '../reducers/slices/celSlices';

const Celebrities_List = ({ celebrities }) => {
    const dispatch = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel)
    function handleAdd(celid) {
        const celebrity = celebrities.find(c => c.birthday === celid);
        if (celebrities_List.find(c => c.birthday === celid)) {
            dispatch(removeCel(celid));
        } else {
            dispatch(setCel(celebrity));
        }
        console.log(celebrity);
    }



    return (
        <div class="list-group list-group-flush">

            <div class="d-flex justify-content-center"><h2>Datos curiosos de las Celebridades</h2></div>
            <br></br>
            <div> {celebrities.map(c => {
                return (
                    <div class="card border-info mb-3">
                        <div class="card-header">Nombre: {c.name}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title aling-center">Ocupación: {c.occupation}</h5>
                            <p class="card-text">Edad: {c.age}</p>
                            <button type="button" class="btn btn-primary" onClick={() => handleAdd(c.birthday)}>Agregar a Celebridades Favoritas</button>
                        </div>
                    </div>
                )
            }
            )}
            </div>
        </div>
    )
}


export default Celebrities_List