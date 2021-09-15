import fetch from 'node-fetch';

const usersEndpoint = 'https://reqres.in/api/users';

const getUsers = async () => {
  try {
    let res = await fetch(usersEndpoint);

    if (!res.ok) {
      throw new Error(`Whoops, we\'ve got an error. HTTP status: ${res.status}`);
    }

    let data = await res.json();

    // Checking if response from the endpoint is correct might be an overkill, so I'm dropping it.
    // ---
    // let users = {};
    // if ('data' in data) { // A data prop in json data fetched from the api
    //   users =
    // }

    return data.data.reduce((acc, cur) => ({ ...acc, [cur.email]: `${cur.first_name} ${cur.last_name}` }), {});
  } catch (err) {
    console.error(err.message);
  }
};

(async () => {
  console.log(await getUsers());
})();
