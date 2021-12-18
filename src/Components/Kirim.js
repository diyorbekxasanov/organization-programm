import { React, useState } from 'react'
import { connect } from 'react-redux'
import { KirimPush, EditKirim, DeleteKirim } from "../redux/ActionMaps"
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"

function Kirim({ ArrayKirim, ArrayF, ArrayKassa, KirimPush, EditKirim, DeleteKirim }) {
    const [indexKassa, setIndexKassa] = useState(0)
    const [Visible, setVisible] = useState(false)
    const [EditVisible, setEditVisible] = useState(false)

    function SubmitKirim(data) {
        data.preventDefault()
        const a ={
            nameKirim:data.target[0].value,
            kassaKirim:data.target[1].value,
            miqdori:data.target[2].value,
            date:data.target[3].value
        }
        KirimPush(a)
        setVisible(p=>!p)
    }

    function editBtnKirim(index) {
        setEditVisible(prev=>!prev)
        setIndexKassa(index)
    }

    function EditSubmit(data) {
        data.preventDefault()
        const a = {
            editKirimName:data.target[0].value,
            editKassaName:data.target[1].value,
            editMiqdor:data.target[2].value,
            editDate:data.target[3].value,
            editIndex:indexKassa
        }
        EditKirim(a)
        setEditVisible(p=>!p)

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
                                        <h2>Kirim</h2>
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
                                                    <th>Kassa</th>
                                                    <th>Miqdori</th>
                                                    <th>Sana</th>
                                                    <th>O'zgartirish</th>
                                                    <th>O'chirish</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    ArrayKirim?.map((item, index) =>
                                                        <tr key={index}>
                                                            <td>{index + 1} </td>
                                                            <td>{item.nameKirim} </td>
                                                            <td>{item.kassaKirim} </td>
                                                            <td>{item.miqdori} </td>
                                                            <td>{item.date} </td>
                                                            <td><button className="btn btn-warning" onClick={() => editBtnKirim(index)}>edit</button> </td>
                                                            <td><button className="btn btn-danger" onClick={() => DeleteKirim(item.id)}>delete</button> </td>
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
                                    <h4>Kirim</h4>
                                </div>
                                <div className="card-body">
                                    <form id="form" onSubmit={SubmitKirim}>
                                        <select className="form-select">
                                            <option>Foydalanuvchini tanlang</option>
                                            {
                                                ArrayF?.map(item =>
                                                    <option value={item.name} key={item.id}>{item.name}</option>
                                                )
                                            }
                                        </select >
                                        <select className="form-select mt-3">
                                            <option >Kassani tanlang</option>
                                            {
                                                ArrayKassa?.map(item =>
                                                    <option value={item.name} key={item.id}>{item.name}</option>
                                                )
                                            }
                                        </select>
                                        <input type="text" className="form-control mt-3" placeholder="Miqdori" />
                                        <input type="date" className="form-control mt-3" />
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
                    EditVisible ? <Modal isOpen={EditVisible} toggle={editBtnKirim}>
                        <ModalHeader>
                            Ma'lumot o'zgartirish
                        </ModalHeader>
                        <ModalBody>
                            <form id="form2" onSubmit={EditSubmit}>
                                <select className="form-select">
                                    <option>Foydalanuvchini tanlang</option>
                                    {
                                        ArrayF?.map(item =>
                                            <option value={item.name} key={item.id}>{item.name}</option>
                                        )
                                    }
                                </select >
                                <select className="form-select mt-3">
                                    <option >Kassani tanlang</option>
                                    {
                                        ArrayKassa?.map(item =>
                                            <option value={item.name} key={item.id}>{item.name}</option>
                                        )
                                    }
                                </select>
                                <input type="text" className="form-control mt-3" placeholder="Miqdori" />
                                <input type="date" className="form-control mt-3" />
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-success me-2" form="form2">save</button>
                            <button className="btn btn-danger" onClick={editBtnKirim}>cancel</button>
                        </ModalFooter>
                    </Modal> : ''
                }
            </div>
        </div>
    )
}

function mapToState(state) {
    return {
        ArrayKirim: state.Kirim_reducer.ArrayKirim,
        ArrayF: state.F_reducer.ArrayF,
        ArrayKassa: state.Kassa_reducer.ArrayKassa
    }
}

export default connect(mapToState, { KirimPush, EditKirim, DeleteKirim })(Kirim)
