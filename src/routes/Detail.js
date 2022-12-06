import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
};
// useParams = url에 있는 값을 변환해주는 함수 (특히 변경되는 값)
export default Detail;
