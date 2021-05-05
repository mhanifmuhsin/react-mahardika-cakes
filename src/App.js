
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Category from './components/Category';
import Description from './components/Description';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { useState } from 'react';
import Detail from './components/Detail';
import cakeList from './data';
import relatedList from './related';
import { Provider } from 'react-redux';
import store from './app/store';
import RelatedProducts from './components/RelatedProducts';


function App() {
  const [editing, setEditing] = useState(false);
  
  const [productPreview, setProductPreview] = useState()
  const [items] = useState(cakeList);
  const [relatedProducts] = useState(relatedList);

  const detail = (id) => {
    setEditing(true)
    setProductPreview(items.filter(item => item.id === id));
  }

  const notDetail = () => {
    setEditing(false)
  }

  return (
    <div>
      <Provider store={store}>
      {editing ? (
        <div>
          <Navbar notDetail={notDetail}  />
          <Detail productPreview={productPreview} />
          <RelatedProducts relatedProducts={relatedProducts} detail={detail} />
          {/* <Pricing items={items} detail={detail}/> */}
          <Footer />
        </div>
      ) : (
        <div>
          <Navbar />
          <Header />
          <Recipe />
          <Category />
          <Description />
          <Pricing detail={detail} items={items} />
          <Footer />
        </div>
      )}
      </Provider>
    </div>
  );
}

export default App;
