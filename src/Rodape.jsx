import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Rodape() {
  return (
    <>
    <div class="footer-basic">
        <footer>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/">Home</a></li>
                <li class="list-inline-item"><a href="/contato">Contato</a></li>
                <li class="list-inline-item"><a href="/sobre">Sobre</a></li>
            </ul>
            <p class="copyright">Informaticando © 2023</p>
        </footer>
    </div>
      </>
      );
}

export default Rodape;