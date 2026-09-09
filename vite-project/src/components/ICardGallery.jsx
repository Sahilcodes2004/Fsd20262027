import React from 'react'
import ICard from './ICard.jsx'

function ICardGallery() {
  // 1. Create the array containing all your student data
  const students = [
    {
      college: "ABES Engineering College",
      rollNo: "2400320100950",
      name: "Sahil Prakash Jackson",
      branch: "CSE-25",
      pic: "https://imgs.search.brave.com/8GOASGnPQK8ZBGnpM0OLZDW1TpDcWD8V58WxltgeGyA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9v/ZmZpY2U4MC8xMjAw/L3BlcnNvbi1tYWxl/LmpwZw"
    },
    {
      college: "ABES Engineering College",
      rollNo: "2400320100991",
      name: "Sarthak Rathaur",
      branch: "CSE",
      pic: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/124749/291939/Minimalisticart_na_350_19_7200X7200_0__05480.1701856442.jpg?c=2&imbypass=on"
    },
    {
      college: "ABES Engineering College",
      rollNo: "2400320100951",
      name: "Sahil singh",
      branch: "CSE",
      pic: "https://imgs.search.brave.com/2ben7fCziZ2tDZm0jW6ICdbkGmLYKqQQe9tSwaxkQoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9wZXJzb24t/aWNvbi1zdmctZG93/bmxvYWQtcG5nLTEw/NzU4Mi5wbmc_Zj13/ZWJwJnc9MTI4"
    },
    {
      college: "ABES Engineering College",
      rollNo: "2400320100961",
      name: "Satyam Singhr",
      branch: "CSE",
      pic: "https://imgs.search.brave.com/CKn8Kr-8zuuHclgRwO1F1ytMaOitshh7K9f2HsAVbzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9wZXJzb24t/aWNvbi1zdmctZG93/bmxvYWQtcG5nLTU1/NTIzNjIucG5nP2Y9/d2VicCZ3PTEyOA"
    }
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
      
      {/* 2. Map through the array inside curly braces */}
     {/* 2. Map through the array and pass the whole object as 'data' */}
      {students.map((ele) => (
        <ICard
          key={ele.rollNo}
          data={ele}
        />
      ))}

    </div>
  )
}

export default ICardGallery