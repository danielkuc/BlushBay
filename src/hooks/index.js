import axios from 'axios'
import React from 'react'

// CUSTOM HOOK : makes axios request and sets state 
 const useFetchProducts = (state, setState) => {
  React.useEffect(() => {
    fetchProducts()
  },[]);

  const fetchProducts = async () => {
    setState(prev => {
      if(prev.data) {
        return {
          ...prev,
          isLoading:true
        }
      }

      return {
        ...prev,
        isLoading:true
      }
    });

    try {
      const newData = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(response => {
        const result = response.data.map(object => {return {...object, inCart:false, count: 0}});
        return result;
      })
    
      setState(prev => {
        return {
          ...prev,
          data: newData,
          isLoading:false
        }
      });
    } catch (error) {
      setState(prev => {
        return {
          ...prev,
          error,
          data: null
        }
      });
    }

    return state;
  };
};

export const useScroll= (element, value, color) => {
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  },[]);

  const handleScroll = () => {
    if (window.scrollY > value) {
      document.querySelector(`.${element}`).style.color = `${color}`;
    } else {
      document.querySelector(`.${element}`).style.color = 0;
    }
  };

}

export default useFetchProducts;
