import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Row, Col, Card} from 'react-bootstrap';

class ImageComponent extends React.Component {
  state = { imageFiles: [] };

  importAll(r){
    return r.keys().map(r);
  }

  componentDidMount(){
    const imageFiles = this.importAll(require.context('../images/TNImages/', false, /\.(png|jpe?g|svg|JPG)$/));
    this.setState({ imageFiles });
  }

  render() {
    const { imageFiles } = this.state;
    return (
        <>
      <div className='pt-5'>


            <Container className='pt-5'>
                <Row className='justify-content-md-center'>
                    {imageFiles.map((file, index) => (
                        <Card style={{ width: '18rem' }} className="d-flex" align="center">
                            <Card.Img className= "justify-content-md-center" align="center" variant="top" src={file}  />
                        </Card>
                    ))}
                </Row>
            </Container>
      </div>
      </>
    );
  }
}

export default ImageComponent;
