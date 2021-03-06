import React from 'react';

const Table1 = (props) => (<>
    <div className="container-fluid">
        <div className="row mb-5">
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div className="row">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-muted text-center mb-3">직원 급여 리스트</h3>
                        </div>
                        <table className="table bg-light text-center">
                            <thead>
                                <tr className="text-muted">
                                    <th>#</th>
                                    <th>이 름</th>
                                    <th>연 봉</th>
                                    <th>일 시</th>
                                    <th>연 락 처</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <th>철 수</th>
                                    <th>2000만원</th>
                                    <th>2020/07/04</th>
                                    <th><button type="button" className="btn btn-info btn-sm">메시지</button></th>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <th>영희</th>
                                    <th>3500만원</th>
                                    <th>2020/07/04</th>
                                    <th><button type="button" className="btn btn-info btn-sm">메시지</button></th>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <th>재석</th>
                                    <th>1200만원</th>
                                    <th>2020/07/04</th>
                                    <th><button type="button" className="btn btn-info btn-sm">메시지</button></th>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <th>희선</th>
                                    <th>2700만원</th>
                                    <th>2020/07/04</th>
                                    <th><button type="button" className="btn btn-info btn-sm">메시지</button></th>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <th>수지</th>
                                    <th>7600만원</th>
                                    <th>2020/07/04</th>
                                    <th><button type="button" className="btn btn-info btn-sm">메시지</button></th>
                                </tr>
                            </tbody>

                        </table>
                        {/* 페이지 네이션 */}
                        <nav className="wid100">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a href="#" className="page-link py-2 px-3">
                                        <span>&laquo;</span>
                                    </a>
                                </li>

                                <li className="page-item active">
                                    <a href="#" className="page-link py-2 px-3">
                                        <span>1</span>
                                    </a>
                                </li>

                                <li className="page-item">
                                    <a href="#" className="page-link py-2 px-3">
                                        <span>2</span>
                                    </a>
                                </li>

                                <li className="page-item">
                                    <a href="#" className="page-link py-2 px-3">
                                        <span>3</span>
                                    </a>
                                </li>

                                <li className="page-item">
                                    <a href="#" className="page-link py-2 px-3">
                                        <span>&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</>);

export default Table1;
