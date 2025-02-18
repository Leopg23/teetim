import './ListeProduits.scss';
// importer les données du fichier JSON
import teeshirts from "../data/teeshirts.json";
import Produit from './Produit';

function ListeProduits(){

  return(
    <article className="principal Liste-produits">
    {teeshirts.map(
      teeshirt => <Produit {...teeshirt} key={teeshirt.id}/> 
    )}
  </article>
  );
}

export default ListeProduits;
