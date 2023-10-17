

import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { HeroeCard } from "../components";
import { getHeroesByName } from "../helpers";


export const SearchPage = () => {

  const navigate  = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
      event.preventDefault();
      // if(searchText.trim().length <= 1 ) return;
      navigate(`?q=${ searchText }`)
  }


    return (
      <>
        <h1>Search</h1>
        <hr/>

        <div className="row"> 
           <div className="col-5">
          <h4>Searching</h4>
          <hr/>

          <form onSubmit={onSearchSubmit}>
            <input
            type="text"
            placeholder="Buscar un heroe"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}

            />

            <button className="btn btn-outline-primary mt-1">
              Buscar
            </button>

          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr/>

          {/* {
            (q === '')
            ?  <div className="`aler alert-primary">Buscar un heroe</div>
            : (heroes.length === 0) 
            &&   <div className="`aler alert-danger mt-2">No se encontraron resultados con <b>{q}</b></div>
          } */}

            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
                Buscar un heroe
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No hay resultadods con: <b>{ q }</b>
            </div>


          {
            heroes.map( hero => (
                <HeroeCard key={hero.id} {...hero} />
            ))
          }

          {/* <HeroeCard/> */}
            </div>
        </div>

  


      </>
    )
  }
  