import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setInputBentuk, setInputDekorasi, setInputUkuran, setInputTopping, setInputJumlah, setInputTotal, resetInput } from '../../features/Cart/actions';
import './styles.css';
import bintang from '../../images/Vector.svg'

export default function Detail(props) {
    const bentuk = useSelector(state => state.inputs.bentuk)
    const dekorasi = useSelector(state => state.inputs.dekorasi)
    const ukuran = useSelector(state => state.inputs.ukuran)
    const topping = useSelector(state => state.inputs.topping)
    const jumlah = useSelector(state => state.inputs.jumlah)
    const total = useSelector(state => state.inputs.total)

    let dispacth = useDispatch();

    return (
        <div className="container-detail">
            <div className='row'>
                <div className="d-flex flex-column col-md-6 ">
                    <div className="d-flex justify-content-center main-picture">
                        {props.productPreview && props.productPreview.map((item) => {
                            return <div><img src={item.cakeImage} style={{ width: "500px", height: "500px" }} /></div>
                        })}
                    </div>
                    <div className="row d-flex justify-content-center list-picture">
                        {props.productPreview && props.productPreview.map((item) => {
                            return <div><img src={item.cakeImage} style={{ width: "80px", height: "80px" }} /></div>
                        })}
                    </div>
                </div>
                <div className="col-md-5 detail-form">
                    {props.productPreview && props.productPreview.map((item) => {
                        return <div>
                            <div className="detail-form-tittel">
                                <h1>{item.nama}</h1>
                                <h5>{item.rangeHarga}</h5>
                                <div className="row review">
                                    <img src={bintang}></img>
                                    <img src={bintang}></img>
                                    <img src={bintang}></img>
                                    <img src={bintang}></img>
                                <span> 1 Review</span>
                                </div>
                            </div>
                            <div className="detail-form-body">
                                <p>SKU : {item.sku}</p>
                                <p>Kategori : {item.kategori}</p>
                                <p>Rasa : {item.rasa}</p>
                            </div>
                            <div className="detail-form-desc">
                                <p>{item.desc}</p>
                            </div>

                            <form>
                                {/* Radio Bentuk */}
                                <fieldset className="form-group">
                                    <div className="row radio-toolbar">
                                        <legend className="col-form-label col-sm-2 pt-0">Bentuk</legend>
                                        <div className="col-sm-10">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="bentuk" id="bentuk" value={bentuk} checked={bentuk === 'Bulat'} onChange={_ => dispacth(setInputBentuk('Bulat'))} />
                                                <label className="form-check-label" for="bentuk1">
                                                    Bulat
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="bentuk" id="bentuk" value={bentuk} checked={bentuk === 'Kotak'} onChange={_ => dispacth(setInputBentuk('Kotak'))} />
                                                <label className="form-check-label" for="bentuk2">
                                                    Kotak
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </fieldset>

                                {/* Radio Ukuran */}
                                <fieldset className="form-group">
                                    <div className="row">
                                        <legend className="col-form-label col-sm-2 pt-0">Ukuran</legend>
                                        <div className="col-sm-10">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="ukuran" id="ukuran" value={ukuran} checked={ukuran === '15 CM'} onChange={_ => dispacth(setInputUkuran('15 CM'))} />
                                                <label className="form-check-label" htmlFor="ukuran1">
                                                    15 CM
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="ukuran" id="ukuran" value={ukuran} checked={ukuran === '16 CM'} onChange={_ => dispacth(setInputUkuran('16 CM'))} />
                                                <label className="form-check-label" htmlFor="ukuran2">
                                                    16 CM
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="ukuran" id="ukuran" value={ukuran} checked={ukuran === '22 CM'} onChange={_ => dispacth(setInputUkuran('22 CM'))} />
                                                <label className="form-check-label" htmlFor="ukuran3">
                                                    22 CM
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                {/* Topping */}
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="topping">Topping</label>
                                    <div className="col-sm-5">
                                        <select className="u-full-width form-control" id="topping" name="topping" value={topping} onChange={e => dispacth(setInputTopping(e.target.value))}>
                                            <option value="">--Pilih Topping--</option>
                                            <option value="Full Cokelat">Full Cokelat</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Dekorasi */}
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="dekorasi">Dekorasi</label>
                                    <div className="col-sm-5">
                                        <select className="u-full-width form-control" id="dekorasi" name="dekorasi" value={dekorasi} onChange={e => dispacth(setInputDekorasi(e.target.value))}>
                                            <option value="">--Pilih Dekorasi--</option>
                                            <option value="Bunga">Bunga</option>
                                        </select>
                                    </div>
                                </div>

                                {/*  Total */}
                                <div className="form-group row">
                                    <label for="total" className="col-sm-2 col-form-label">Total</label>
                                    <div className="label-idr">
                                        <span>IDR</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <input type="text" className="total border-0" id="total" name="total"
                                            value={item.amount * jumlah} onChange={e => dispacth(setInputTotal(e.target.value, 0))} />
                                    </div>
                                </div>


                                {/* Jumlah */}
                                <div className="form-group row">
                                    <label for="jumlah" className="col-sm-2 col-form-label">Jumlah</label>
                                    <div className="col-sm-2">
                                        <input type="number" className="jumlah" id="jumlah" name="jumlah"
                                            value={jumlah} onChange={e => dispacth(setInputJumlah(e.target.value))} />
                                    </div>
                                    {/* Button */}
                                    <div className="col-sm-4">
                                        <button type="button" className="btn-cart" onClick={_ =>
                                            dispacth(addItem(item.nama, item.amount, dekorasi, bentuk, ukuran, topping, jumlah, total)
                                            )} >TAMBAH KE KERANJANG</button>
                                    </div>
                                    
                                </div>



                            </form>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}