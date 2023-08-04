import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  border-style: double;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

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

      <Title>
        <p>
          {" "}
          <Wrapper>{data.title}</Wrapper>
        </p>
      </Title>

      {data.media_type === "image" && (
        <img src={data.hdurl} alt={data.title} width="500" height="600" />
      )}

      {data.media_type === "video" && (
        <iframe width="420" height="315" src={data.url}></iframe>
      )}
    </div>
  );
}
