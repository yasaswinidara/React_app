import React from 'react'
import videos from'../../models/videoData.json'
function Video() {
    fetch("../../models/videoData.json")
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.error("Problem with fetching data!!",error))
    return(
        <div>
            <div className="container">
                <div className=" row">
                    {
                        videos.map((video,key))=>(
                            
                        )
                    }
                </div>
            </div>
        </div>
    )
}