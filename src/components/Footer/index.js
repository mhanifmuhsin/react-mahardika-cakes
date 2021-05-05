import * as React from 'react';
import './styles.css';
import instagram from '../../images/fu-ins.svg';
import tokped from '../../images/fu-top.svg';
import shoppe from '../../images/fu-sho.svg';
import ocshoppe from '../../images/oc-shop.svg';
import octokped from '../../images/oc-top.svg';
import ocgrab from '../../images/oc-gb.svg';
import ocwa from '../../images/oc-wa.svg';
import bca from '../../images/oc-bca.svg';
import bri from '../../images/oc-bri.svg';
import mdr from '../../images/oc-mdr.svg';
import ovo from '../../images/oc-ovo.svg';
import link from '../../images/oc-link.svg';
import gop from '../../images/oc-gop.svg';


export default function Footer() {
    return (
        <div className="hr">
            <div className='container-footer'>
                <div className="row justify-content-around content-footer">
                    <div className="col-3 footer-about">
                        <h5>MAHARDIKA CAKE</h5>
                        <p>Soufflé caramels sweet roll powder jelly-o cake apple pie danish liquorice marshmallow. Halvah tart topping lemon drops icing cookie cheesecake croissant. Cookie muffin chocolate apple pie. Chocolate bar carrot cake ice cream caramels. Lollipop cupcake cookie.</p>
                        <div className="row footer-follow">
                        <p>Follow us:</p>
                        <div className="footer-img">
                        <img src={instagram} alt="gambar"/>
                        <img src={tokped} alt="gambar"/>
                        <img src={shoppe} alt="gambar"/>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-3 footer-channel">
                        <h5>Our Online Channel</h5>
                        <div className="channel-contact">
                            <img src={ocwa} alt="gambar"/>
                            <img src={ocgrab} alt="gambar"/>
                            <img src={octokped} alt="gambar"/>
                            <img src={ocshoppe} alt="gambar"/>
                        </div>
                        <h5>We Accept</h5>
                        <div className="channel-pay1">
                            <img src={bca} alt="gambar"/>
                            <img src={bri} alt="gambar"/>
                            <img src={mdr} alt="gambar"/>
                        </div>
                        <div className="channel-pay2">
                            <img src={ovo} alt="gambar"/>
                            <img src={link} alt="gambar"/>
                            <img src={gop} alt="gambar"/>
                        </div>
                    </div>
                    <div className="col-3 footer-contact">
                        <h5>Company</h5>
                        <p>Our Contact & Location</p>
                        <p>Company Profile</p>
                        <p>Partnership</p>
                        <p>Careers</p>
                    </div>
                    <div className="col-3 footer-operational">
                        <h5>Jam Operasional</h5>
                        <p>Senin s/d Sabtu 06.45-21.00</p>
                        <p>Minggu 06.45-21.00</p>
                        <h5>Lokasi</h5>
                        <p>Jl. Kuta Kencana Utara No.17</p>
                        <h5>Kontak</h5>
                        <p>Email: admin@mahardikasolusi.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}