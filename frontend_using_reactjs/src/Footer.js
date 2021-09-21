import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Footer() {
  return (
      <footer>
        <Jumbotron style={{marginTop: '20px'}}>
          <div className="row">
            <div className="col-3" style={{textAlign: 'left'}}>
              <strong>PT ABCDEEF HIJKLMNO</strong><br/>
              Jl. mensano incorpori sano, no 123<br/>
              E : emailemail@emailemail.com<br/>
              P : 021-1234567<br/>
              Jakarta, 12345<br/>
            </div>
            <div className="col-3" style={{textAlign: 'left'}}>
              <ul style={{listStyle: 'none'}}>
                <li><a href="/#">link lorem ipsum 123</a></li>
                <li><a href="/#">link lorem ipsum</a></li>
                <li><a href="/#">link dolor sit amet</a></li>
                <li><a href="/#">link lorem ipsum</a></li>
                <li><a href="/#">link another</a></li>
              </ul>
            </div>
            <div className="col-6" style={{textAlign: 'right'}}>
              <ul style={{listStylePosition: 'inside'}}>
                <li>becik ketitik olo kethoro, suro diro joyo diningrat lebur dening pangastuti</li>
                <li>ing ngarso sung tulodho, ing madyo mangun karso, tut wuri handayani</li>
                <li>siji loro telu astone sedeku, mirengake bu guru mangke yen didangu</li>
                <li>papat nuli limo lungguhe sing toto, ojo podo sembrono mundak ora biso</li>
                <li>man lam yardho biqodhooi wa lam yashbir bi balaa-i falyathlub robban siwaaya</li>
                <li>annabiy shollu 'alaih sholawaatullaahi 'alaih wayanaalul barokaah kullu man sholla 'alaih</li>
              </ul>
            </div>
          </div>
          <p style={{fontWeight: 'bold', marginTop: '20px'}}>
            &copy;copyright PT ABCDEEF, 2021 
          </p>
        </Jumbotron>      
      </footer>
  );
}

export default Footer;
