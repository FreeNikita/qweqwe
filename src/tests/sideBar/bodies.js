export const getAllEventBySport = (id) => ({
  id: 1,
  jsonrpc: '2.0',
  method: 'frontend/category/get',
  params: {
    by: {
      lang: 'hr',
      service_id: 0,
      sport_id: {
        $in: [id],
      },
      tz_diff: 7200,
    },
  },
});
