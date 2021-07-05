import React, {useEffect,useReducer,useState} from 'react'
import styled from 'styled-components'
import Header from '../components/Header'


const Loading = styled.div`
    width: 800px;
    height : auto;
    margin: 300px auto;
    font-size : 48px;
    text-align : center;
`

const MovieList = styled.div`
    width: 800px;
    height: auto;
    margin: 5px auto;
    text-align : center;

`

const Title = styled.div`

    width : 800px;
    height : 48px;
    font-size : 36px;
    color : black;
    font-weight : 600;
    margin: 20px auto;
    text-align: center;
`

const reducer = (state,action) => {
    switch(action.type){
        case "LOADING" :
            return {
                loading: true,
                data: null,
                error : null
            }
        case "ERROR" :
            return {
                loading : false,
                data : null,
                error : action.error
            }
        case "SUCCESS" : 
            return {
                loading: false,
                data : action.data,
                error : null
            }
        default :
            throw new Error(`type error : ${action.type}`)
    }
}


function Movie() {

    const [state,dispatch] = useReducer(reducer,{
        loading : true,
        data : null,
        error : null
    })


    const fetchData = async (url) => {

        dispatch({type:"LOADING"})

        try{
            const response = await fetch(url)
            const data = await response.json()
            const movies = await data.data.movies

            dispatch({type:"SUCCESS",data:movies})

        } catch(error){
            dispatch({type:"ERROR"},error)
        }
    }

    useEffect(()=>{fetchData("https://yts.mx/api/v2/list_movies.json?limit=50")},[])


    ////////////useState///////////////////////////////////////////////
    // const [movies,setMovies] = useState([])
    // const [loading,setLoading] = useState(true)

    // useEffect(()=>{
    //     const getData = async (url) => {
    //         const fetchedData = await fetch(url)
    //         const datas = await fetchedData.json()
    //         setLoading(false)
    //         if(datas.status==="ok"){
    //             setMovies(datas.data.movies)
    //         }else{
    //             alert("failed to Fetch")
    //         }
    //     }
    
    //     getData("https://yts.mx/api/v2/list_movies.json?limit=50")
    // },[])

    return (
        <React.Fragment>
            <Header></Header>
            <Title>Movie List</Title>
            <div>
                {state.loading ? <Loading>영화 불러오는중..</Loading> : <div>{state.data.map((el,index)=><MovieList key={index}>{el.title}</MovieList>)}</div>}
            </div>
        </React.Fragment>
    )
}


export default Movie;