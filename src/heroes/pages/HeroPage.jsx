import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  const {id} = useParams();
  
  const Navigate = useNavigate();

  const hero = useMemo( () => getHeroById(id), [id] ); 

  const onNavigateBack = () => {
    Navigate(-1);
  }

  if (!hero){

    return <Navigate to ="/marvel" />
  }

    return (

      <div className="row mt-5 animate__animated animate__fadeInLeft">
        <div className="col-4">
            <img 
            src={`/assets/heroes/${id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail"
            />
        </div>


        <div className="col-8">
          <h3>{hero.superhero}</h3>
            <ul className="list-group list-group-flush ">
                <li className="list-group-item"> <b> Alter ego: </b> {hero.alter_ego} </li>
                <li className="list-group-item"> <b> Publisher: </b> {hero.publisher} </li>
                <li className="list-group-item"> <b> First appearance: </b> {hero.first_appearance} </li>
            </ul>

            {/* <ul> */}
              {/* <h5 className="mt-3">Characters</h5>
              <li className="list-group-item"> <b> {hero.characters} </b>  </li> */}
              <li className="list-group-item"> <b> Characters: </b> {hero.characters} </li>
            {/* </ul> */}

            <button className="btn btn-outline-primary mt-2"
            onClick={onNavigateBack}>
              Regresar
            </button>
        </div>
      </div>
      
    )
  }