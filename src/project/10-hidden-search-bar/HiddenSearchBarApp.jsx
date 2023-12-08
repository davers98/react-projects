import React, { useState, useEffect, useRef } from 'react'
import { BsSearch } from "react-icons/bs"

export default function HiddenSearchBarApp() {

  const [UiProps, setUiProps] = useState({
    bg: "purple",
    shadow: "",
    transition: "all .3s ease",
    opacity: 0,
    showSearchIcon: true,
    showSearchBar: false,
    borderBottomColor: "#fff"
  })

  let body = (document.body.style)
  let InputStyle = {
    margin: "10vh 25vw",
    width: "20vh",
    height: "30px",
    padding: "1rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: `1px solid ${UiProps.borderBottomColor}`,
    fontSize: "1.3rem",
    color: "#eee",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,.75)",
    opacity: UiProps.opacity,
    transition: "all 0.3s ease"


  }
  let BsSearchStyle = {
    fontSize: "50px",
    position: "absolute",
    cursor: "pointer",
    top: 20,
    right: 20

  }

  const InputEL = useRef(null)

  useEffect(() => {
    body.background = UiProps.bg;
    body.boxShadow = UiProps.shadow;
    body.transition = UiProps.transition;
    UiProps.showSearchBar && InputEL.current.focus()
  }, [UiProps.shadow], [UiProps.showSearchBar]);

  const showSearch = () => {
    setUiProps({
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true
    })
  }

  const handleSearchFocus = () => {
    setUiProps({
      shadow: "inset 0 -60vh 30vw 200px rgba(0,0,0,.8)",
      borderBottomColor: "green"
    })
  }
  const handleSearchBlur = (e) => {
    setUiProps({
      shadow: "none",
      borderBottomColor: "#fff",
      opacity: 0,
      showSearchIcon: true
    })
  }

  return (
    <div className='container' style={{ height: "100vh" }}>


      
      {UiProps.showSearchIcon ?
        (<BsSearch style={BsSearchStyle} onClick={showSearch} />)
        : (
          <input type='text'
        placeholder='Search'
        style={InputStyle}
        ref={InputEL}
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur} />
        )}



    </div>
  )
}
