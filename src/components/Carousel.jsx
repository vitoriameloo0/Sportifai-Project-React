import "../styles/Menu.css";

const Carousel = () => {
    return (
      <div id="carousel-spotify" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h1>Música para todos</h1>
            <a href="#" className="btn btn-lg btn-custom btn-roxo" data-bs-toggle="modal" data-bs-target="#infoModal">
              Aproveite o Sportifai Free
            </a>
            <a href="#" className="btn btn-lg btn-custom btn-branco" data-bs-toggle="modal" data-bs-target="#infoModal">
              Obter Sportifai Free
            </a>
          </div>
          <div className="carousel-item">
            <h1>As Top 5 das paradas</h1>
            <a href="/top5dasParadas" className="btn btn-lg btn-custom btn-branco">
              <i className="fas fa-music"></i> Veja agora
            </a>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel-spotify" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          
        </a>
        <a className="carousel-control-next" href="#carousel-spotify" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          
        </a>
      </div>
    );
  };
  
  export default Carousel;
  