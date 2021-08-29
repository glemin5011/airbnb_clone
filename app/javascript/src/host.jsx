// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "@src/layout";
import { handleErrors } from "./fetchHelper";

import "./host.scss";

class Host extends React.Component {
  state = {
    bookings: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`api/host/bookings`)
      .then(handleErrors)
      .then((data) => {
        this.setState({
          bookings: data.bookings,
          loading: false,
        });
      });
  }

  render() {
    const { bookings, loading } = this.state;
    return (
      <Layout>
        <div className="container pt-4">
          <h4 className="mb-1">Upcoming bookings at my properties</h4>
          <p className="text-secondary mb-3">
            Find guests for your properties all around the world
          </p>
          {loading === true ? (
            <p>Loading...</p>
          ) : (
            <div className="row">
              <div className="col list-group">
                {bookings.map((booking) => {
                  return (
                    <a
                      href={`property/${booking.property_id}`}
                      key={booking.id}
                      class="list-group-item list-group-item-action"
                    >
                      <div className="row">
                        <div
                          className="col-3 property-image mb-1 rounded"
                          style={{
                            backgroundImage: `url(${booking.image_url})`,
                          }}
                        />
                        <div className="col-9">
                          <h6>
                            {booking.title} <small>({booking.start_date}</small>{" "}
                            - <small>{booking.end_date})</small>
                          </h6>
                          <p>
                            Payment status:{" "}
                            {booking.paid === true ? (
                              <small className="ml-1 text-success">
                                <b>Paid</b>
                              </small>
                            ) : (
                              <small className="ml-1 text-danger">
                                <b>Pending</b>
                              </small>
                            )}
                          </p>
                          <p>
                            <b>
                              Total:{" "}
                              {booking.charges.length !== 0 ? (
                                <span>${booking.charges[0].amount}</span>
                              ) : (
                                <span>N/A</span>
                              )}
                            </b>
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Host />,
    document.body.appendChild(document.createElement("div"))
  );
});
