import "../styles/Menu.css";

const Modal = () => {
    return (
      <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="infoModalLabel">Informações do Sportifai Free</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Sportifai Free oferece uma ampla gama de músicas para você ouvir sem custo.</p>
              <p>O Sportifai Free tem anúncios, mas você pode aproveitar todas as funcionalidades para curtir sua música favorita em qualquer lugar.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" className="btn btn-primary" onClick={() => alert("Página ainda não implementada!")}>
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  