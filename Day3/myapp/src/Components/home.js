// // import React from 'react'
// // // import p1 from '../Assets/Img/aki.jpg'
// // // import p2 from '../Assets/Img/denji.jpg'
// // // import p3 from '../Assets/Img/himeno.jpg'
// // // import p4 from '../Assets/Img/kobeni.jpg'
// // // import p5 from '../Assets/Img/makima.jpg'
// // function home() {
// //   return (
// //         // <div className='om'>
// //         //     <div className='p1'>
// //         //     </div>
// //         //     <img src={C:\Users\Shreyas.P.P\OneDrive\Documents\GitHub\React_IRC\Day3\myapp\src\Assets\Img\aki.jpg} alt="../Assets/Img/aki.jpg"/>
// //         //     <div className='p2'>

// //         //     <div className='p4'>
// //         //     </div>

// //         //     <div className='p5'>
// //         //     </div>
// //         // </div>
// //         <body>

// //             {/* <div className='p3'>
// //               <img src="C:\Users\Shreyas.P.P\OneDrive\Documents\GitHub\React_IRC\Day3\myapp\src\Assets\Img\aki.jpg"></img>
// //             </div> */}
// //         </body>
// //     )
// // }

// // export default home

// import React from 'react';

// const ImageBoxes = () => {
//   const boxes = [
//     {
//       imgURL: 'https://i.postimg.cc/sgBkfbtx/img-1.jpg',
//       text: 'Renji'
//     },
//     {
//       imgURL: 'https://i.postimg.cc/3RZ6bhDS/img-2.jpg',
//       text: 'Sora'
//     },
//     {
//       imgURL: 'https://i.postimg.cc/DZhHg0m4/img-3.jpg',
//       text: 'Kaito'
//     },
//     {
//       imgURL: 'https://i.postimg.cc/KjqWx5ft/img-4.jpg',
//       text: 'Tsuki'
//     },
//     {
//       imgURL: 'https://i.postimg.cc/nrcWyW4H/img-5.jpg',
//       text: 'Mitsui'
//     }
//   ];

//   return (
//     <div className="container">
//       {boxes.map((box, index) => (
//         <div
//           key={index}
//           className={`box box-${index + 1}`}
//           style={{ '--img': `url(${box.imgURL})` }}
//           data-text={box.text}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default ImageBoxes;
import "../Assets/Css/home.css"
const home =()=>
{
  return (
    <head>
  <title>
    Genshin Impact
  </title>

<body>
            <div class="nav-links">
        <ul>
            <li><a href="project.html">Home</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="projectcontact.html">Contacts</a></li>
            <li><a href="projectlogin.html">Login</a></li>
        </ul>
            </div>
  <div class="container">
    
    <img src="https://styles.redditmedia.com/t5_12p40m/styles/communityIcon_wi4l5x8xgy231.png" class="page-logo" alt=""/>
    <h1 class="page-title">Genshin Impact</h1>
    <a href="https://genshin.hoyoverse.com/en/">
      <button id="btnSortear">MiHoYo</button>
    </a>
    <div id="divBotaoReiniciar"></div>
    <div class="pontuacao" id="pontuacao">

    <form id="form">
      <h2>Genshin Impact is an action role-playing game developed by miHoYo, published by miHoYo in mainland China and worldwide by Cognosphere,HoYoverse.</h2>
      <div class="opcoes" id="opcoes">
      {/* <!-- <a href="https://www.youtube.com/@GenshinImpact"> */}
        <button id="btnJogar">YouTube</button>
        
      {/* </a> --> */}
      {/* <!-- <button type="button" id="btnJogarNovamente" onclick="jogarNovamente()" disabled>Próxima Rodada</button> --> */}
      <div id="resultado" class="resultado">
        </div>
    </form>
  
  )
}