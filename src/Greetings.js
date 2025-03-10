import { useEffect } from "react";

const Greeting = (props) => {
  // console.log("props: ", props);
  // props?.logUser();

  useEffect(() => {
    // component did mount
    // console.warn("[ComponentDidMount] Greeting componenti yüklendi!");
  }, []);

  useEffect(() => {
    // component did update
    // console.warn("[ComponentDidUpdate] Greeting componenti yüklendi!");
  });

  return <h1>This photo captured on: {props.date}</h1>;
};

export default Greeting;
