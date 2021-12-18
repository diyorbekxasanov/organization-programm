import { React, useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { connect } from 'react-redux'
import { FPush, EditF, DeleteF } from '../redux/ActionMaps'
function Foydalanuvchi({ ArrayF, FPush, EditF, DeleteF }) {
    const [indexF, setIndexF] = useState(0)
    const [Visible, setVisible] = useState(false)
    const [EditVisible, setEditVisible] = useState(false)

    function onSubmitF(e) {
        e.preventDefault()
        let name = e.target[0].value
        let phone = e.target[1].value
        FPush(name, phone)
        setVisible(false)
    }

    function EditSubmit(e) {
        e.preventDefault()
        let editName = e.target[0].value
        let editPhone = e.target[1].value
        EditF(editName, editPhone, indexF)
        setEditVisible(false)
    }

    function editBtnF(index) {
        setEditVisible(prev => !prev)
        setIndexF(index)
    }

    function deleteBtn(index) {
        DeleteF(index)
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
                                        <h2>Foydalanuvchilar</h2>
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
                                                    <th>Telefon</th>
                                                    <th>O'zgartirish</th>
                                                    <th>O'chirish</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    ArrayF?.map((item, index) =>
                                                        <tr key={index}>
                                                            <td>{index + 1} </td>
                                                            <td>{item.name} </td>
                                                            <td>{item.phone} </td>
                                                            <td><button className="btn btn-warning" onClick={() => editBtnF(index)}>edit</button> </td>
                                                            <td><button className="btn btn-danger" onClick={()=>deleteBtn(index)}>delete</button> </td>
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
                                    <h4>Foydalanuvchi</h4>
                                </div>
                                <div className="card-body">
                                    <form id="form" onSubmit={onSubmitF}>
                                        <input type="text" className="form-control mt-3" placeholder="Ism"  />
                                        <input type="text" className="form-control mt-3" placeholder="Telefon"  />
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
                    EditVisible ? <Modal isOpen={EditVisible} toggle={editBtnF}>
                        <ModalHeader>
                            Ma'lumot o'zgartirish
                        </ModalHeader>
                        <ModalBody>
                            <form id="form" onSubmit={EditSubmit}>
                                <input type="text" className="form-control mt-3" placeholder="Ism" />
                                <input type="text" className="form-control mt-3" placeholder="Phone"  />
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-success me-2" form="form">save</button>
                            <button className="btn btn-danger" onClick={editBtnF}>cancel</button>
                        </ModalFooter>
                    </Modal> : ''
                }
            </div>
        </div>
    )
}

function mapToState(state) {
    return {
        ArrayF:state.F_reducer.ArrayF
    }
}

export default connect(mapToState,{FPush, EditF, DeleteF})(Foydalanuvchi)


