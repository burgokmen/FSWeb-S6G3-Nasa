import React from "react";

export default function Bicomponent(props) {
  const { data, setDate, currentDate } = props;
  function dataChangeHandler(e) {
    console.log(e.target.value);
    setDate(e.target.value);
  }
  if (!data) return <h3>Loading...</h3>;
  return (
    <div>
      <label htmlFor="apodDate">Change APOD Date:</label>

      <input onChange={dataChangeHandler} type="date" name="date" id="date" />

      <p>{data.title}</p>
      {data.media_type === "image" && (
        <img src={data.hdurl} alt={data.title} width="500" height="600" />
      )}

      {data.media_type === "video" && (
        <iframe width="420" height="315" src={data.url}></iframe>
      )}
    </div>
  );
}
