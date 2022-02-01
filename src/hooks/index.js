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
      const newData = await axios.get('/api/?brand=maybelline')
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

// changes background color on scroll.
export const useChangeBackgroundOnScroll= (element, value, changedColor,initialColor) => {
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const handleScroll = () => {
    if (window.scrollY > value) {
      document.querySelector(`.${element}`).style.background = `${changedColor}`;
    } else {
      document.querySelector(`.${element}`).style.background = `${initialColor ? initialColor : 'transparent'}`;
    }
  };

}

export default useFetchProducts;
