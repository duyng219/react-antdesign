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
        <div className='block featureBlock bgGray'>
            <div className='container-fluid'>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat"s/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AppFeature