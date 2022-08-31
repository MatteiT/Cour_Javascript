const url = 'https://randomuser.me/api/';

export default async () => {
  try {
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);

    const person = data.results[0];
    const { email, phone } = person;
    const { thumbnail } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;

    const {
      street: { number, name },
    } = person.location;

    return {
      email,
      phone,
      thumbnail,
      password,
      name: `${first} ${last}`,
      age,
      street: `${number} ${name}`,
    };
  } catch (error) {
    console.log(error);
  }
};
