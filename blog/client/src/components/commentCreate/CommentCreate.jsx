import axios from 'axios';
import React, { useState } from 'react'


const CommentCreate = ( { postId } ) => {
          const [content, setContent] = useState("")

          const onSubmit = async (event) => {
                    event.preventDefault();

                    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
                              content
                    })

                    setContent("")
          }


          return (
                    <div>
                              <form onSubmit={onSubmit}>
                                        <div className="form-group">
                                                  <label htmlFor="" className='my-2'>New Comment</label>

                                                  <input 
                                                            type="text" 
                                                            className="form-control my-2" 

                                                            onChange={e => setContent(e.target.value)}
                                                  />
                                        </div>

                                        <button className="btn btn-primary">Submit</button>
                              </form>
                    </div>
          )
}


export default CommentCreate
