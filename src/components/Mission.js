import React from 'react';
import '../styles/Mission.css';

const Mission = () => {
  const missionData = [{
    id: 1,
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    status: 'Not a Member',
    decision: 'Join mission',
    member: false,
  }, {
    id: 2,
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    status: 'Active Member',
    decision: 'Leave Mission',
    member: true,
  }, {
    id: 3,
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    status: 'Not a Member',
    decision: 'Join mission',
    member: false,
  }, {
    id: 4,
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    status: 'Active Member',
    decision: 'Leave Mission',
    member: true,
  }];

  const memberBtn = {
    color: 'White',
    backgroundColor: 'red',
    fontWeight: '300',
    padding: '3%',
    borderRadius: '10%',
    border: 'none',
  };
  const ntmemberBtn = {
    color: 'White',
    backgroundColor: '#787474',
    fontWeight: '300',
    padding: '3%',
    borderRadius: '10%',
    border: 'none',
  };

  const leaveBtn = {
    color: 'red',
    backgroundColor: 'transparent',
    padding: '5%',
    border: 'solid 1px red',
  };

  const joinBtn = {
    color: '#787474',
    border: 'solid 1px #787474',
    backgroundColor: 'transparent',
    padding: '5%',
  };
  const tbstyle = { border: '1px solid #cac9c9' };
  return (
    <div className="mission-container">
      <table>
        <tbody>
          <tr>
            <th className="header" style={tbstyle}>Mission</th>
            <th className="header" style={tbstyle}>Description</th>
            <th className="header" style={tbstyle}>Status</th>
            <th className="header" style={tbstyle} aria-label="jheader" />
          </tr>
          {missionData.map((data) => {
            const value = data.member;
            return (
              <tr key={data.id}>
                <td style={tbstyle}>{data.mission_name}</td>
                <td style={tbstyle} className="description">{data.description}</td>
                <td>
                  <button style={value ? memberBtn : ntmemberBtn} aria-label="member" type="submit">{data.status}</button>
                </td>
                <td style={tbstyle}>
                  <button style={value ? leaveBtn : joinBtn} className="btndecision" aria-label="join" type="submit">
                    {' '}
                    {data.decision}
                    {' '}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
