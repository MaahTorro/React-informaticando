import Cabeca from "../Cabeca"
import Rodape from "../Rodape"
import Carousel from 'react-bootstrap/Carousel';
import Produtos from "../Produtos";


function Home(){
    return(
        <div className="site">
            <Cabeca/>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.leidainformatica.com/wp-content/uploads/2020/05/205-1024x576.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mundoconectado.com.br/uploads/chamadas/leidainformatica.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.leidainformatica.com/wp-content/uploads/2021/11/pec-lei-informatica-scaled.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr />
    <h2 className="text-center">Produtos</h2>
    <div className="produtocont">
      <Produtos image="https://m.media-amazon.com/images/I/51Dqve9EAnL._AC_SX522_.jpg" preco="1.699,99"/>
      <Produtos image="https://images.tcdn.com.br/img/img_prod/477758/placa_de_video_rtx_2060_12gb_192_bit_gddr6_galax_2087_1_424b5fb007139bb8dd8935ae61ad55f5.jpg" preco="3.899,99"/>
      <Produtos image="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/065/026/products/rz01-04620100-r3u1-11-0784f6beb5e879ca3516765362769488-640-0.webp" preco="569,90"/>
      <Produtos image="https://images.tcdn.com.br/img/img_prod/931245/teclado_bluetooth_gamer_mecanico_fizz_pro_preto_rgb_k616rgb_redragon_7572_1_3c5a8d601bc11a459f2e87de5beb07cb.jpg" preco="279,99"/>
    </div>
    <Rodape/>
        </div>
    )
}

export default Home