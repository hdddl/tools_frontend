import React from "react";
import "./index.css"

class LinkProxyDownloader extends React.Component{
    render(){
        return(
            <div>
                <div className="flex justify-center mt-40">
                    <form method="get" action="linkProxyDownloader/proxy">
                        <label htmlFor="link"
                               className="form-label block text-center text-xl font-bold mb-2 text-gray-700">Link Proxy
                            Downloader
                        </label>
                        <input type="text" id="link" name="link"
                               className="form-control
                                  grow
                                  w-96
                                  mt-6
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        </input>
                        <button type="submit"
                                className="inline-block ml-3 px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Go
                        </button>
                    </form>
                </div>
            </div>
    )}
}

export default LinkProxyDownloader