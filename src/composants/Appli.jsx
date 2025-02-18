import './Appli.scss';
import Entete from './Entete';
import Principal from './Principal';
import Pied2Page from './Pied2Page';

function Appli() {

  return (
    <div className='Appli'>
      <Entete />
      <Principal />
      <Pied2Page />
    </div>
  )
}

export default Appli;
