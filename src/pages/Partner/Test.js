class TestPage extends Component {
  
    componentDidMount() {
      console.log("hello");
    }
  render() {
    return (
      <div className="page-content partner">
        <Container fluid>
          <p>Hello</p>
        </Container>
      </div>
    );
  }
}
export default TestPage;
