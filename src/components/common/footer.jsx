import React from 'react'
import { BackTop } from 'antd';

const AppFooter = () => {
    return (
        <div className='container-fluid'>
            <div className="footer">
                <div className="logo">
                <i style={{color:'#1890ff',paddingRight:'0px'}} className="fa-brands fa-dochub"></i><a href="/" style={{fontSize:'18px'}}>uy Nguyen</a>
                {/* <a href="http://google.com" >Duy Nguyen</a> */}
                </div>
                <ul className='socials'>
                    <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                </ul>
                <div className="copyright">Copyright &copy; 2020 Hding</div>
                <BackTop>
                    <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
                </BackTop>
            </div>
        </div>
    )
}

export default AppFooter