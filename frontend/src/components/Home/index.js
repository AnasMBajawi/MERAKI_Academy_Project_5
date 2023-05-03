import React from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import posts, { setPost } from "../Redux/reducers/posts";
import { setuserpostId } from "../Redux/reducers/comment";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const Home = () => {
  const [page, setPage] = useState(1);
  const [browse, setBrowse] = useState(false);
  const [limit, setLimit] = useState(6);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      posts: state.post.posts,
      mood: state.Mood.mood,
      totalPages: state.post.totalPages,
      currentPage: state.post.currentPage,
      language: state.auth.language
    };
  });
  const getAllPosts = (page, limit) => {
    
    axios
      .get(`http://localhost:5000/posts?page=${page}&limit=${limit}`)
      .then((res) => {
          
          dispatch(setPost(res.data.posts));

        

      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllPosts(page, limit);
  }, [limit,page]);


  

  const toOrder = (id, user_id) => {
    navigate("/CreateOrder", { state: { id, user_id } });
  };
  const mood = state.mood;
  return (
    <>
      {
      state.language?
      <header style={{ paddingLeft: 0 }}>
  <section id="hero" class="hero d-flex align-items-center section-bg">
    <div class="container">
      <div class="row justify-content-between gy-5 flex-row-reverse">
        <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-end">
          <img
            src={require('./1.png')}
            class="img-fluid"
            alt=""
            data-aos="zoom-out"
            data-aos-delay="300"
          />
        </div>
        <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-right">
          <div style={{ display: "flex", marginLeft:"10%"}}>
            
            <h2 data-aos="fade-up">أصبحت</h2>
            <p style={{ opacity: 0 }}>ss</p>
            <h2 data-aos="fade-up" style={{ color: "#08244f" }}>
              الصيانة{" "}
            </h2>
            <p style={{ opacity: 0 }}>ss</p>
          </div>
          <h2 data-aos="fade-up"> أسهل بكثير من قبل</h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ color: "white",marginLeft:"7%" }}
          >
            هنالك جيشا من المحترفين جاهزين لخدمتك باعلى مقاييس الجودة
          </p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay="200"
          style={{marginLeft:"25%"}}>
          <a
              href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle"></i>
              <span> شاهد فيديو </span>
            </a>
            <p style={{ opacity: 0 }}>ss</p>
            <a href="#book-a-table" className="btn-book-a-table" style={{fontSize:"20px"}}>
              حجز موعد
            </a>
            
          </div>
        </div>
      </div>
    </div>
  </section>
      </header>:
       <header style={{ paddingLeft: 0 }}>
        <section id="hero" class="hero d-flex align-items-center section-bg">
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <div style={{ display: "flex" }}>
                  <h2 data-aos="fade-up" style={{ color: "#08244f" }}>
                    Maintenance{" "}
                  </h2>
                  <p style={{ opacity: 0 }}>ss</p>
                  <h2 data-aos="fade-up">is</h2>
                </div>
                <h2 data-aos="fade-up"> Easier Than Before</h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{ color: "white" }}
                >
                  A well-trained army of craftsmen is ready to serve you
                </p>
                <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                  <a href="#book-a-table" className="btn-book-a-table">
                    Book an Appointment
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox btn-watch-video d-flex align-items-center"
                  >
                    <i className="bi bi-play-circle"></i>
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                <img
                  src={require('./1.png')}
                  class="img-fluid"
                  alt=""
                  data-aos="zoom-out"
                  data-aos-delay="300"
                />
                {/* <iframe src="https://giphy.com/embed/fgnHy6XLJRuVcu6dUa" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a ></a></p> */}
                {/* <iframe src="https://giphy.com/embed/F14BrsUdpzcc1wsSbV" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen style={{borderRadius:"50px"}}></iframe><p><a href="https://giphy.com/gifs/KLM-aviation-aircraft-klm-F14BrsUdpzcc1wsSbV"></a></p> */}
                {/* <iframe src="https://giphy.com/embed/BywAPqjtfmpKo" width="336" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/BywAPqjtfmpKo">via GIPHY</a></p> */}
                {/* <iframe src="https://giphy.com/embed/bTs6KvyvPeDNxg2gam" width="480" height="432" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/revisione-assistenza-tecnica-macchine-utensili-bTs6KvyvPeDNxg2gam"></a></p> */}
                {/* <iframe src="https://giphy.com/embed/hDlXTT0z0oQK59n3F8" width="480" height="399" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/ShipleyEnergy-hvac-shipley-energy-shipleyenergy-hDlXTT0z0oQK59n3F8"></a></p> */}
              </div>
            </div>
          </div>
        </section>
      </header> 
      }
      <div className="container1" style={{}}>
        {state.posts.map((post, i) => {
          return (
            <div key={i}>
              <MDBCard className="car">
                <MDBCardTitle>             
                  <p className="titleInPost">{post.title}
                  </p>
                
                </MDBCardTitle>
                
                <MDBCardImage
                  className="imgecard"
                  src={post.post_image}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                <MDBCardText className="nameCard"> {post.first_name} {post.last_name}</MDBCardText>              
                  <MDBCardText>{post.pricing} $/h</MDBCardText>
                  <MDBBtn
                    onClick={() => {
                      toOrder(post.id, post.user_id);
                      dispatch(setuserpostId(post.user_id));
                      console.log(post.user_id);
                    }}
                  >
                    {state.language?"اطلب الان":"order now"}
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          );
        })}
      </div>
      <MDBBtn
        onClick={() => {
          setPage(page - 1);
          getAllPosts(page-1, limit);
        }}
        style={{ marginBottom: "20px", marginTop: "20px" }}
      >
        {state.language?"السابق":"prev"}
      </MDBBtn>
      <MDBBtn
        onClick={() => {
          setPage(page + 1);
          getAllPosts(page+1, limit);
        }}
        style={{ marginLeft: "20px", marginBottom: "20px", marginTop: "20px" }}
      >
        {state.language?"التالي":"Next"}
      </MDBBtn>
    </>
  );
};
export default Home;
