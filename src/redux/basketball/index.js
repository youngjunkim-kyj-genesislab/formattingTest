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

export const plusScore = (team, point) => {
  return {
    type: PLUS_SCORE,
    team: team,
    point: point,
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
  mainTime: 70,
};

const basketball = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_SCORE: {
      return {
        ...state,
      };
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
    case RESET: {
      return initialState;
    }
    default:
      return state;
  }
};

export default basketball;
