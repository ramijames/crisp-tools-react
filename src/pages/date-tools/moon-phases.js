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

      Promise.all([
        axios.request(basicOptions),
        axios.request(emojiOptions),
        axios.request(calendarOptions)
      ]).then((responses) => {
        setBasicMoonData(responses[0].data);
        setEmojiMoonData(responses[1]);
        setCalendarMoonData(responses[2]);
      }).catch((error) => {

        console.log("429 error is acceptable for this use-case since I'm not paying for the PRO version of this API, so disregard!")
        // Handle errors here
        // console.error("Error fetching moon data:", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Data:", error.response.data);
          console.error("Status:", error.response.status);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error:", error.message);
        }
        console.error("Config:", error.config);
      });

    };

    fetchData();
  }, []);

  return (
    <main className="CrispTool hasBackTo">
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