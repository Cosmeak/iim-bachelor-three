function api() {
  const getUsers = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon/1", {
      type: "GET",
    }).then((res) => res.json());
  };

  return {
    getUsers,
  };
}

export default api();