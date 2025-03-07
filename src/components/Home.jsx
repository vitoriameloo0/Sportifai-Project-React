import Carousel from "./Carousel";

const Home = () => {
  return (
    <section id="home" className="d-flex">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-md-12 capa">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;