import { useState } from 'react'
import PlainLayout from '../components/layout/plain'

const tgUrl = "https://api.thoughtglows.com/tgapi/v1/products/pweb/order"

const getCookie = (key) => {
  let arr = document.cookie.split(';');
  for (let item of arr) {
    if (item.trim().startsWith(key)) {
      let parts = item.split('=');
      if (parts.length > 1) {
        return parts[1].trim();
      }
    }
  }
  return '';
}

function Home() {
  const [waiting, setWaiting] = useState(false);

  const btnText = waiting? "Wait..": "Pay ₹9";

  const onOrderCreated = (data, form) => {
    var options = {
      "key": data.rz_key,
      "amount": data.price,
      "currency": "INR",
      "name": "Thought Glow",
      "description": data.product_name,
      "image": "https://checkout.thoughtglow.com/images/thoughtglow-512.png",
      "order_id": data.order_id,
      "handler": function (response){
        window.location.replace('https://www.thoughtglow.com/thanks-for-registering/');
      },
      "prefill": {
        "name": form.name,
        "email": form.email,
        "contact": form.phone
      }
    };
    let rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      console.log(response);
    })
    rzp1.open();
    setWaiting(false);
  }

  const onOrderCreationFailed = () => {
    setWaiting(false);
    alert("There was some error. Please try again");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (waiting) {
      return
    }
    setWaiting(true);
    let input = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      fbc: getCookie('_fbc'),
      fbp: getCookie('_fbp')
    }
    if (!input.name || !input.email || !input.phone) {
      alert('Please set the fields');
      setWaiting(false);
      return;
    }

    fetch(tgUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    }).then((response) => {
      if (response.status == 200) {
        response.json().then(data => {
          onOrderCreated(data, input);
        }).catch(() => {
          setWaiting(false);
        });
      } else {
        onOrderCreationFailed();
      }
    }).catch(() => {
      onOrderCreationFailed();
    })
  }

  return <>
    <div className="flex justify-center">
      <form className="max-w-[42rem] w-full mt-4 p-4 md:p-6 lg:p-10 bg-white rounded shadow-xl flex flex-col" onSubmit={handleSubmit}>
        <div className="mt-2 mb-3 flex flex-row items-center">
          <a href="https://www.thoughtglow.com/webinar/"><img className="w-16 h-16" src="/images/thoughtglow-512.png"/></a>
          <span className="ml-2 text-2xl">Thought Glow</span>
        </div>
        <p className="text-gray-800 text-lg mb-1">Registration: Programming Career Live Session</p>
        <p className="text-xs mb-4 text-gray-400">Please provide valid email and phone (10 digit) so that we send the meeting details</p>
        <div className="">
          <label className="block text-sm text-gray-00" htmlFor="name">Name</label>
          <input className="w-full px-2 py-1 text-gray-700 border-2 rounded" id="name" name="name" type="text" required placeholder="Your Name" aria-label="Name" />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-gray-600" htmlFor="email">Email</label>
          <input className="w-full px-2  py-1 text-gray-700 border-2 rounded" id="email" name="email" type="email" required placeholder="Your Email" aria-label="Email" />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-gray-600" htmlFor="phone">Mobile</label>
          <input className="w-full px-2  py-1 text-gray-700 border-2 rounded" id="phone" name="phone" type="tel" required placeholder="Your Mobile Number" pattern="[0-9]{10}" aria-label="Phone" />
        </div>
        <div className="mt-6">
          <button className="px-4 py-1 text-white text-lg bg-sky-500 hover:bg-sky-600 tracking-wider rounded" type="submit">{btnText}</button>
        </div>
      </form>
    </div>
  </>
}

Home.layout = PlainLayout;
export default Home;