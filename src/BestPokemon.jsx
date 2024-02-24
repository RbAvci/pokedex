function BestPokemon({ abilities }) {
  return (
    <>
      <div>
        <p>“My favorite Pokemon is Squirtle”</p>
        <ul>
          {abilities.map((ability, id) => (
            <li key={id}>{ability}</li>
          ))}
        </ul>
        <img src="https://miro.medium.com/v2/resize:fit:302/1*KuSu6ZTyLAcRDwOsI9ZzZA.png"></img>
      </div>
    </>
  );
}

export default BestPokemon;
