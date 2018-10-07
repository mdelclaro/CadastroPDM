import {
  TRACK_ADDED,
  TRACK_UPDATED,
  TRACK_DELETED
} from '../actions/types';

const INITIAL_STATE = {
  tracks: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRACK_ADDED:
      return {
        ...state,
        tracks: [...state.tracks, action.payload]
      };
    case TRACK_UPDATED: {
      const { id, title, artist, album, genre } = action.payload;
      
      return {
        ...state,
        tracks: state.tracks.map(track => {
          if (track.id === id) {
            return {
              ...track,
              title,
              artist,
              album,
              genre
            };
          }
          return track;
        })
      };
    }
    case TRACK_DELETED:
      return {
        ...state,
        tracks: state.tracks.filter(track => {
          return track.id !== action.payload;
        })
      };
    default:
      return state;
  }
};
