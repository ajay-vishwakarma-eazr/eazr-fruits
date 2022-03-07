import React from "react";
import { connect } from "react-redux";
import {
  addComments,
  FetchCommentsById,
} from "../../../store/supportTickets/actions/action";
import Comments from "./Comments";
import _ from "lodash";
import moment from "moment";
import { withRouter } from "react-router";
import { Button, Container } from "reactstrap";
import BackBtn from "../../BackBtn";
class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" };
    this.changeComment = this.changeComment.bind(this);
    this.saveComment = this.saveComment.bind(this);
  }

  componentDidMount(pageNumber) {
    const id = this.props.match.params.id;
    this.props.FetchCommentsById(id, pageNumber);
  }

  changeComment(e) {
    this.setState({ comment: e.target.value });
  }

  clearComment() {
    this.setState({ comment: "" });
    // document.getElementById("commentApp").value = "";
  }

  saveComment(e) {
    e.preventDefault();
    const newComment = {
      comment: this.state.comment,
      partnerId: this.props.comments.comments[0].partnerId,
      // 39
      supportTicketId: this.props.comments.comments[0].supportTicketId,
    };
    this.props.addComments(newComment);
    const id = this.props.match.params.id;
    this.props.FetchCommentsById(id);
    this.clearComment();
  }

  render() {
    return (
      <div className="page-content">
        <Container fluid>
          <BackBtn route="support-tickets" />
          {Array.isArray(this.props.comments.comments)
            ? this.props.comments.comments?.map((comment) => (
                <Comments comment={comment} />
              ))
            : "No comments"}
          <div class="field single-ticket-container">
            <p class="control">
              <textarea
                style={{
                  border: "none",
                  width: "100%",
                  paddingLeft: "10px",
                  paddingTop: "10px",
                  outline: "none",
                  resize: "none",
                }}
                placeholder="Add a comment..."
                onChange={this.changeComment}
              />
            </p>
            <Button
              style={{
                background: "#0371e3",
                borderRadius: "50px",
                minWidth: "20%",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
              onClick={this.saveComment}
            >
              Enter
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

// start of code change
const mapStateToProps = (state) => {
  // console.log("ticketss",state.tickets);
  return { comments: state.tickets };
};

export default connect(mapStateToProps, { addComments, FetchCommentsById })(
  Comment
);
