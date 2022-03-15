window.addEventListener("DOMContentLoaded", () => {
  cargarPokemones("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0");
});

const cargarPokemones = async (enlacePokemon) => {
  const respuesta = await fetch(enlacePokemon);
  const datos = await respuesta.json();

  mostrarPokemon(datos.results);
};

const mostrarPokemon = (pokemones) => {
  pokemones.map(async (pokemon) => {
    const respuesta = await fetch(pokemon.url);
    const datos = await respuesta.json();
    console.log(datos.name);

    let HTML = `
    <figure class="tarjeta-pokemon">
        <img class="imagen-pokemon" src="${datos.sprites.front_default}" alt="Imagen de ${datos.name}">
        <figcaption class="texto-pokemon">${datos.name}</figcaption>
    </figure>`;

    document.querySelector("#contenedor").innerHTML += HTML;
  });
};
