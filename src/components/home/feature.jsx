import React from 'react'

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

import { Row, Col } from 'antd'
import { Card } from 'antd';

const { Meta } = Card;

const AppFeature = () => {
    return (
        <div id='feature' className='block featureBlock bgGray'>
            <div className='container-fluid'>
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}}>
                        <Card
                            hoverable
                            cover={<img alt="Item" src={image1}/>}
                        >
                            <Meta title="Modern Design"s/>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}}>
                        <Card
                            hoverable
                            cover={<img alt="Item" src={image2}/>}
                        >
                            <Meta title="Clean and Elegant"s/>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}}>
                        <Card
                            hoverable
                            cover={<img alt="Item" src={image3}/>}
                        >
                            <Meta title="Great Support"s/>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}}>
                        <Card
                            hoverable
                            cover={<img alt="Item" src={image4}/>}
                        >
                            <Meta title="Easy to customise"s/>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}}>
                        <Card
                            hoverable
                            cover={<img alt="Item" src={image5}/>}
                        >
                            <Meta title="Unlimited Features"s/>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}}>
                        <Card
                            hoverable
                            cover={<img alt="Item" src={image6}/>}
                        >
                            <Meta title="Advanced Options"s/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AppFeature