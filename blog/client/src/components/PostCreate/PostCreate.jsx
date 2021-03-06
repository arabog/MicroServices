import React, { useState } from 'react'
import axios from "axios"


const PostCreate = () => { 
          const [title, setTitle] = useState("")

          const onSubmit = async (e) => {
                    e.preventDefault()

                    await axios.post("http://localhost:4000/posts", {
                              title
                    })

                    setTitle("")
          }


          return (
                    <div>
                              <form className='mt-3' onSubmit={onSubmit}>

                                        <div className="form-group">
                                                  <label>Title</label>

                                                  <input 
                                                            type="text" 
                                                            value={title}
                                                            onChange={e => setTitle(e.target.value)}
                                                            className="form-control my-3" 
                                                  />
                                        </div>

                                        <button className="btn btn-primary">Submit</button>
                              
                              </form>
                              
                    </div>
          )
}


export default PostCreate
