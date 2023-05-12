import { Link } from "react-router-dom"
import { useContext } from "react"
import { CountriesContext } from "../context/countries.context"


const CountriesList = () => {

    const { theseCountries } = useContext(CountriesContext)

    const getImage = (code) => {
        return `https://flagpedia.net/data/flags/icon/72x54/${code.toLowerCase()}.png`
    }


  return (
    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
    <div className="list-group">

        {
            theseCountries.map((country) => {
                return (
                    <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">


                    <img src={getImage(country.alpha2Code)} alt='country' />

                    <br />

                    <p>{country.name.common}</p>
                    
                    </Link>
                )
            })
        }


    </div>
  </div>
  )
}

export default CountriesList