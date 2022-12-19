import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import axios from "axios";
import "./styles.css";

const config = {
  headers:{
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
};

const products = [
    [ 
      {
        'product_id': '4',
        'price': '3299',
        'count': '2',
      }
    ]
]

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { key: 'ea76d526ee2d548f956e38845476d6fd', country: 'UA', delivery: 1, products: products},
    
    onSubmit: values => {
      const orderId = Date.now;
      //key fa66b7ff72bdf1ca06a0699d1d8863e5
      //order_id
      //country UA
      //products
            // 'product_id' => '5',    //код товара (из каталога CRM)
            // 'price'      => '3299', //цена товара 1
            // 'count'      => '1'
      //bayer_name
      //phone
      //delivery 1
      //delivery_adress
      

      var config = {
        method: 'get',
        url: `https://cors-anywhere.herokuapp.com/http://test2.lp-crm.biz/api/addNewOrder.html?key=${values.key}&order_id=${orderId}&country=UA&bayer_name=${values.bayer_name}&phone=${values.phone}&site=localhost&delivery=${values.delivery}&delivery_adress=${values.delivery_adress}&products=${values.products}`,
        data : ''
      };
      
      axios(config)
        .then(function (res) {
           console.log(res.data)
           alert('Successfully signed up!');
        })
        .catch(function (res) {
           console.log(res)
      });
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="bayer_name">Ім'я</label>
      <input
        id="bayer_name"
        name="bayer_name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.bayer_name}
      />
      <label htmlFor="phone">Телефон</label>
      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <label htmlFor="delivery_adress">Відділення Нової Пошти</label>
      <input
        id="delivery_adress"
        name="delivery_adress"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.delivery_adress}
      />
      <button type="submit">Купити</button>
    </form>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);