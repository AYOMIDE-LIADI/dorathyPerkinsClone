import { createContext, useState } from "react"
import { useRef } from 'react';
import axios from "axios";
import { useEffect } from "react";
import userEvent from "@testing-library/user-event";


export const CounterContext = createContext()

export const CounterProvider =({children})=>{


    // toggle detail info
    const [isOpen, setIsOpen] = useState(false); 

    const toggleDescription = () => {
        setIsOpen(!isOpen); 
    };
    const [isOpens, setIsOpens] = useState(false); 

    const toggleDescriptions = () => {
        setIsOpens(!isOpens); 
    };
    const [isOpenss, setIsOpenss] = useState(false); 

    const toggleDescriptionss = () => {
        setIsOpenss(!isOpenss); 
    };

    // slider function

    let slides =[
        "https://mediahub.debenhams.com/dbz_prod_WK40_DP_40OFF_COATSKNITSBOOTS_DT?qlt=80&w=1730&h=727&ttl=86400&dpr=1&fit=cvr",
        "https://mediahub.debenhams.com/dbz_prod_WK40_DP_50OFFEDIT_DT?qlt=80&w=1730&h=727&ttl=86400&dpr=1&fit=cvr",
        "https://mediahub.dorothyperkins.com/dbz_prod_DP_WK35_HERO_AWCAMPAIGN_DT?qlt=80&w=1730&h=727&ttl=86400&dpr=1&fit=cvr",
        "https://mediahub.debenhams.com/dbz_prod_WK39_DP_PAYDAY_DT?qlt=80&w=1730&h=727&ttl=86400&dpr=1&fit=cvr"
      ]

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: -100,
        pauseOnHover: true,
        overflow: false,
      };
      const sliderSettings2 = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
      };
    
      const sliderSettings3 = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        pauseOnHover: true,
      };
      
     
      const sliderRef = useRef(null);
      
      const goToPrev = () => {
        sliderRef.current.slickPrev();
      };
    
      const goToNext = () => {
        sliderRef.current.slickNext();
      };
    
      const sliderRef2 = useRef(null);
      
      const goToPrev2 = () => {
        sliderRef2.current.slickPrev();
      };
    
      const goToNext2 = () => {
        sliderRef2.current.slickNext();
      };

      
      const base_url ="http://ecommerce.reworkstaging.name.ng/v2"
      
      //form validation for user registration

      const [inputValue, setInputValue] = useState({
        first_name: "",
        last_name: "",
        day: "",
        month: "",
        year: "",
        gender: "",
        email: "",
        phone: "",
        password: "",
    });

    const [error, setError] = useState({
        first_name: "",
        last_name: "",
        day: "",
        month: "",
        year: "",
        gender: "",
        email: "",
        phone: "",
        password: "",
    });

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const formValidate = () => {
        const newError = {};
 
        if (inputValue.first_name === "") {
            newError.first_name = "First name cannot be empty";
        } else if (!isNaN(inputValue.first_name)) {
            newError.first_name = "Invalid name (numbers not allowed)";
        }

        if (inputValue.last_name === "") {
            newError.last_name = "Last name cannot be empty";
        } else if (!isNaN(inputValue.last_name)) {
            newError.last_name = "Invalid name (numbers not allowed)";
        }

        if (inputValue.day === "") {
            newError.day = "Day cannot be empty";
        }

        if (inputValue.month === "") {
            newError.month = "Month cannot be empty";
        }

        if (inputValue.year === "") {
            newError.year = "Year cannot be empty";
        }
        if (inputValue.email === "") {
            newError.email = "Email cannot be empty";
        } else if (!validateEmail(inputValue.email)) {
            newError.email = "Invalid email format";
        }

        if (inputValue.phone === "") {
            newError.phone = "Phone number cannot be empty";
        } else if (isNaN(inputValue.phone)) {
            newError.phone = "Phone number must be numeric";
        }

        if (inputValue.password === "") {
            newError.password = "Password cannot be empty";
        } else if (inputValue.password.length < 5) {
            newError.password = "Password should be more than 4 characters";
        }

        setError(newError);

        return Object.keys(newError).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formValidate()) {
            try {         
                const res = await axios.post(`${base_url}/users`, inputValue);
                if (res.status !== 200){
                  throw new Error("Error posting user details");
                }
                if(res.data.code === 304){
                  throw new Error("Email Already Exist");
                }
                window.location.href="/login"
                console.log('Form submitted', res.data);
                alert('Registration Successful');
            } catch (error) {
                console.error(error.message);
            }
        } else {
            console.log('Form validation failed');
        }
    };

    // validation for user login

        const [loginValue, setLoginValue] = useState({
          email: "",
          password:""
         })
         const [loginError, setLoginError] = useState({
            email: "",
            password:""
         })

        const handleLoginChange =(e)=>{
          const {name, value} = e.target;
          setLoginValue((PreviousState)=> ({
              ...PreviousState,
              [name]: value
          }));
        }

       
    const validateLogin = () => {
      const errors = {};
          if(loginValue.email ===""){
            errors.email = "Email is required";
          }
          if(loginValue.password===""){
            errors.password="password is required"
          }
          setLoginError(errors);
          return Object.keys(errors).length === 0;
      }

      const handleLoginSubmit = async (e) => {
        e.preventDefault();

        if (validateLogin()) {
          try {         
            const res = await axios.post(`${base_url}/users/login`, loginValue)
            if (res.status !== 200) {
              throw new Error('Error posting to api')
            }
            if(res.data.code === 404){
              alert('Invalid Password or email')
              return
            }
            console.log(res.data);
            localStorage.setItem('UserloginInfo', JSON.stringify(res.data))   
            window.location.href= '/'
          } catch (error) {
            console.error(error.message);
          }
      } else {
          console.log('Form validation failed');
      }
    };

    const User = JSON.parse(localStorage.getItem('UserloginInfo')) || {};
    const user_id = User.id;
    console.log(user_id);
    //  localStorage.setItem('UserloginInfo', JSON.stringify({ id: 'dummy_id' }));


    // edit user registration form

    const [inputValue1, setInputValue1] = useState({
      first_name: User.first_name || "",
      last_name: User.last_name || "",      
      email: User.email ||"",
      phone: User.phone ||"",
  });

  const [error1, setError1] = useState({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
  });

  const validateEmail1 = (email) => {
      return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange1= (e) => {
      const { name, value } = e.target;
      setInputValue1((prevState) => ({
          ...prevState,
          [name]: value
      }));
      console.log(`${name}: ${value}`);
      
  };

  const formValidate1 = () => {
      const newError1 = {};

      if (inputValue1.first_name === "") {
        newError1.first_name = "First name cannot be empty";
      } else if (!isNaN(inputValue1.first_name)) {
          newError1.first_name = "Invalid name (numbers not allowed)";
      }
      if (inputValue1.last_name === "") {
          newError1.last_name = "Last name cannot be empty";
      } else if (!isNaN(inputValue1.last_name)) {
          newError1.last_name = "Invalid name (numbers not allowed)";
      }  
      if (inputValue1.email === "") {
          newError1.email = "Email cannot be empty";
      } else if (!validateEmail1(inputValue1.email)) {
          newError1.email = "Invalid email format";
      }
      if (inputValue1.phone === "") {
          newError1.phone = "Phone number cannot be empty";
      } else if (isNaN(inputValue1.phone)) {
          newError1.phone = "Phone number must be numeric";
      }


      setError1(newError1);

      return Object.keys(newError1).length === 0;
  };

  const handleSubmit1 = async (e) => {
      e.preventDefault();
      
      if (formValidate1()) {
          try {         
              const res = await axios.put(`${base_url}/users/${user_id}`, inputValue1);
              if (res.status !== 200) {
                throw new Error("Error editing data");
              }
              console.log('Form submitted', res.data);
              alert('Edited Successfully');
              localStorage.setItem('UserloginInfo', JSON.stringify(res.data))   
              window.location.href='/'
          } catch (error) {
            
              alert('An error occurred while submitting the form. Please try again.');
              console.log( error.message);
          }
      } else {
          console.log('Form validation failed');
      }
  };
   



     // validate change password

    
     
     
     const [passwordChange, setPasswordChange] = useState({
      old_password:"",
      new_password:""
    })
    const [passwordChangeError, setPasswordChangeError] = useState({
      old_password:"",
      new_password:""
    })

    const handleinputchange223 =(e)=>{
        const {name, value} = e.target;
        setPasswordChange((prevState)=>({
          ...prevState,
           [name]:value
        }))
    }

    const validatePassword =()=>{
      const passError = {}

      if(passwordChange.old_password ===""){
        passError.old_password = "old password cannot be empty "
      }
      if(passwordChange.new_password ===""){
        passError.new_password = "new password cannot be empty "
      }

      setPasswordChangeError(passError)
      return Object.keys(passError).length === 0;

    }

    const changePasswordSubmit =async(e)=>{
      e.preventDefault();

      if (validatePassword()) {
            try {
                const res = await axios.put(`${base_url}/users/${user_id}/change-passwd`,passwordChange)
                if (res.data.code ===404){
                  alert("Password does not Match")
                }else{
                  console.log(res.data);
                  setPasswordChange(res.data)
                  alert("password changed successfully")
                }
            } catch (error) {
              console.error("error in editing form", error);
              
            }
      } else {
        console.log( "validation error");  
      }

    }

    // To get a users cart

    const [userCartId, setUserCartId] = useState([])

    const getUserCart =async(user_id)=>{
        try {
          const res = await axios.get(`${base_url}/carts?${user_id}`)
          if (res.status !== 200) {
            throw new Error("error gettin user id");
          }
          setUserCartId(res.data)
        } catch (error) {
          console.error("error in getting user id", error);
        }
    }

      // Get all categories
      
      const merchant_id = "67080eb280dc203620000961"

      const [categoryy, setCategoryy] = useState([])

      const getCategories = async ()=>{
         try {
           const res = await axios.get(`${base_url}/categories?merchant_id=${merchant_id}`)
           if(res.status !== 200){
             throw new Error("error in getting category");
           }
           console.log(res.data);
           setCategoryy(res.data)
         } catch (error) {
           console.error(error.message);  
         }
      }
      useEffect(() => {
       getCategories();
     }, []);


     //Get all product for a particular merchant

     const [allProducts, setAllProducts] = useState([]);

     const getAllproduct =async()=>{
       try {
         const res = await axios.get(`${base_url}/products?merchant_id=${merchant_id}`)
         if (res.status !==200){
           throw new Error("Error fetching products");
         }
         console.log(res.data.data);
         setAllProducts(res.data.data);
       } catch (error) {
         console.error(error.message);   
       }
     }
     useEffect(()=>{
       getAllproduct()
     },[])



      // cart item

    const [totalAmount, setTotalAmount] = useState(0);
    const [cart, setCart] = useState([]); 

    
      const fetchCart = async () => {
        try {
          const res = await axios.get(`${base_url}/carts?user_id=${user_id}`);
          console.log(res.data);
          setCart(res.data);
        } catch (error) {
          console.error(error.message);
        }
      };

      useEffect(() => {
      fetchCart(); 
    }, []); 


    useEffect(() => {
      const updateCart = async() => {
        try {
          const res = await axios.post(`${base_url}/carts`, cart);
          console.log(res.data);
          setTotalAmount(res.data.totalAmount);
        } catch (error) {
          console.error(error.message);
        }
      };
      if (cart.length) { 
        updateCart();
      }
    }, [cart]); 

   

    useEffect(() => {
      if (Array.isArray(cart)) { // Ensure cart is an array
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalAmount(total);
      } else {
        console.warn("Cart is not an array:", cart);
      }
    }, [cart]);
    
      
     

      const addCart = (product) => {
        if (!Array.isArray(cart)) {
          console.warn("Cart is not an array:", cart);
          setCart([]); 
          return;
        }
      
        const exist = cart.find((item) => item.id === product.id);
      
        if (exist) {
          
          setCart(cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ));
        } else {
          
          setCart([...cart, { ...product, quantity: 1 }]);
        }
      };
      
      
      // incrementCart
      const incrementCart = (id) => {
        setCart(cart?.map((item) => 
            item.id === id ? { ...item, quantity: item.quantity + 1} : item    
            ))
      }

      // decrementCart
      const decrementCart = (id) => {
        setCart(cart?.map((item) => 
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1} : item    
            ))
      }

      //remove item
      const removeItem = (id) => {
        setCart(cart.filter((item)=> item.id !== id))
      }


      // onclick of like, show red
      const [likedProducts, setLikedProducts] = useState([]);

      const toggleLike = (productId) => {
          setLikedProducts(prevLikedProducts =>
              prevLikedProducts.includes(productId)
                  ? prevLikedProducts.filter(id => id !== productId) // Remove if already liked
                  : [...prevLikedProducts, productId] // Add if not liked
          );
      };


      // handle Checkout
      const [checkOutt, setCheckoutt] = useState({
        user_id : user_id
      })

      const checkOut = async()=>{
        try {
          const res = await axios.post(`${base_url}/carts/checkout`,checkOutt);
          if (res !== 200){
            throw new Error("error posting checkout");
          }
          console.log(res.data);
          
        } catch (error) {
          console.error(error.message);
        }
      }
      useEffect(()=>{
        checkOut()
      },[])
    

     const Values ={
        isOpen,
        isOpens,
        isOpenss,
        toggleDescription,
        toggleDescriptions,
        toggleDescriptionss,
        goToNext2,
        goToPrev2,
        goToNext,
        goToPrev,
        sliderRef2,
        sliderRef,
        sliderSettings,
        sliderSettings2,
        sliderSettings3,
        slides,
        handleSubmit,
        formValidate,
        handleChange,
        validateEmail,
        inputValue,
        error,
        loginError,
        setLoginError,
        loginValue,
        setLoginValue,
        validateLogin,
        handleLoginChange,
        handleLoginSubmit,
        handleSubmit1,
        handleChange1,
        error1,
        inputValue1,
        changePasswordSubmit,
        handleinputchange223,
        passwordChangeError,
        passwordChange,
        categoryy,
        allProducts,
        addCart,
        incrementCart,
        decrementCart,
        cart,
        totalAmount,
        removeItem,
        toggleLike,
        likedProducts,
        checkOut,
        

    }

    return <CounterContext.Provider  value={Values}>
                {children}
           </CounterContext.Provider>
}