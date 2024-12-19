import './App.css'
import Card from './components/Card'

function App() {
  const Users = [
    {
      username: "Delba",
      aboutUs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
      avatarUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
      username: "Alex",
      aboutUs: "Passionate about technology and design. Always curious, always learning.",
      avatarUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
      username: "Sophia",
      aboutUs: "Loves exploring the great outdoors and capturing moments through photography.",
      avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
      username: "Michael",
      aboutUs: "Software developer with a knack for creating elegant solutions to complex problems.",
      avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
      username: "Emma",
      aboutUs: "Coffee lover and avid reader. Always seeking inspiration and new ideas.",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGFuZCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    }
];
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
     <Card user={Users[0]} btnText="click me" />
     <Card user={Users[1]} btnText="visit me" />
     <Card user={Users[2]} btnText="view profile" />
     <Card user={Users[3]} />
     <Card user={Users[4]} />
    </>
  )
}

export default App
