import '../assets/css/Rank.css'
import { useState } from 'react';

function Rank() {

  const month = ['전체', '3개월', '6개월', '1년'];
  const [focus, setFocus] = useState(month[0]);

  return (
    <div className="rank-top">
      <div className="content">
        <div className="location-left">
          <select>
            <option value="">시·도 선택</option>
          </select>
        </div>
        <div className="location-right">
          <select>
            <option value="">시·군·구 선택</option>
          </select>
        </div>
        <div className="month">
          {month.map((mnth, index) => (
            <button className={"month-button" + (focus === mnth ? "-active" : "")}
              onClick={() => setFocus(mnth)} key={index}>
              {mnth}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rank;