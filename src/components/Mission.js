import React from 'react';
import '../styles/Mission.css';
import { useSelector, useDispatch } from 'react-redux';
import { reservemission, cancelmission } from '../redux/missionsSlice';

const Mission = () => {
  const { missionList } = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();

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
  const tbDesction = {
    width: '55%',
    textAlign: 'justify',
    border: '1px solid #cac9c9',
  };
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
          {missionList.map((data) => {
            const value = data.missionValue;
            return (
              <tr key={data.id}>
                <td style={tbstyle}>{data.missionName}</td>
                <td style={tbDesction} className="description">{data.missionDescription}</td>
                <td style={tbstyle}>
                  <button style={value ? memberBtn : ntmemberBtn} aria-label="member" type="submit">{data.memberShip}</button>
                </td>
                <td style={tbstyle}>
                  { !data.missionValue
                    ? (
                      <button style={value ? leaveBtn : joinBtn} className="btndecision" aria-label="join" type="submit" onClick={() => dispatch(reservemission(data.id))}>
                        {' '}
                        {data.missionStatus}
                        {' '}
                      </button>
                    ) : (
                      <button style={value ? leaveBtn : joinBtn} className="btndecision" aria-label="join" type="submit" onClick={() => dispatch(cancelmission(data.id))}>
                        {' '}
                        {data.missionStatus}
                        {' '}
                      </button>
                    )}
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
