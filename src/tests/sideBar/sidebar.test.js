import { FOOTBALL_ID } from 'config/sport';
import { FRONTEND_API } from 'config/api';
import api from 'API/rest';
import { getAllEventBySport } from './bodies';

describe('Get events', () => {
  test('By sport_id', () => {
    const sportID = FOOTBALL_ID;

    return api.post({
      url: FRONTEND_API,
      data: getAllEventBySport(sportID),
    })
      .then((data) => {
        expect(Array.isArray(data.result)).toBe(true);
        if (data.result.length) {
          const [event] = data.result;
          expect(event.sport_id).toBe(sportID);
        }
      });
  });
});
