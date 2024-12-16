import Container from "react-bootstrap/Container";
import logo from "../images/logo.png";
import { Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { getAllMovies, searchFunction } from "../Redux/Action/movieAction";
import { useState } from "react";

function NavbarComp() {
  const lang = useSelector((state) => state.langRed.lang);
  const [en, setEn] = useState("EN");
  
  const dispatch = useDispatch();
  const reWord = (e) => {
    search(e.target.value);
  };
  const search = (searchWord) => {
    if (searchWord === "") {
      dispatch(getAllMovies(lang));
    } else {
      dispatch(searchFunction(searchWord, lang));
      console.log(searchWord);
    }
  };

  return (
    <div className="nav-style">
      <Container>
        <Row>
          <Col
            xs="2"
            className=" align-items-center justify-content-start d-flex"
          >
            <a
              href="/"
              className="d-flex align-items-center text-decoration-none "
            >
              <Image src={logo} className="logo" />
              <span className="logo-text">Aflam</span>
            </a>
          </Col>
          <Col
            xs="10"
            className=" align-items-center justify-content-end d-flex"
          >
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={(e) => reWord(e)}
            />
            <button
              className="search-btn"
              onClick={() => {
                if(lang === 'en_US'){
                  dispatch({type: 'ar'});
                  setEn('AR')
                }else{
                  dispatch({type: 'en'});
                  setEn('EN')
                }
              }}
            >
              {en}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavbarComp;
