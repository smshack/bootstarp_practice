import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => (<>
    <nav className="navbar navbar-expand-md navbar-light">
        <button className="navbar-toggler ml-auto mb-2 bg-light" type="button"
            data-toggle="collapse"
            data-target="#sidebar">
            <span className="navbar-toggle-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="sidebar">
            <div className="container-fluid">
                <div className="row">
                    {/* sidebar start*/}
                    {/* 사이드 바 제일 상단에 회사 로고/ 이미지를 추가해줄 수 있다 */}
                    <div className="col-xl-2 col-lg-3 sidebar fixed-top">
                        <a href="#" className="navbar-brand text-white text-center d-block mx-auto py-3 mb-4
                        bottom-border">Uplussystem</a>
                        <div className="bottom-border pd-3">
                            <img src="#" alt="" style={{ width: "50px" }} className="rounded-circle mr-3" />
                            <a href="#" className="text-white">서명석</a>
                        </div>
                        <ul className="navbar-nav flex-column mt-4">
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white p-3 mb-2 current">
                                    <i className="fas fa-home text-white fa-lg mr-3"></i>대시보드
                                </a>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white p-3 mb-2 sidebar-link">
                                        <i className="fas fa-user text-white fa-lg mr-3"></i>프로필
                                </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white p-3 mb-2 sidebar-link">
                                        <i className="fas fa-envelope text-white fa-lg mr-3"></i>편지함
                                </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white p-3 mb-2 sidebar-link">
                                        <i className="fas fa-shopping-cart text-white fa-lg mr-3"></i>구매함
                                </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white p-3 mb-2 sidebar-link">
                                        <i className="fas fa-chart-line text-white fa-lg mr-3"></i>분석
                                </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white p-3 mb-2 sidebar-link">
                                        <i className="fas fa-chart-bar text-white fa-lg mr-3"></i>차트
                                </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white p-3 mb-2 sidebar-link">
                                        <i className="fas fa-table text-white fa-lg mr-3"></i>테이블
                                </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white p-3 mb-2 sidebar-link">
                                        <i className="fas fa-wrench text-white fa-lg mr-3"></i>설정
                                </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link text-white p-3 mb-2 sidebar-link">
                                        <i className="fas fa-file-alt text-white fa-lg mr-3"></i>문서
                                </a>
                                </li>
                            </li>
                        </ul>
                    </div>
                    {/* sidebar end*/}
                    {/* top navbar */}
                    <div className="col-xl-10 col-lg-9 ml-auto bg-dark fixed-top py-2 top-navbar">
                        <div className="row">
                            <div className="col-md-4">
                                <h4 className="text-light text-uppercase mb-0">대시보드</h4>
                            </div>
                            <div className="col-md-5">
                                <form action="">
                                    <div className="input-group">
                                    <input type="text" className="form-control search-input" placeholder="search..." />
                                    <button type="button" className="btn btn-light search-button">
                                        <i className="fas fa-search text-danger"></i>
                                    </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-3">
                                <ul className="navbar-nav">
                                    <li className="nav-item icon-parent">
                                        <a href ="#" className="nav-link icon-bullet"><i className="fas fa-comments text-muted fa-lg"></i> </a>
                                    </li>  
                                    <li className="nav-item icon-parent">
                                        <a href ="#" className="nav-link icon-bullet"><i className="fas fa-bell text-muted fa-lg"></i> </a>
                                    </li>  
                                    <li className="nav-item ml-md-auto">
                                        <a href ="#" className="nav-link" data-toggle="modal" data-target="#sing-out"><i className="fas fa-sign-out-alt text-danger fa-lg"></i> </a>
                                    </li>   
                                </ul>                                
                            </div>
                        </div>

                    </div>

                    {/* end of top navbar */}
                    {/* modal */}
                    <div className="modal fade" id="sign-out">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Want to leave</h4>
                                    <button type="button" className="close" data-dismiss="modal">&items;</button>
                                </div>
                                <div className="modal-body">
                                    Press logout to leave
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success" data-dismiss="model">Stay Here</button>
                                    <button type="button" className="btn btn-danger" data-dismiss="model">Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* modal */}


                </div>
            </div>
        </div>
    </nav>
</>);

export default Navbar;