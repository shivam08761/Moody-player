import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import axios from 'axios'



export default function FacialExpression({setSongs}) { 
const videoRef = useRef();
const canvasRef = useRef();

const loadModels = async () => {
const MODEL_URL = 'models';
await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
};


const startVideo = () => {
navigator.mediaDevices.getUserMedia({ video: true })
.then((stream) => {
videoRef.current.srcObject = stream;
})


.catch((err) => console.error("Error accessing webcam: ", err));
};


async function detectExpressions() {







const detections = await faceapi
.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
.withFaceExpressions();

let mostProbableExpression = 0;
let _expression = '';

if(!detections || detections.length === 0) {
console.log("no face detected");
return;
}


for(const expression of Object.keys(detections[ 0 ].expressions)){
    if (detections [ 0 ].expressions[expression] > mostProbableExpression) {
       
        mostProbableExpression = detections[0].expressions[expression];
        
        _expression = expression;

    }
}

axios.get(`http://localhost:3000/songs?mood=${_expression}`).then(response=>{
    console.log(response.data);
    setSongs(response.data.songs)

})



}

useEffect(() => {


loadModels().then(startVideo);
}, []);



return (
<div className="flex  items-start justify-between p-10   border-none">
<video className="rounded-lg object-cover w-[200px] h-[150px] border-none"
ref={videoRef}
autoPlay
muted

/>
  <button className=" bg-black rounded px-6 py-3   text-white  " onClick={ detectExpressions}>Detect Expressions</button> 
</div>
);
}