import React, { Component } from "react";
import { HtmlHead } from "../../app/components/html-head";
import DefaultLayout from "../../app/components/default-layout";
import AppService from "../../app/services/app-service";
import Login from "../../app/components/admin/login";
import News from "../../app/components/admin/news";
import Personal from "../../app/components/admin/personal";
import Carousel from "../../app/components/admin/Carousel";
import Alumni from "../../app/components/admin/Alumni";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLogin: false,
      menuSelect: 0,
    };
  }

  componentDidMount() {
    // AppService.localStorage().clear();
    if (AppService.localStorage().get("userlogin") == null) {
      this.setState({ onLogin: false });
    } else {
      this.setState({ onLogin: true });
    }
  }

  render() {
    return (
      <>
        <DefaultLayout>
          {(() => {
            if (this.state.onLogin) {
              return (
                <>
                  <HtmlHead prefixTitle="ผู้ดูแลระบบ" path="admin" />
                  <div className="row">
                    <div className="col-lg-3 mb-3">
                      <div
                        className="nav flex-column nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <a
                          className="nav-link active"
                          id="v-pills-news-tab"
                          data-toggle="pill"
                          href="#v-pills-news"
                          role="tab"
                          aria-controls="v-pills-news"
                          aria-selected="true"
                          onClick={() => {
                            this.setState({ menuSelect: 0 });
                          }}
                        >
                          จัดการข่าวสาร
                        </a>

                        <a
                          className="nav-link"
                          id="v-pills-personal-tab"
                          data-toggle="pill"
                          href="#v-pills-personal"
                          role="tab"
                          aria-controls="v-pills-personal"
                          aria-selected="false"
                          onClick={() => {
                            this.setState({ menuSelect: 1 });
                          }}
                        >
                          จัดการคณาจารย์และเจ้าหน้าที่
                        </a>

                        <a
                          className="nav-link"
                          id="v-pills-carousel-tab"
                          data-toggle="pill"
                          href="#v-pills-carousel"
                          role="tab"
                          aria-controls="v-pills-carousel"
                          aria-selected="true"
                          onClick={() => {
                            this.setState({ menuSelect: 2 });
                          }}
                        >
                          จัดการสไลด์ภาพ
                        </a>

                        <a
                          className="nav-link"
                          id="v-pills-alumni-tab"
                          data-toggle="pill"
                          href="#v-pills-alumni"
                          role="tab"
                          aria-controls="v-pills-alumni"
                          aria-selected="true"
                          onClick={() => {
                            this.setState({ menuSelect: 3 });
                          }}
                        >
                          สำหรับศิษย์เก่า
                        </a>

                        <a
                          className="nav-link"
                          id="v-pills-logout-tab"
                          data-toggle="pill"
                          href="#v-pills-logout"
                          role="tab"
                          aria-controls="v-pills-logout"
                          aria-selected="false"
                          onClick={() => {
                            AppService.localStorage().clear();
                            window.location.reload();
                          }}
                        >
                          ออกจากระบบ
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-9 mb-3">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="v-pills-news"
                          role="tabpanel"
                          aria-labelledby="v-pills-news-tab"
                        >
                          {(() => {
                            if (this.state.menuSelect == 0) {
                              return <News {...this.props} />;
                            } else {
                              return "";
                            }
                          })()}
                        </div>

                        <div
                          className="tab-pane fade"
                          id="v-pills-personal"
                          role="tabpanel"
                          aria-labelledby="v-pills-personal-tab"
                        >
                          {(() => {
                            if (this.state.menuSelect == 1) {
                              return <Personal {...this.props} />;
                            } else {
                              return "";
                            }
                          })()}
                        </div>

                        <div
                          className="tab-pane fade"
                          id="v-pills-carousel"
                          role="tabpanel"
                          aria-labelledby="v-pills-carousel-tab"
                        >
                          {(() => {
                            if (this.state.menuSelect == 2) {
                              return <Carousel {...this.props} />;
                            } else {
                              return "";
                            }
                          })()}
                        </div>

                        <div
                          className="tab-pane fade"
                          id="v-pills-alumni"
                          role="tabpanel"
                          aria-labelledby="v-pills-alumni-tab"
                        >
                          {(() => {
                            if (this.state.menuSelect == 3) {
                              return <Alumni {...this.props} />;
                            } else {
                              return "";
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            } else {
              return <Login {...this.props} />;
            }
          })()}
        </DefaultLayout>
      </>
    );
  }
}
