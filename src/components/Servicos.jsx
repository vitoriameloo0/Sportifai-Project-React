import "../styles/Menu.css";

const Servicos = () => {
  return (
    <section id="servicos" className="caixa">
      <div className="container">
        <div className="row">

          <div className="col-md-6">
            <div className="row albuns">
              <div className="col-md-6">
                <img src="../src/images/img1.jpg" className="img-fluid d-none d-md-block" alt="Album 1"/>
              </div>
              <div className="col-md-6">
                <img src="../src/images/img2.jpg" className="img-fluid d-none d-md-block" alt="Album 2" />
              </div>
            </div>
            <div className="row albuns">
              <div className="col-md-6">
                <img src="../src/images/img3.jpg" className="img-fluid d-none d-md-block" alt="Album 3" />
              </div>
              <div className="col-md-6">
                <img src="../src/images/img4.jpg" className="img-fluid d-none d-md-block" alt="Album 4" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h2>O que o Sportifai tem?</h2>
            <h3>Músicas</h3>
            <p>O Sportifai tem milhões de músicas.</p>
            <h3>Playlists</h3>
            <p>No Sportifai você encontra uma playlist para cada momento.</p>
            <h3>Novos lançamentos</h3>
            <p>Escute os novos lançamentos de singles e álbuns da semana.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
