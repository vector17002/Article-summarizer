import React , {useState , useEffect} from 'react';
import { loader , tick ,  linkIcon } from '../assets';
import axios from 'axios'
const Article = () => {  
  const [fetching , setFetching] = useState(false);
  const apiKey = import.meta.env.VITE_APP_RAPID_API_KEY;
 
  const [article , setArticle] = useState({
    url : "",
    summary:""
  })
  const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {url: article.url, length: '3'},
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };
  const findSummary = async () => {
    setFetching(true);
    await axios.request(options).then((response)=> {
      setArticle({...article , summary : response.data.summary});
      setFetching(false);
    }).catch((error) => {
      console.error(error);
    });
  } 
  return (
   <section className='mt-16 w-full max-w-xl'>
     <div className='flex flex-col w-full gap-2'>
        <form className='relative flex justify-center items-center'
        onSubmit={(e)=>{
          e.preventDefault();
          findSummary();
        }}>
          <img src={linkIcon} className='absolute left-0 my-2 ml-3 w-5'/>
          <input type='url'
            placeholder='Enter your url'
            value={article.url}
            onChange={(e)=>setArticle({...article , url: e.target.value})}
            required
            className='url_input peer'
          />
          <button
          type='submit'
          className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
            <img src={tick}/>
          </button>
        </form>
     </div>
     <div className='my-10 max-w-full flex justify-center items-center'>
      {fetching ? (
        <img src={loader} alt='loading' className='w-20 h-20 object-contain'
        />
      ): 
      <div className='flex flex-col gap-3'>
          <h2 className='font-satoshi font-bold text-gray-600 text-xl'> Article  <span className='blue_gradient'>Summary</span></h2>
          <div className='summary_box'>
            <p>{article.summary}</p>
          </div>
      </div>
      }
     </div>
   </section>
  )
}

export default Article