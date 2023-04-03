import React, {useEffect,useState} from "react";
import Newsitem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News =(props)=> {
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  ////*****class component part***** 

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //   }
    
  const updateNews = async ()=> {
    props.setprogress(10);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9645443c76cf4f6da0b0d0859295e845&page=${page}&pageSize=${props.pageSize}`;
      // this.setState({ loading: true });
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);

      //*****class component part*****

      // this.setState({
      //   articles: data.articles,
      //   totalResults: data.totalResults,
      //   loading: false,
      // });
    } catch (e) {
      console.log("something is not working");
    }
    props.setprogress(100);
  }

  useEffect(() => {
  document.title = `${capitalizeFirstLetter(props.category)} - NewsZone`
    updateNews();
  }, [])
  
//*****class component part*****

  // async componentDidMount() {
  //   this.updateNews();
  // }

  const handlepreviousclick = async () => {
    setPage(page-1);
    updateNews();
  };

  const handlenextclick = async () => {
    setPage(page+1);
    updateNews();
  };

    return (
      <div className="container my-3">
        <div className="text-center my-6 mx-6" style={{ margin: "27px 17px" , marginTop: "90px"}}>
          <h1>NewsZone - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        </div>
        {loading && <Spinner />}
        <div className="row">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  ></Newsitem>
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-4">
          <button
            type="button"
            disabled={page <= 1}
            className="btn btn-dark"
            onClick={handlepreviousclick}
          >
            &larr; previous
          </button>
          <button
            type="button"
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            className="btn btn-dark"
            onClick={handlenextclick}
          >
            next &rarr;
          </button>
        </div>
      </div>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;





