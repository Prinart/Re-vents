import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    venue: "",
    city: "",
    hostedBy: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.createEvent(this.state);
  };
  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, venue, city, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              placeholder="First Name"
              value={title}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              type="date"
              placeholder="Event Date"
              value={date}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              placeholder="City event is taking place"
              value={city}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              placeholder="Enter the Venue of the event"
              value={venue}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              placeholder="Enter the name of person hosting"
              value={hostedBy}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={cancelFormOpen}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
