import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const EventCount = ({ eventId }) => {
  const dispatch = useDispatch();
  const eventCount = useSelector((store) => store.rsvpCount);

  useEffect(() => {
    dispatch({ type: 'FETCH_RSVP_COUNT', payload: eventId });
  }, []);
  return (
    <span>
      <PeopleAltOutlinedIcon
        sx={{
          verticalAlign: 'middle',
          display: 'inline-block',
          marginLeft: '95px',
          // marginRight: '5px',
        }}
      />{' '}
      {eventCount[eventId] ? eventCount[eventId].count : 0} {''}
      Going
    </span>
  );
};

export default EventCount;
