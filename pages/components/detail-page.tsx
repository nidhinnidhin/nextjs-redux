import { useParams } from "react-router-dom";
import { useDetail } from "../apis/detail-name";

const DetailPage = () => {
  const { id } = useParams();

  const { isLoading, isError, data, error } = useDetail(id);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data?.data.name}
    </div>
  );
};

export default DetailPage;
