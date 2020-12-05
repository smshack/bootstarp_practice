import React from 'react';
import $ from 'jquery';
const Table3 = () => { 

// $(document).ready(()=>{
//     $('[data-toggle="tooltip]').tooltip();
// })
return (<>

    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div className="row mk-4">


                    <div className="col-xl-6 col-12 mb-xl-0 mb-4">
                        <div className="bg-dark text-white p-4 rounded">
                            <h4 className="mb-4">웹 브라우저 진행상태</h4>
                            <h6 className="mb-3">구글 크롬</h6>
                            <div className="progress mb-4" style={{ height: "20px" }}>
                                <div className="progress-bar progress-bar-striped font-wdight-bold" style={{ width: "91%" }}>91%</div>
                            </div>
                            <h6 className="mb-3">모질라 파이어폴스</h6>
                            <div className="progress mb-4" style={{ height: "20px" }}>
                                <div className="progress-bar progress-bar-striped font-wdight-bold bg-success" style={{ width: "84%" }}>84%</div>
                            </div>
                            <h6 className="mb-3">IOS 사파리</h6>
                            <div className="progress mb-4" style={{ height: "20px" }}>
                                <div className="progress-bar progress-bar-striped font-wdight-bold bg-danger" style={{ width: "76%" }}>76%</div>
                            </div>
                            <h6 className="mb-3">인터넷 익스플로러</h6>
                            <div className="progress mb-4" style={{ height: "20px" }}>
                                <div className="progress-bar progress-bar-striped font-wdight-bold bg-info" style={{ width: "34%" }}>34%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 mb-xl-0 mb-4">
                        <h4 className="text-muted p-3 mb-3">태스크 리스트:</h4>
                        <div className="container-fluid bg-white">
                            <div className="row py-3 mb-4  task-border align-items-center">
                                <div className="col-1">
                                    <input type="checkbox" />
                                </div>
                                <div className="col-sm-9 col-8">
                                    부동산 에이전트, financial statement 요청하기
                               </div>
                                <div className="col-1">
                                    <a href="#" data-toggle="tooltip" title="<h6>edit</h6>" data-html="true" data-placement="top" ><i className="fas fa-edit fa-lg text-success"></i></a>
                                </div>
                                <div className="col-1">
                                    <a href="#" data-toggle="tooltip" title="<h6>delete</h6>" data-html="true" data-placement="top" ><i className="fas fa-trash-alt fa-lg text-danger"></i></a>
                                </div>
                            </div>

                            <div className="row py-3 mb-4  task-border align-items-center">
                                <div className="col-1">
                                    <input type="checkbox" checked />
                                </div>
                                <div className="col-sm-9 col-8">
                                    부동산 에이전트, financial statement 요청하기
                               </div>
                                <div className="col-1">
                                    <a href="#" data-toggle="tooltip" title="<h6>edit</h6>" data-html="true" data-placement="top" ><i className="fas fa-edit fa-lg text-success"></i></a>
                                </div>
                                <div className="col-1">
                                    <a href="#" data-toggle="tooltip" title="<h6>delete</h6>" data-html="true" data-placement="top" ><i className="fas fa-trash-alt fa-lg text-danger"></i></a>
                                </div>
                            </div>

                            <div className="row py-3 mb-4  task-border align-items-center">
                                <div className="col-1">
                                    <input type="checkbox" />
                                </div>
                                <div className="col-sm-9 col-8">
                                    부동산 에이전트, financial statement 요청하기
                               </div>
                                <div className="col-1">
                                    <a href="#" data-toggle="tooltip" title="<h6>edit</h6>" data-html="true" data-placement="top" ><i className="fas fa-edit fa-lg text-success"></i></a>
                                </div>
                                <div className="col-1">
                                    <a href="#" data-toggle="tooltip" title="<h6>delete</h6>" data-html="true" data-placement="top" ><i className="fas fa-trash-alt fa-lg text-danger"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</>)};

export default Table3;
