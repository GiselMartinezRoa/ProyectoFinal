import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Favorites = () => {
    const dispatch = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel);
    return (

        <Fragment>
            <br></br>
            <div class="d-flex justify-content-center"><h2>Listado de Favoritos</h2></div>
            <br>
            </br><table class="table">
                <thead>
                    <tr>
                        <th class="table-success text-center" scope='col'>ID </th>
                        <th tr class="table-danger text-center" scope='col'>NOMBRE </th>
                        <th class="table-info text-center" scope='col'>NACIONALIDAD </th>
                        <th class="table-warning text-center" scope='col'>EDAD </th>
                    </tr>
                </thead>
                <tbody>
                    {celebrities_List.map(c => {
                        return (
                            <tr>
                                <td class="table-success text-center" scope='row'>{c.birthday}</td>
                                <td class="table-danger text-center" scope='row'>{c.name}</td>
                                <td class="table-info text-center" scope='row'>{c.nationality}</td>
                                <td class="table-warning text-center" scope='row'>{c.age}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </Fragment >
    )
}