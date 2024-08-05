import axios from "axios"
import Item from "./Item"

const Home = () => {

    const handleSubmit = async (amount) => {
        const {data : {key}} = await axios.get("/getkey");
        const {data} = await axios.post("/checkout", {amount});
        console.log(data);
        console.log(key);
        
        const options = {
            key,
            amount: data.amount,
            currency: data.currency,
            name: 'Pratham Narwade',
            description: 'Test Transaction',
            order_id: data.id,
            callback_url: "http://localhost:4000/api/paymentVerification",
            prefill: {
              name: 'Pratham Narwade',
              email: 'pratham_email@example.com',
              contact: '9999999999'
            },
            notes: {
              'address': 'Nanded, Maharashtra'
            },
            theme: {
              'color': '#3399cc'
            }
          };
          const razor = new window.Razorpay(options);
          razor.open();
    }

    return (
        <div className="min-h-screen bg-blue-100 grid grid-cols-4 gap-5 pt-10 px-10">
            <Item img="https://gumlet.assettype.com/TNIE%2Fimport%2F2024%2F01%2F09%2Foriginal%2FBest_Laptop_Brands_in_India.jpg?w=1200&auto=format%2Ccompress&fit=max" handleSubmit={handleSubmit} amount={5000}/>
            <Item img="https://m.economictimes.com/thumb/msid-98897778,width-1200,height-1200,resizemode-4,imgsize-35708/6-latest-mobile-phones-with-12gb-ram-in-india.jpg" handleSubmit={handleSubmit} amount={3000} />
        </div>
    )
}

export default Home
