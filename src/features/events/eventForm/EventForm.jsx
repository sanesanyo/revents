import cuid from "cuid";
import { Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryData } from "../../../app/api/categoryOptions";

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.state.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("You must provide a title"),
    category: Yup.string().required("You must provide a category"),
    description: Yup.string().required(""),
    city: Yup.string().required(""),
    venue: Yup.string().required(""),
    date: Yup.string().required(""),
  });

  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the event" : "Create new event"} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "Bob",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              );
          history.push("/events");
        }}
      >
        <Form className="ui form">
          <Header sub color="teal" content="Event Details" />
          <MyTextInput name="title" placeholder="Event Title" />
          <MySelectInput
            name="category"
            placeholder="Event category"
            options={categoryData}
          />
          <MyTextArea name="description" placeholder="Description" rows={3} />
          <Header sub color="teal" content="Event Location Details" />
          <MyTextInput name="city" placeholder="City" />
          <MyTextInput name="venue" placeholder="Venue" />
          <MyTextInput name="date" placeholder="Event Date" type="date" />
          <Button type="submit" floated="right" positive content="Submit" />
          <Button
            as={Link}
            to="/events"
            type="submit"
            floated="right"
            content="Cancel"
          />
        </Form>
      </Formik>
    </Segment>
  );
}
