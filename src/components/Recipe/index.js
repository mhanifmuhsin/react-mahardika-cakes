import * as React from 'react';
import './styles.css';
import recipe1 from '../../images/recipe-1.svg';
import recipe2 from '../../images/recipe-2.svg';

export default function Recipe() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 recipe-article">
                        <h1>Resep menuju kebahagian</h1>
                        <p className="head-tag">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed tincidunt ut laoreet dolore magna aliquam erat volutpat lorem</p>
                        <p>Edge Themes give you everything you need to create an amazing website. Designed and built with care, filled with creative elements and useful options, and completely user-friendly. Set up your website quickly and with ease.Tons of shortcodes provide countless options. From image galleries to infographics.
                    </p>
                        <button className="button-first">CARI TAHU</button>
                        <button className="button-second">CARI TAHU</button>
                </div>
                <div class="recipe-photos col-md-6">
                    <div className="row">
                        <div className="recipe-photo-1">
                            <img src={recipe1} alt="picture-recipe" />
                        </div>
                        <div className="recipe-photo-2"> 
                            <img src={recipe2} alt="picture-recipe1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}