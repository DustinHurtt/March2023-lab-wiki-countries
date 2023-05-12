import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from 'react'
import { CountriesContext, CountriesProvider } from "../context/countries.context"

const CountryDetails = () => {

    const [country, setCountry] = useState(null)

    const { theseCountries, getCountry } = useContext(CountriesContext)

    const { id } = useParams()

    const getImage = (code) => {
        return `https://flagpedia.net/data/flags/icon/144x108/${code.toLowerCase()}.png`
    }

    useEffect(() => {

        setCountry(getCountry(id))

    }, [id, theseCountries])


  return (
    <div className="col-7">

    {
        country ? 
        <>
            <img src={getImage(country.alpha2Code)} alt='country' />
            <h1>{country.name.common}</h1>
            <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{country.capital[0]}</td>
                </tr>
                <tr>
                <td>Area</td>
                <td>
                    {country.area} km
                    <sup>2</sup>
                </td>
                </tr>
                <tr>
                <td>Borders</td>
                <td>
                    <ul>

                    {
                        country.borders.map((border) => {
                            return (
                                <li>
                                    <Link to={`/${border}`}>{getCountry(border).name.common}</Link>
                                </li>
                            )
                        })
                    }

                    </ul>
                </td>
                </tr>
            </tbody>
            </table>

        </>

        : <p>Loading...</p>
    }


  </div>
  )
}

export default CountryDetails