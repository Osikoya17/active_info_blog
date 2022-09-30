import DefaultLayout from "../../Layout/DefaultLayout";
import Header from "./Header";
import './Homepage.css'
import Category from "./Category";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
const Homepage = () => {
    const [news, setNews] = useState([])
    const [trend, setTrend] = useState([])
    const [loading, setLoading] = useState(true)

    let isMounted = true;
    useEffect(() => {
        async function Fetch() {
            try {
                const response = await Promise.all([
                    axios.get('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=7b2908ed854c4cb4ae883a95cf0c2b1b'),
                    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7b2908ed854c4cb4ae883a95cf0c2b1b'),
                    axios.get('https://active-info.onrender.com/blog-post'),
                ])
                const first = await response[0].data.articles;
                const second = await response[1].data.articles;
                const third = await response[2].data;
                setNews(first)
                setTrend(second)
                console.log(third);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        if (isMounted) Fetch()
        return () => {
            isMounted = false
        }


    }, [])
    return (

        <DefaultLayout>

            <main className="w-100 d-flex flex-column p-4 gap-4 pt-4 h-auto bg-light">
                <Header />
                <div>
                    <div className="row px-2">
                        <div className="col-2  pt-2 category-cont">
                            <Category />

                        </div>
                        <div className="col-lg-7  pt-2">
                            <div className="w-100 shadow-sm p-1 px-2 bg-dark mb-2 rounded-1"><strong className="fs-5 text-white">Top Stories</strong></div>
                            {news.map((value, index) =>
                                <div className="card mb-3 w-100 shadow-sm" key={index}>
                                    <div className="row g-0">
                                        <div className="col-lg-4" style={{ height: "14rem" }}>
                                            <img src={value.urlToImage} className="img-fluid rounded-start w-100  h-100" alt="..." />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="card-body">
                                                <span><strong className="fw-semi-bold text-secondary">Author:</strong> <span>{value.author}</span></span>
                                                <div><strong className="card-text">{value.title}</strong></div>
                                                <p className="card-text text-truncate">{value.content}</p>
                                                <p className="card-text"><small className="text-muted">Published: {value.publishedAt}</small></p>
                                                <Link to={`./details${index}`} className="btn btn-sm btn-danger">See Details</Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-3  pt-2 popular-cont">
                            <div className="d-flex flex-column">
                                <div className="w-100 shadow-sm p-1 px-2  bg-dark mb-2 rounded-1 "><strong className="fs-5  text-white">Related Articles</strong></div>
                                <div className="d-flex  flex-column gap-3">
                                    <div className="d-flex  flex-column gap-2 p-2">
                                        {
                                            trend.map((data, index) =>
                                                <div className="w-100 d-flex   gap-2 align-items-center" key={index}>

                                                    <a href="" className="popular text-truncate trend">{data.title} </a>

                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </DefaultLayout>                               
    );
}

export default Homepage;