// trips.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "@src/layout";
import { handleErrors, safeCredentialsForm } from "../fetchHelper";

import "./add.scss";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      property_type: "",
      city: "",
      country: "",
      price_per_night: "",
      image_url: "",
      loading: true,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePropertyTypeChange = this.handlePropertyTypeChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handlePropertyTypeChange = (event) => {
    this.setState({ property_type: event.target.value });
  };
  handleCityChange = (event) => {
    this.setState({ city: event.target.value });
  };
  handleCountryChange = (event) => {
    this.setState({ country: event.target.value });
  };
  handlePriceChange = (event) => {
    this.setState({ price_per_night: event.target.value });
  };

  submitProperty = (e) => {
    const { title, property_type, city, country, price_per_night, image_url } =
      this.state;

    if (e) {
      e.preventDefault();
    }

    let formData = new FormData();

    var image = document.getElementById("addPhoto");

    for (let i = 0; i < image.files.length; i++) {
      formData.append("property[image]", image.files[i]);
    }

    formData.set("property[title]", title);
    formData.set("property[property_type]", property_type);
    formData.set("property[city]", city);
    formData.set("property[country]", country);
    formData.set("property[price_per_night]", price_per_night);

    fetch(
      `/api/myproperties/add`,
      safeCredentialsForm({
        method: "POST",
        body: formData,
      })
    )
      .then(handleErrors)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { bookings, loading } = this.state;
    return (
      <Layout>
        <div className="container pt-4">
          <h4 className="mb-1">Add a new property</h4>
          <p className="text-secondary mb-3">
            Please tell us more about your place
          </p>
          <form onSubmit={this.submitProperty}>
            <div className="form-row">
              <div className="form-group col-12">
                <label htmlFor="inputTitle">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputTitle"
                  placeholder="Beautiful colonial-era townhouse in Georgetown"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputType">Type of Accommodation</label>
                <select
                  id="inputType"
                  className="form-control"
                  onChange={this.handlePropertyTypeChange}
                  value={this.state.property_type}
                >
                  <option>Shared room in apartment</option>
                  <option>Private room in apartment</option>
                  <option>Whole apartment</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPrice">Price per night (in $)</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPrice"
                  placeholder="62"
                  onChange={this.handlePriceChange}
                  value={this.state.price_per_night}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="New York City"
                  onChange={this.handleCityChange}
                  value={this.state.city}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputCountry">Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCountry"
                  placeholder="US"
                  onChange={this.handleCountryChange}
                  value={this.state.country}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="addPhoto">Add property photo</label>
              <input
                type="file"
                className="form-control-file"
                id="addPhoto"
                accept="image/*"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit new property
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Add />,
    document.body.appendChild(document.createElement("div"))
  );
});
