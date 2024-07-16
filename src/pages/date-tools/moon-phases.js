import React, { useEffect, useState} from 'react';
import ToolHeader from '../../components/common/ToolHeader';
import BackTo from '../../components/common/BackTo';
import Button from '../../components/chrome/Button';
import style from './moon-phases.module.css';
import axios from 'axios';

const rapidApiKey = process.env.REACT_APP_RAPIDAPIKEY;

function MoonPhases() {

  const [moonData, setMoonData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://moon-phase.p.rapidapi.com/plain-text',
        headers: {
          'x-rapidapi-key': rapidApiKey,
          'x-rapidapi-host': 'moon-phase.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setMoonData(response.data);
        console.log(response.data);
      } catch (error) {
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
        <section>
          {moonData}
        </section>
      </section>
    </main>
  );
}

export default MoonPhases;