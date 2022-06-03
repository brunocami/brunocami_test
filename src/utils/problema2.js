import { useState, useEffect } from "react"
import axios from 'axios';

const Problema2Utils = () => {
    
  const [pokemonsCount, setPokemonsCount] = useState([]);
  const [typesArray, setTypesArray] = useState([]);
  const [type, setType] = useState({});
  const [urlType, setUrlType] = useState("");
  const [searchKey, setSearchKey] = useState("");

  //set search query 
  const handleChange = (e) => {
    setSearchKey(e.target.value)
  }
  //set types array
  const searchTypes = async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/type`);
    setTypesArray(data.results)
  }

  useEffect(() => {
    searchTypes();
  }, [])

  //search type by search query
  const submitForm = async (e) => {
    e.preventDefault()
    typesArray.map(item => {
      if(item.name === searchKey) {
        setUrlType(item.url)
      }
    })
    await searchType();
  }
  
  var pokemonsPerType = []

  if (pokemonsCount !== []) {
    pokemonsCount.map(item => {
      pokemonsPerType.push(item.pokemon.name)
    })
  }

  const searchType = async () => {
    if(urlType === "") {
      console.log("Aca no hay nada")
    } else {
      const { data } = await axios.get(`${urlType}`);
      setType({...data})
      setPokemonsCount(data.pokemon)
    }
  }

  const [pokemon, setPokemon] = useState([])

  const loadData = () => {
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
			.then(resp => {
				for (let i = 0; i < resp.data.results.length; i++) {
					axios.get(resp.data.results[i].url)
						.then(result => {
							setPokemon(prevArray => [...prevArray, result.data])
						})
				}
			})
  } 

  
  

  useEffect(loadData, [])

  return {pokemonsCount, typesArray, type, handleChange,  submitForm, pokemonsPerType, pokemon}
}

export default Problema2Utils;