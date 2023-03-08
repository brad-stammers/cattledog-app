import React, {useState} from "react"
import PropTypes from "prop-types"
import { Button, Header, Form, Modal } from "semantic-ui-react"

class AddVideoModal extends React.Component {

  render () {
    let formFields = {};
    return (
      <React.Fragment>
        <Modal open={this.props.visible} size="small">
          <Header content="New Video" />
          <Modal.Content>
            <Form onSubmit={(e) => {
              this.props.handleFormSubmit(formFields.title.value, formFields.genre.value, formFields.year.value, formFields.rating.value, formFields.format.value, formFields.location.value);
              e.target.reset();
            }}>
              <div class="field">
                <label>Title</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" ref={input => formFields.title = input} placeholder="Title" /></div>
                </div>
              </div>
              <div class="field">
                <label>Genre</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" ref={input => formFields.genre = input} placeholder="Genre" /></div>
                </div>
              </div>
              <div class="field">
                <label>Year</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" ref={input => formFields.year = input} placeholder="Year" /></div>
                </div>
              </div>
              <div class="field">
                <label>Rating</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" ref={input => formFields.rating = input} placeholder="Rating" /></div>
                </div>
              </div>
              <div class="field">
                <label>Format</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" ref={input => formFields.format = input} placeholder="Format" /></div>
                </div>
              </div>
              <div class="field">
                <label>Location</label>
                <div class="seven wide field">
                  <div class="ui input"><input type="text" ref={input => formFields.location = input} placeholder="Location" /></div>
                </div>
              </div>
              <Button negative type="button" icon="remove" labelPosition="right" onClick={this.props.handleCancel} content="Cancel" />
              <Button positive type="submit" icon="checkmark" labelPosition="right" onClick={this.props.handleSubmit} content="Save" />
            </Form>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AddVideoModal
