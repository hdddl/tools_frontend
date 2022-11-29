import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import Copybook from "./copyBook.jsx";
import LinkProxyDownloader from "./linkProxyDownloader.jsx";
import './index.css'

// 网站列表
class Sites extends React.Component{

    sitesData = [
        {title: "Link Proxy Downloader", url: "/linkProxyDownloader"},
        {title: "Copybook Generate", url: "/copyBook"},
        {title: "Encryption Message", url: "/encryptionMessage"}
    ]

    render(){
        return (
            <div className="flex justify-center flex-wrap gap-2 mt-10">
                {
                    this.sitesData.map((site) =>
                    <button
                        className="w-1/5 h-10 rounded-lg text-white bg-blue-300 hover:bg-blue-400"
                        key={site.title}
                    >
                        <Link to={site.url}>{site.title}</Link>
                    </button>)
                }
            </div>
        )
    }
}

class MainPage extends React.Component{
    render(){
        return (
            <div>
                <h1 className="text-center text-2xl text-black mt-5">Web Laboratory</h1>
                <Sites></Sites>
            </div>
        )
    }
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "copyBook",
        element: <Copybook/>
    },
    {
        path: "linkProxyDownloader",
        element: <LinkProxyDownloader/>
    }]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
