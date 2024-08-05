import {useSearchParams} from "react-router-dom";

const PaymentSuccess = () => {

    const searchQuery = useSearchParams()[0];
    const reference = searchQuery.get("reference");

  return (
    <div className="min-h-screen bg-blue-200 flex flex-col items-center justify-center gap-5">
        <h2 className="text-3xl font-semibold">Order Successfull</h2>
        <h2 className="text-xl font-semibold">Reference No : {reference}</h2>
    </div>
  )
}

export default PaymentSuccess
