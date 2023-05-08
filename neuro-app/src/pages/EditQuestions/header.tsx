import React from 'react'
import styles from './Body.module.css';

// import { Link } from 'react-router-dom';
interface BoxProps {
    time: number;
    point: number;
    difficulty: number;
    setTime: (time: number) => void;
    setPoint: (point: number) => void;
    setDifficulty: (difficulty: number) => void;
  }
const header: React.FC<BoxProps> = ({ time, point, difficulty, setTime, setPoint, setDifficulty }) => {
    return (
        <div className={styles.header}>
          
          <label>
            Points:
            <input className={styles.text} type="number" value={point} onChange={(e) => setPoint(parseInt(e.target.value))} />
          </label>
          <label>
            Difficulty:
            <select value={difficulty} onChange={(e) => setDifficulty(parseInt(e.target.value))}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
          <label>
            Time:
            <input type="number" value={time} onChange={(e) => setTime(parseInt(e.target.value))} />
          </label>
        </div>
      );
    };
export default header;