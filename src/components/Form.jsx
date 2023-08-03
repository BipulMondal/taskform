import React, { useState } from "react";
import { FaAsterisk } from "react-icons/fa";

const Form = () => {
  const [formData, setFormdata] = useState({
    category: "",
    sub_category: "",
    business: "",
    city: "",
    product_name: "",
    product_price: "",
    product_image: [],
  });

  const [changeObject, setChangeObject] = useState([]);

  const handleChange = (event) => {
    setFormdata({ ...formData, [event.target.name]: event.target.value });
  };

  const handleImageChange = (event) => {
    [...event.target.files].forEach((file) => {
      // console.log('file' , file)

      // formData.product_image.push({
      //   data: file,
      //   url: URL.createObjectURL(file)
      // })

      formData.product_image.push({ url: URL.createObjectURL(file) });

      console.log("product_image", formData.product_image);
    });

    // if (event.target.files.length === 0) return;
    // const arr = Array.from(event.target.files);
    // const urls = URL.createObjectURL(arr[0])

    // // formData.product_image.push(urls);
    // formData.set()
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.category.length !== 0 &&
      formData.sub_category.length !== 0 &&
      formData.business.length !== 0 &&
      formData.category.length !== 0 &&
      formData.city.length !== 0 &&
      formData.product_name.length !== 0 &&
      formData.product_price.length !== 0
    ) {
      const arr = Object.entries(formData);
      setChangeObject(arr);
      console.log("Form Fill up Successfully", arr);

      setFormdata({
        category: "",
        sub_category: "",
        business: "",
        city: "",
        product_name: "",
        product_price: "",
        product_image: [],
      });
    } else {
      alert("Please Fill All the field");
    }
  };

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h1>Primary Form</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 h-auto w-[35rem] p-4"
        >
          <div className="flex justify-between">
            <section className="mt-6">
              <div className="flex mb-2">
                <label htmlFor="">Category </label>
                <FaAsterisk style={{ color: "red", fontSize: "10px" }} />
              </div>
              <select
                name="category"
                value={formData.category}
                className="h-8 w-[14rem] rounded pl-2 bg-white"
                onChange={handleChange}
              >
                <option value="Select Category">Select Category</option>
                <option value="A">A </option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </section>
            <section className="mt-6">
              <div className="flex mb-2">
                <label htmlFor="">Sub Category</label>
                <FaAsterisk style={{ color: "red", fontSize: "10px" }} />
              </div>
              <select
                name="sub_category"
                value={formData.sub_category}
                className="h-8 w-[14rem] rounded pl-2 bg-white"
                onChange={handleChange}
              >
                <option value="Select Sub Category">Select Sub CateGory</option>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
              </select>
            </section>
          </div>
          <section className="mt-6">
            <div className="flex mb-2">
              <label htmlFor="">Business</label>
              <FaAsterisk style={{ color: "red", fontSize: "10px" }} />
            </div>
            <select
              name="business"
              value={formData.business}
              className="h-8 w-full rounded pl-2 bg-white "
              onChange={handleChange}
            >
              <option value="Select Business">Select Business</option>
              <option value="Business-1">Business-1</option>
              <option value="Business-2">Business-2</option>
              <option value="Business-3">Business-3</option>
              <option value="Business-4">Business-4</option>
            </select>
          </section>
          <section className="mt-6">
            <div className="flex mb-2">
              <label htmlFor="">City</label>
              <FaAsterisk style={{ color: "red", fontSize: "10px" }} />
            </div>
            <select
              name="city"
              value={formData.city}
              className="h-8 w-full rounded pl-2 bg-white"
              onChange={handleChange}
            >
              <option value="Select City">Select City</option>
              <option value="City-1">City-1</option>
              <option value="City-2">City-2</option>
              <option value="City-3">City-3</option>
              <option value="City-4">City-4</option>
            </select>
          </section>
          <section className="mt-6">
            <div className="flex mb-2">
              <label htmlFor="">Product Name </label>
              <FaAsterisk style={{ color: "red", fontSize: "10px" }} />
            </div>
            <input
              type="text"
              name="product_name"
              value={formData.product_name}
              placeholder="Product Name"
              className="h-8 w-full rounded pl-2"
              onChange={handleChange}
            />
          </section>
          <section className="mt-6">
            <div className="flex mb-2">
              <label htmlFor="">Product Price </label>
              <FaAsterisk style={{ color: "red", fontSize: "10px" }} />
            </div>
            <input
              type="text"
              name="product_price"
              value={formData.product_price}
              placeholder="Product Price"
              className="h-8 w-full rounded pl-2"
              onChange={handleChange}
            />
          </section>
          <input
            type="file"
            name="product_image"
            multiple
            onChange={handleImageChange}
            className="mt-4"
          />{" "}
          <br />
          <button className="h-12 w-28 bg-blue-500 mt-6">Highlights</button>
        </form>
      </div>
      <hr className="bg-gray-500 mt-4" />
      {changeObject.map((item, index) => {
        if (item[0] === "product_image") {
          console.log("HELLO", item[1]);
          return (
            <div>
              {item[1].map((img) => (
                <img src={img.url} alt="" height="200px" width="100px" />
              ))}
            </div>
          );
        } else {
          return (
            <div key={index}>
              <div>
                {item[0]}:{item[1]}
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Form;
