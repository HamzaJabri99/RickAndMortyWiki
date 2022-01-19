import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import Episode from "../components/Filters/Category/Episode_Location";

const Episodes = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let promise = await Promise.all(
        data.characters.map((item) => {
          return fetch(item).then((res) => res.json());
        })
      );
      setResults(promise);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center my-4">
          Episode :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <Episode total={51} name="Episode" setId={setId} />
        </div>

        <div className="col-8">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
