import React from 'react';
import {  Link } from 'react-router-dom';
const Footer = (props) => (
    <footer>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                    <div className="row">
                        {/* 첫번째 컬럼 */}
                        <ul className="list-inline">
                            <li className="list-inline-item mr-2">
                                <Link to="#" className="">유플러스시스템</Link>
                            </li>
                            <li className="list-inline-item mr-2">
                                <Link to="#" className="">소개</Link>
                            </li>
                            <li className="list-inline-item mr-2">
                                <Link to="#" className="">지원</Link>
                            </li>
                            <li className="list-inline-item mr-2">
                                <Link to="#" className="">블로그</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );

export default Footer;