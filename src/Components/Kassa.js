import {React, useState} from 'react'
import { connect } from 'react-redux'
import {KassaPush, EditKassa, DeleteKassa} from "../redux/ActionMaps"
import {Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"
function Kassa({ArrayKassa, KassaPush, EditKassa, DeleteKassa}) {
    const [indexKassa, setIndexKassa] = useState(0)
    const [Visible, setVisible] = useState(false)
    const [EditVisible, setEditVisible] = useState(false)

    function onSubmitKassa(e) {
        e.preventDefault()
        let nameKassa = e.target[0].value
        KassaPush( nameKassa)
        setVisible(false)
    }

    function EditSubmit(e) {
        e.preventDefault()
        let editNameKassa = e.target[0].value
        EditKassa(editNameKassa, indexKassa)
        setEditVisible(false)
    }

    function editBtnKassa(index) {
        setEditVisible(prev => !prev)
        setIndexKassa(index)
    }

    function deleteBtn(index) {
        DeleteKassa(index)
    }

    return (
        <div>
            <div className="container-fluid ">
                <div className="row my-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row justify-content-between my-3">
                                    <div className="col-3">
                                    </div>
                                    <div className="col-6 text-center">
                                        <h2>Kassa</h2>
                                    </div>
                                    <div className="col-2 text-end">
                                        <button className="btn btn-success" onClick={() => setVisible(prev => !prev)}>Add</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <table className="table table-hover table-striped table-bordered text-center">
                                            <thead>
                                                <tr>
                                                    <th>N</th>
                                                    <th>Ism</th>
                                                    <th>O'zgartirish</th>
                                                    <th>O'chirish</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    ArrayKassa?.map((item, index) =>
                                                        <tr key={index}>
                                                            <td>{index + 1} </td>
                                                            <td>{item.name} </td>
                                                            <td><button className="btn btn-warning" onClick={() => editBtnKassa(index)}>edit</button> </td>
                                                            <td><button className="btn btn-danger" onClick={() => deleteBtn(index)}>delete</button> </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        Visible ? <div className="col-3">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Kassa qo'shish</h4>
                                </div>
                                <div className="card-body">
                                    <form id="form" onSubmit={onSubmitKassa}>
                                        <input type="text" className="form-control mt-3" placeholder="kassa nomi" />
                                    </form>
                                </div>
                                <div className="card-footer text-end">
                                    <button className="btn btn-success me-2" form="form">save</button>
                                    <button className="btn btn-danger" onClick={() => setVisible(prev => !prev)}>cancel</button>
                                </div>
                            </div>

                        </div> : ''
                    }

                </div>
                {
                    EditVisible ? <Modal isOpen={EditVisible} toggle={editBtnKassa}>
                        <ModalHeader>
                            Ma'lumot o'zgartirish
                        </ModalHeader>
                        <ModalBody>
                            <form id="form" onSubmit={EditSubmit}>
                                <input type="text" className="form-control mt-3" placeholder="kassa nomi   " />
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-success me-2" form="form">save</button>
                            <button className="btn btn-danger" onClick={editBtnKassa}>cancel</button>
                        </ModalFooter>
                    </Modal> : ''
                }
            </div>
        </div>
    )
}

function mapToState(state) {
    return {
        ArrayKassa:state.Kassa_reducer.ArrayKassa
    }
}

export default connect(mapToState,{KassaPush, EditKassa, DeleteKassa})(Kassa)
