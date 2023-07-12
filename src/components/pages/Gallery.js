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
                <Row className='justify-content-md-center' align="center">
                    {imageFiles.map((file, index) => (
                        <Col className='justify-content-sm-center pt-3' align="center">
                            <Card style={{ width: '11.7rem', height: '12.5rem'}} className="border rounded-5 shadow-lg p-3 mb-5 bg-body rounded " align="center">
                                <h3 style={{fontSize:'10px'}}>Images {index+1}</h3>
                                <Card.Img style ={{height: '9.7rem', width: '9.7rem'}} className= "border rounded-5 shadow-lg p-3 mb-5 bg-body rounded" align="center" variant="top" src={file}/>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
      </div>
      </>
    );
  }
}

export default ImageComponent;
