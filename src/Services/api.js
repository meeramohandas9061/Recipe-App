import react, {useEffect, useState} from 'react'
import axios from 'axios'


export default axios.create ({
    baseURL: "www.themealdb.com/api/json/v1/1/"
    

});