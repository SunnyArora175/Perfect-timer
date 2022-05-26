import React,{useState, useEffect} from 'react'
import './timer.css';

const Timer=(props)=>{
  //configs
  const timers = [25*60, 5*60, 15*60]
  const themes = ["#c462fc", "#4657f2", "#e84b27"]
  const buttons = [
    { type: 1, name: 'Pomodoro' },
    { type: 2, name: 'Short Break' },
    { type: 3, name: 'Long Break' }
  ];
  //states
  const [type, setType]=useState(1);
  const [timer,setTimer]=useState(0);
  const [clock, set_clock]=useState(0);
  const [active, setActive]=useState(false);

  function format(t) {
    let x = parseInt(t)
    if (x < 10) {
      return `0${x}`;
    }
    else return x;
  }

  useEffect(()=>{
    setActive(false)
    setTimer(timers[type-1])
    props.setColor(themes[type-1])
  },[type])


  useEffect(()=>{
    if (timer > 0 && active) {
      if (clock>0) setTimer(timer-1);
      setTimeout(()=>set_clock(clock+1), 1000);
    }
    else set_clock(0);
  },[clock, active])


  return(
    <div className="timer_container">
      {buttons.map((obj, index) =>
        <button
          key={index}
          className={type==obj.type? 'activeTab': 'normalTab'}
          onClick={()=>setType(obj.type)}>
            {obj.name}
          </button>
      )}
      <div className="timer">{format(timer/60)} : {format(timer%60)}</div>
      <button
        className={active? 'stopbtn':'startbtn'}
        style={{color: themes[type-1]}}
        onClick={()=>setActive(!active)}>
          {active? 'Stop':'Start'}
      </button>
    </div>
  )
}

export default Timer;
