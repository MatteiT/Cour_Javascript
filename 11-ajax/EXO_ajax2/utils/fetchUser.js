const url = 'https://randomuser.me/api/';

const fetchPerson = async () => {
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);

    // displayItems(data);
  } catch (error) {
    console.log(error);
  }
};

export default fetchPerson;
