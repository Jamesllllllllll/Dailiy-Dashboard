import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectEmotion,
  removeFromHistory,
  addToEmotionsHistory,
} from './emotionsCheckinSlice';
import emotionsArray  from './emotionsData';

import styles from './EmotionsCheckin.module.css';

//This component returns the UI for the emojis section.
export function EmotionsCheckin() {
//state variables:  
const emotionName = useSelector((state) => state.emotionsCheckin.todaysEmotion.name);
const emotionPic = useSelector((state) => state.emotionsCheckin.todaysEmotion.pic);
const latestDateStored = useSelector(state => state.emotionsCheckin.emotionsHistory.at(-1).date);

const dispatch = useDispatch();

//handleClick dispatches actions
//target is button
function handleClick(e) {
  let date = new Date();
  let today = date.getDay();
  const picName = e.target.name;
  const picSrc = e.target.src;
  console.log(picName)

  dispatch(selectEmotion({
    name: picName,
    pic: picSrc,
  }));

  if (today === latestDateStored){
    dispatch(removeFromHistory())
  }

  dispatch(addToEmotionsHistory({
    date: today,
    name: picName,
    pic: picSrc,
  }));
} 

//emojiPics is an array of emoji buttons
let emojiPics = emotionsArray.map( ({name, pic}) => {
  return (
   <li key={name}> 
    <button value={name} onClick={handleClick} className={styles.button}>
      <img alt={name} name={name} src={pic} className={styles.img} />
    </button>
   </li>
  )
})
 
   
  return (
    <>
      <div className={styles.container}>
        <div className={styles.emotionsContainer}>
          <ul className={styles.list}>
            {emojiPics}
          </ul>
            <button className={styles.openingEmoji}><img src={emotionPic} alt={emotionName}/></button>
        </div>
      </div>
     
    </>  
  );
}

  
  
