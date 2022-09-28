import DefaultLayout from "../../Layout/DefaultLayout";

import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import './BlogDetails.css'

import axios from 'axios';

const BlogDetails = () => {
    const { uid } = useParams()
    const [post, setPost] = useState({})
    let ignore = false
    useEffect(() => {
        const Post = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=7b2908ed854c4cb4ae883a95cf0c2b1b`);
                setPost(response.data.articles[uid])
                console.log(response.data.articles[uid])
            } catch (error) {
                console.log(error);
            }
        }
        if (!ignore) Post()
        return () => {
            ignore = true
        }
    }, [])


    return (
        <DefaultLayout>
            <main className="w-100 d-flex flex-column p-5 gap-4 pt-2 h-auto body bg-light">
                <div>
                    <div className="row">
                        <div className="col-1">
                            <div className="w-100  side  stick rounded-1"></div>

                        </div>
                        <div className="col-lg-7 ">

                            {

                                <div className="card mb-3 rounded-1">
                                    <img src={post.urlToImage} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <span><strong className="fw-semi-bold text-secondary">Author:</strong> <span>{post.author}</span></span>
                                        <h2 className="card-title fs-1 fw-bolder">{post.title}</h2>
                                        <p className="card-text">{post.content}</p>
                                        <a href="">{post.url}</a>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                                        <div>
                                            <textarea className="form-control rounded-1" placeholder="Enter your comment " >
                                            </textarea>
                                            <div className="w-100 d-flex justify-content-end mt-2"><button className="btn btn-danger rounded-1">Submit</button></div>
                                        </div>
                                    </div>

                                </div>


                            }
                        </div>
                        <div className="col-4 ">
                            <div className="d-flex  w-100 border border-1 rounded-2 bg-white flex-column stick">
                                <div className="w-100 bg-dark rounded-top" style={{ height: "1.5rem" }}></div>
                                <div className="p-2 w-100 h-auto d-flex flex-column gap-3">
                                    <div className="d-flex gap-4 align-items-center w-100">
                                        <span className="user-circle rounded-circle  bg-dark "><img src="" alt="" /></span>
                                        <strong className="fs-5">{post.author}</strong>
                                    </div>

                                    <button className="btn btn-outline-danger btn-lg">Follow +</button>
                                    <small>Info:</small>
                                    <span className="text-muted fs-4">Software Engineer </span>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </DefaultLayout>
    );
}

export default BlogDetails;