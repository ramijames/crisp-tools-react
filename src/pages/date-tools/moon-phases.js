import React, { useEffect, useState} from 'react';
import ToolHeader from '../../components/common/ToolHeader';
import BackTo from '../../components/common/BackTo';
import Button from '../../components/chrome/Button';
import style from './moon-phases.module.css';
import axios from 'axios';

const rapidApiKey = process.env.REACT_APP_RAPIDAPIKEY;

function MoonPhases() {

  const [basicMoonData, setBasicMoonData] = useState('');
  const [emojiMoonData, setEmojiMoonData] = useState('');
  const [calendarMoonData, setCalendarMoonData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      
      const basicOptions = {
        method: 'GET',
        url: 'https://moon-phase.p.rapidapi.com/basic',
        params: {format: 'html'},
        headers: {
          'x-rapidapi-key': rapidApiKey,
          'x-rapidapi-host': 'moon-phase.p.rapidapi.com'
        }
      };

      const emojiOptions = {
        method: 'GET',
        url: 'https://moon-phase.p.rapidapi.com/emoji',
        headers: {
          'x-rapidapi-key': rapidApiKey,
          'x-rapidapi-host': 'moon-phase.p.rapidapi.com'
        }
      };

      const calendarOptions = {
        method: 'GET',
        url: 'https://moon-phase.p.rapidapi.com/calendar',
        params: {format: 'html'},
        headers: {
          'x-rapidapi-key': rapidApiKey,
          'x-rapidapi-host': 'moon-phase.p.rapidapi.com'
        }
      };
      
      try {
        const basicResponse = await axios.request(basicOptions);
        setBasicMoonData(basicResponse.data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Data:", error.basicResponse.data);
          console.error("Status:", error.basicResponse.status);
          console.error("Headers:", error.basicResponse.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No basicResponse received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error:", error.message);
        }
        console.error("Config:", error.config);
      }

      try {
        const emojiResponse = await axios.request(emojiOptions);
        setEmojiMoonData(emojiResponse);
      } catch (error) {
        if (error.emojiResponse) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Data:", error.emojiResponse.data);
          console.error("Status:", error.emojiResponse.status);
          console.error("Headers:", error.emojiResponse.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No emojiResponse received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error:", error.message);
        }
        console.error("Config:", error.config);
      }

      try {
        const calendarResponse = await axios.request(calendarOptions);
        setCalendarMoonData(calendarResponse);
      } catch (error) {
        if (error.calendarResponse) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Data:", error.calendarResponse.data);
          console.error("Status:", error.calendarResponse.status);
          console.error("Headers:", error.calendarResponse.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No calendarResponse received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error:", error.message);
        }
        console.error("Config:", error.config);
      }

    };

    fetchData();
  }, []);

  return (
    <main className="CrispTool">
      <BackTo to="/date-tools">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1L2.41421 5.58579C1.63317 6.36683 1.63316 7.63316 2.41421 8.41421L7 13" stroke="black" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        Back to Date Tools
      </BackTo>
      <section className="ToolPanel">
        <div className={style.ToolTop}>
          <ToolHeader title="Moon Phases" description="Learn about the Lunar Cycle" />
        </div>
        <section className={style.LunarCycle}>
          <div className={style.currentIcon}>
            {emojiMoonData.data}
          </div>
          <div className={style.currentPhase}>
            {basicMoonData.phase_name}
          </div>
          <div className={style.upComingPhases}>
            <div>
              <h2>{basicMoonData.days_until_next_new_moon}</h2>
              <p>Days to New Moon</p>
            </div>
            <div>
              <h2>{basicMoonData.days_until_next_full_moon}</h2>
              <p>Days to Full Moon</p>
            </div>
          </div>
        </section>
        <section className={style.lunarCalendar}>
          <div dangerouslySetInnerHTML={{ __html: calendarMoonData.data }} />
        </section>
      </section>
    </main>
  );
}

export default MoonPhases;