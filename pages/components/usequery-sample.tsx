import { ListingName } from "../apis/listing-names";
import Link from "next/link";

function UseQuerySample() {
  const onSuccess = (data: any) => {
    console.log("success",data);
  };

  const onError = (error: any) => {
    console.log("error",error);
  };

  const { isLoading, data, isError, error, refetch } = ListingName(
    onSuccess,
    onError
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      use query sample
      {data.map((heroNames: any) => {
        return (
            <div>
              <Link href={`/components/detail-page/${heroNames.id}`}>
                {heroNames.name}
              </Link>
            </div>
        )
      })}
    </div>
  );
}

export default UseQuerySample;
