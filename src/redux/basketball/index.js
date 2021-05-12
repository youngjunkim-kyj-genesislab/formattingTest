export const PLUS_SCORE = 'plus/score';
export const MINUS_SCORE = 'minus/score';
export const PLUS_FOUL = 'plus/foul';
export const MINUS_FOUL = 'minus/foul';
export const SET_MAIN_TIMER = 'set/main/timer';
export const SET_ATTACK_TIMER = 'set/attack/timer';
export const SET_TEAM_NAME = 'set/team/name';
export const RESET_TEAM_NAME = 'reset/team/name';
export const RESET = 'reset';
export const SET_TOTAL_START = 'set/total/start';
export const START_ATTACK_TIME = 'start/attack/time';
export const STOP_ATTACK_TIME = 'stop/attack/time';
const SET_ATTACK_TIMER_EXECUTE = 'set/attack/timer/execute';
const SET_MAIN_TIMER_EXECUTE = 'set/main/timer/execute';
const SET_MAIN_STOP = 'set/main/stop';
const SET_ATTACK_STOP = 'set/attack/stop';

export const plusScore = (team, point) => {
  return {
    type: PLUS_SCORE,
    team: team,
    point: point,
  };
};

export const setMainStop = () => {
  return {
    type: SET_MAIN_STOP,
  };
};

export const setAttackStop = () => {
  return {
    type: SET_ATTACK_STOP,
  };
};

export const plusFoul = (team, count) => {
  return {
    type: PLUS_FOUL,
    team: team,
    foul: count,
  };
};

export const setTeamNameToRedux = ({ teamA, teamB }) => {
  return {
    type: SET_TEAM_NAME,
    names: { teamA, teamB },
  };
};

export const setTeamNameResetToRedux = () => {
  return {
    type: RESET_TEAM_NAME,
  };
};

export const setResetToRedux = () => {
  return {
    type: RESET,
  };
};

export const setStartToRedux = () => {
  return {
    type: SET_TOTAL_START,
  };
};

export const setAttackTime = (time) => {
  return {
    type: SET_ATTACK_TIMER,
    attackTime: time,
  };
};

export const setStartAttackTime = () => {
  return {
    type: START_ATTACK_TIME,
  };
};

export const setStopAttackTime = () => {
  return {
    type: STOP_ATTACK_TIME,
  };
};

export const setAttackTimerExecute = (boolean) => {
  return {
    type: SET_ATTACK_TIMER_EXECUTE,
    status: boolean,
  };
};
export const setMainTimerExecute = (boolean) => {
  return {
    type: SET_MAIN_TIMER_EXECUTE,
    status: boolean,
  };
};

const initialState = {
  teamA: {
    name: '',
    score: 0,
    foul: 0,
  },
  teamB: {
    name: '',
    score: 0,
    foul: 0,
  },
  attackTime: 24,
  isAttackTimerExecute: false,
  mainTime: 70,
  isMainTimerExecute: false,
};

const basketball = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_SCORE: {
      if (state[action.team].score < 1 && action.point < 0) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          [action.team]: { ...state[action.team], score: state[action.team].score + action.point },
        };
      }
    }
    case SET_MAIN_STOP: {
      return {
        ...state,
        mainTime: state.mainTime,
        isMainTimerExecute: false,
      };
    }
    case SET_ATTACK_STOP: {
      return {
        ...state,
        attackTime: state.attackTime,
        isAttackTimerExecute: false,
      };
    }

    case SET_ATTACK_TIMER: {
      return {
        ...state,
        attackTime: action.attackTime,
      };
    }
    case PLUS_FOUL: {
      if (state[action.team].foul >= 5 && action.foul > 0) {
        return { ...state };
      } else {
        return {
          ...state,
          [action.team]: { ...state[action.team], foul: state[action.team].foul + action.foul },
        };
      }
    }
    case SET_ATTACK_TIMER_EXECUTE: {
      return { ...state, isAttackTimerExecute: action.status };
    }
    case SET_MAIN_TIMER_EXECUTE: {
      return { ...state, isMainTimerExecute: action.status };
    }

    case SET_TEAM_NAME: {
      return {
        ...state,
        teamA: { ...state.teamA, name: action.names.teamA },
        teamB: { ...state.teamB, name: action.names.teamB },
      };
    }
    case RESET_TEAM_NAME: {
      return {
        ...state,
        teamA: { name: '', score: state.teamA.score, foul: state.teamA.foul },
        teamB: { name: '', score: state.teamB.score, foul: state.teamB.foul },
      };
    }
    case SET_TOTAL_START: {
      return {
        ...state,
        mainTime: state.mainTime - 0.1,
      };
    }
    case START_ATTACK_TIME: {
      return {
        ...state,
        attackTime: state.attackTime - 0.1,
      };
    }
    case RESET: {
      return initialState;
    }
    default:
      return state;
  }
};

export default basketball;
