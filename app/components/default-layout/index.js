import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { mapStateToProps } from "../../redux";
import Link from "next/link";

const basePath = require("../../../base_path");

const HeaderContent = () => {
  return (
    <div className="row mb-3">
      <div className="col-md-7">
        <div className="header-content">
          <div className="img">
            <img
              src={`${basePath()}assets/img/RMUTi_LOGO.png`}
              alt="rmuti_logo"
              width="50px"
            />
          </div>
          <div className="content text-dark ml-3">
            <h3>สาขาคณิตศาสตร์และสถิติประยุกต์</h3>
            <h6>Department of Applied Mathematics and Statistics</h6>
            <p className="text-muted">
              คณะวิทยาศาสตร์และศิลปศาสตร์ มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="header-menu">
          <div className="row">
            <div className="col">
              <div className="dropdown">
                <div
                  className="text-center"
                  id="teamworkMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`${basePath()}assets/img/teamwork.png`}
                    alt="teamwork"
                    width="50px"
                  />
                  <p>สำหรับบุคลากร</p>
                </div>
                <div
                  className="dropdown-menu dropdown-menu-left"
                  aria-labelledby="teamworkMenuButton"
                >
                  <a
                    className="dropdown-item"
                    href="https://www.rmuti.ac.th/2019/personal-service/"
                    target="_blank"
                  >
                    บริการบุคลากร
                  </a>
                  <Link
                    href="/personal/calender"
                    as={`${basePath()}personal/calender`}
                  >
                    <a className="dropdown-item">ปฎิทินกิจกรรม</a>
                  </Link>
                  <a
                    className="dropdown-item"
                    href="https://ess.rmuti.ac.th/RMUTI/Registration/WebReportForm/StTimetableInstructorPRT.aspx"
                    target="_blank"
                  >
                    ตารางสอน
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="dropdown">
                <div
                  className="text-center"
                  id="studentMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`${basePath()}assets/img/student.svg`}
                    alt="student"
                    width="50px"
                  />
                  <p>สำหรับนักศึกษา</p>
                </div>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="studentMenuButton"
                >
                  <a
                    className="dropdown-item"
                    href="https://ess.rmuti.ac.th/RMUTI/Registration/WebReportForm/StTimetableStudentPRT.aspx"
                    target="_blank"
                  >
                    ตารางเรียน
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://ess.rmuti.ac.th/RMUTI/Registration/Account/Login.aspx"
                    target="_blank"
                  >
                    ตารางสอบ
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://www.rmuti.ac.th/2019/%E0%B8%9B%E0%B8%8E%E0%B8%B4%E0%B8%97%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2/"
                    target="_blank"
                  >
                    ปฏิทินการศึกษา
                  </a>
                  <a
                    className="dropdown-item"
                    href="http://www.sci.rmuti.ac.th/sciart/index.php?option=com_scheduler&view=scheduler&Itemid=12#date=2020-03-03,mode=month"
                    target="_blank"
                  >
                    ปฏิทินกิจกรรม
                  </a>
                  <a
                    className="dropdown-item"
                    href="http://regis.rmuti.ac.th/regis/?page_id=137"
                    target="_blank"
                  >
                    แบบฟอร์มต่าง ๆ
                  </a>
                  <Link href="/apprentice" as={`${basePath()}apprentice`}>
                    <a className="dropdown-item">สหกิจศึกษาและฝึกงาน</a>
                  </Link>
                  <Link href="/seminar" as={`${basePath()}seminar`}>
                    <a className="dropdown-item">สัมมนาและโครงงานพิเศษ</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="dropdown">
                <div
                  className="text-center"
                  id="joinMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`${basePath()}assets/img/join.png`}
                    alt="join"
                    width="50px"
                  />
                  <p>สำหรับผู้สนใจศึกษา</p>
                </div>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="joinMenuButton"
                >
                  <Link href="/news/join" as={`${basePath()}news/join`}>
                    <a className="dropdown-item">ข่าวการรับสมัคร</a>
                  </Link>
                  <Link href="/bachelor" as={`${basePath()}bachelor`}>
                    <a className="dropdown-item">หลักสูตร</a>
                  </Link>
                  <a
                    className="dropdown-item"
                    href="https://ess.rmuti.ac.th/eAdmission/eApplicant/InfoEAdmission.aspx"
                    target="_blank"
                  >
                    ระบบการรับเข้าศึกษาต่อ
                  </a>
                  <a className="dropdown-item" href="#">
                    แนะนำแนวทางการศึกษาและอาชีพ
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <Link href="/alumni" as={`${basePath()}alumni`}>
                <div className="dropdown">
                  <div
                    className="text-center"
                    id="alumniButton"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={`${basePath()}assets/img/alumni.png`}
                      alt="join"
                      width="50px"
                    />
                    <p>สำหรับศิษย์เก่า</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BodyContent = ({ children }) => {
  return (
    <div className="body-content" id="bodyContent">
      <nav className="navbar navbar-expand-md navbar-light rounded">
        <a className="navbar-brand d-block d-sm-block d-md-none">เมนู</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/" as={`${basePath()}`}>
                <a className="nav-link">หน้าหลัก</a>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                เกี่ยวกับสาขา
              </a>
              <div className="dropdown-menu" aria-labelledby="aboutDropdown">
                <Link href="/history" as={`${basePath()}history`}>
                  <a className="dropdown-item">ประวัติสาขาวิชา</a>
                </Link>
                <Link href="/personal" as={`${basePath()}personal`}>
                  <a className="dropdown-item">คณาจารย์และเจ้าหน้าที่</a>
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="newsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ข่าวสารและกิจกรรม
              </a>
              <div className="dropdown-menu" aria-labelledby="newsDropdown">
                <Link href="/news/publish" as={`${basePath()}news/publish`}>
                  <a className="dropdown-item">ข่าวประชาสัมพันธ์</a>
                </Link>
                <Link href="/news/activity" as={`${basePath()}news/activity`}>
                  <a className="dropdown-item">ข่าวกิจกรรม</a>
                </Link>
                <Link href="/news/academic" as={`${basePath()}news/academic`}>
                  <a className="dropdown-item">ข่าวบริการวิชาการ</a>
                </Link>
                <Link href="/news/join" as={`${basePath()}news/join`}>
                  <a className="dropdown-item">ข่าวการรับสมัคร</a>
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="academicDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                งานวิชาการ
              </a>
              <div className="dropdown-menu" aria-labelledby="academicDropdown">
                <Link href="/bachelor" as={`${basePath()}bachelor`}>
                  <a className="dropdown-item">หลักสูตรปริญญาตรี</a>
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link href="/research" as={`${basePath()}research`}>
                <a className="nav-link">งานวิจัย</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/article" as={`${basePath()}article`}>
                <a className="nav-link">บทความทั่วไป</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact" as={`${basePath()}contact`}>
                <a className="nav-link">ติดต่อเรา</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-3">{children}</div>
    </div>
  );
};

const FooterContent = ({ fullYear }) => {
  return (
    <div className="footer-content" id="footerContent">
      <div className="link-footer">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-6 mb-3">
              <h5 className="mb-3">เว็บไซต์ที่เกี่ยวข้อง</h5>
              <a href="http://rmuti.ac.th/" target="_blank">
                มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
              </a>
              <a href="http://www.sci.rmuti.ac.th/sciart/" target="_blank">
                คณะวิทยาศาสตร์และศิลปศาสตร์ มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
              </a>
              <a href="https://ess.rmuti.ac.th/" target="_blank">
                ระบบสารสนเทศ มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
              </a>
              <a href="http://www.nso.go.th/sites/2014" target="_blank">
                สำนักงานสถิติแห่งชาติ
              </a>
            </div>
            <div className="col-md-6 mb-3">
              <h5 className="mb-3">ติดต่อเรา</h5>
              <p className="mb-3">
                สาขาคณิตศาสตร์และสถิติประยุกต์ คณะวิทยาศาสตร์และศิลปศาสตร์
                มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน 744 ถ.สุรนารายณ์ ต.ในเมือง
                อ.เมือง จ.นครราชสีมา 30000
              </p>
              <div className="row">
                <div className="col-md-8 mb-3">
                  <a className="mb-1">
                    <img
                      src={`${basePath()}assets/img/phone.svg`}
                      width="20px"
                      alt="423799.svg"
                    ></img>
                    &nbsp;&nbsp;044-233000 ต่อ 4335
                  </a>
                  <a
                    href="https://www.facebook.com/MathStatRmuti/"
                    target="_blank"
                  >
                    <img
                      src={`${basePath()}assets/img/iFacebook.svg`}
                      width="20px"
                      alt="1312139.svg"
                    ></img>
                    &nbsp;&nbsp;Math-Stat RMUTI
                  </a>
                </div>
                <div className="col-md-4 mb-3">
                  <img
                    className="imgFacebook"
                    src={`${basePath()}assets/img/facebook.png`}
                    width="50px"
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-footer">
        <div className="container-lg">
          Copyright © {fullYear}&nbsp; สาขาคณิตศาสตร์และสถิติประยุกต์
          คณะวิทยาศาสตร์และศิลปศาสตร์ มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
        </div>
      </div>
    </div>
  );
};

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullYear: new Date().getFullYear(),
    };
  }

  componentDidMount() {
    document.getElementById("bodyContent").style.paddingBottom = `${
      document.getElementById("footerContent").offsetHeight + 30
    }px`;
    window.addEventListener("resize", () => {
      document.getElementById("bodyContent").style.paddingBottom = `${
        document.getElementById("footerContent").offsetHeight + 30
      }px`;
    });
  }

  render() {
    return (
      <div className="default-content">
        <div className="container-lg">
          <HeaderContent />
          <BodyContent children={this.props.children} />
        </div>
        <FooterContent fullYear={this.state.fullYear} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(DefaultLayout);
