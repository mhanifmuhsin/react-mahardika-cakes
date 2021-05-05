import * as React from 'react';
import { useSelector} from 'react-redux';
import { useDispatch} from 'react-redux';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { deleteItem, resetCart } from '../../features/Cart/actions';

export default function Navbar(props) {
  let carts = useSelector(state => state.cart);
  let dispacth = useDispatch();

  const totalPayment = carts.reduce((total,item) => {
    return total + (item.harga * item.jumlah)
}, 0)

  return (
    <div className="nav-container">

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light d-flex">
        <span className="nav-brand">MAHARDIKA CAKE</span>
        <span className="nav-home ml-auto" onClick={props.notDetail}>HOME</span>
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#" data-toggle="modal" data-target="#cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart <span className='totalItem'>{carts.length}</span></a>
        </div>
      </nav>

      {/* Modal Keranjang belanja */}
      <div className="modal fade" id="cart" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Keranjang belanja</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {carts.length > 0 ? (
                <div>
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Bentuk</th>
                        <th scope="col">Ukuran</th>
                        <th scope="col">Topping</th>
                        <th scope="col">Dekorasi</th>
                        <th scope="col">Jumlah</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Total</th>
                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts && carts.map((item, index) => {
                        return <tr key={index}>
                          <td>{item.nama}</td>
                          <td>{item.bentuk}</td>
                          <td>{item.ukuran}</td>
                          <td>{item.topping}</td>
                          <td>{item.dekorasi}</td>
                          <td>{item.jumlah}</td>
                          <td>{item.harga}</td>
                          <td>{item.harga * item.jumlah}</td>
                          <td><button type='button' onClick={_ =>dispacth(deleteItem(item.id))}><FontAwesomeIcon icon={faTrashAlt} /> </button></td>
                        </tr>
                      })}
                    </tbody>
                  </table>
                  <p>Total pembayaran : IDR {totalPayment}</p>
                </div>
              ) : (
                <div className="alert alert-warning" role="alert">
                  Keranjang belanja kosong, silahkan pilih kue yang anda suka !
                </div>
              )}
            </div>
            <div className="modal-footer">
              {carts.length > 0 ? (
                <div>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Keluar</button>
                  <button type="button" className="btn btn-primary m-2" data-dismiss="modal" data-toggle="modal" data-target="#payment" onClick={_ =>dispacth(resetCart())}>Bayar</button>
                </div>
              ) : (
                <div>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Keluar</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

{/* Modal Pembayaran */}
      <div className="modal fade " id="payment" tab-index="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered " role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Payment</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="alert alert-success" role="alert">
                                        <p>Pembayaran berhasil, terima kasih Muhamad Hanif Muhsin</p>
                                        <p>Barang anda akan di kirim ke : Baleendah</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>


  )

}