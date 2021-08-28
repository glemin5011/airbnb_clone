// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "@src/layout";
import { handleErrors } from "../fetchHelper";

import "./success.scss";

class Success extends React.Component {
  state = {
    booking: {},
    loading: true,
  };
  componentDidMount() {
    fetch(`/api/bookings/${this.props.booking_id}`)
      .then(handleErrors)
      .then((data) => {
        this.setState({
          booking: data.booking,
          loading: false,
        });
        console.log(data.booking);
      });
  }
  render() {
    const { booking, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    const { id, start_date, end_date, property, charges } = booking;
    return (
      <Layout>
        <div className="container pt-4">
          <div className="row">
            <div className="col-12 my-4">
              <div className="card-body border">
                <h3 className="card-title text-center">
                  Booking #{id} successful!
                </h3>
                <h5 className="my-4">
                  Get ready for your trip to {property.city}
                </h5>
                <div className="row">
                  <div
                    className="col-6 property-image mb-3"
                    style={{ backgroundImage: `url(${property.image_url})` }}
                  />
                  <div className="col-5">
                    <h5 className="mb-4">{property.title}</h5>
                    <p className=" card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Success;
