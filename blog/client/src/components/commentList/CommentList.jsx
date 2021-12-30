import axios from 'axios'
import React, { useEffect, useState } from 'react'


const CommentList = ( { postId } ) => {
          const [comments, setComments] = useState([])
          
          
          useEffect(() => {
                    const fetchData = async () => {
                              const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
          
                              setComments(res.data)
                    }

                    fetchData()
          }, [postId])


          return (
                    <div>
                              {
                                        comments.map(comment => (
                                                  <ul>
                                                            <li key={comment.id}> 
                                                                      {comment.content} 
                                                            </li>
                                                  </ul>
                                        ))
                              }
                    </div>
          )
}


export default CommentList
