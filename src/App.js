import './App.css';
import MovieCard from './components/Movie';
// import Modal from './components/Modal';

const movies = [
  {title: "Avengers", genre: "Action", year: "2012", img: "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures." },
  {title: "Avengers: Infinity War", genre: "Action", year: "2018", img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Endgame", genre: "Action", year: "2019", img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Age of Luton", genre: "Action", year: "2015", img: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Age of Luton is a 2015 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Captain Marvel", genre: "Action", year: "2019", img: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Captain Marvel is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."}, 
  {title: "Thor", genre: "Action", year: "2011", img: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Thor is a 2011 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Thor: Ragnarok", genre: "Action", year: "2017", img: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Thor: Ragnarok is a 2017 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Ant Man", genre:"Action", year:"2018" ,img: "https://resizing.flixster.com/f6A4-2Dk3nff7zNGJYi17g3CXTI=/fit-in/180x240/v2/https://resizing.flixster.com/ORJjIqDWZCl2V4KT1jfLNUPD0oo=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzkyOTFlZTI0LWVlYjAtNGU5Ni1iZWY1LWQ3YjI5NWNmN2UzMS53ZWJw"},
  {title: "Captain Marvel", genre:"Sci-fi", year:"2019" ,img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1bDkDLq-_bteASakhnC1XYwlkErFuqcof7KMhFpRwVhCTh1Vo"},
  {title: "The Gray Man", genre:"Action", year:"2022" ,img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTCR9FSMDFVM4V_l6fcJRssT-oPvAyDpjqAxZWYTyySqKh7RgLL"},
  {title: "Tenet", genre:"Sci-fi", year:"2020" ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4o4eBZdZWCR0iNFjiu1p4BKAIwIOkm_tZr3A-WUu4IAAcrq57"},
  {title: "Moonfall", genre:"Sci-fi", year:"2022" ,img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS7C2bzVPvk-gzYLDuz3Yvo0UjMZ5R6C02G7R2s9NFg0mWU4wpo"},
  {title: "Doctor Strange in the Multiverse of Madness", genre:"Sci-fi", year:"2022" ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5IuxfEt-WmUIrpJldszdRJFfTubSEeQVMVNuv63Z0PNfvbWV"},
  {title: "John Wick Chapter 3: Parabellum", genre:"Action", year:"2019" ,img: "https://themoviespoiler.com/wp-content/uploads/2019/05/john_wick_chapter_three_ver26_xlg.jpg"},
  {title: "John Wick: Chapter 4", genre:"Action", year:"2023" ,img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56c72e90-7908-4970-8e1b-b5b7098f4fda/df4gi93-bb27d107-8b1f-4dec-97f1-815424419af6.png/v1/fill/w_1280,h_1811,q_80,strp/john_wick_4___poster_v1_by_pyramid3_df4gi93-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzU2YzcyZTkwLTc5MDgtNDk3MC04ZTFiLWI1YjcwOThmNGZkYVwvZGY0Z2k5My1iYjI3ZDEwNy04YjFmLTRkZWMtOTdmMS04MTU0MjQ0MTlhZjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xsATywrHQvyQFggEG8sGHffq7CApdMWZn7FJ9C_CgEA"},
  {title: "The Matrix Resurrections", genre:"Sci-fi", year:"2021" ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjE4eApjpFWlpAdiC_aFG2FkfvimiGW0TK4mB-hc_T4Uitj9J"},
  {title: "The Irishman", genre:"Crime", year:"2019" ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0J2GpiuJL2t7UGOVyt5WxCSdm3S8DpFJ4gYRup2yO1TWM3HM"},
  {title: "Joker", genre:"Thriller", year:"2019" ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTcvL4wc0fbBjm1h5CRiFEZ2TnNKtu8KtoPSxTsj6mkedHeWl"},
  {title: "Tesla", genre:"Drama", year:"2020" ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QNBZuvEAXZTAebOcTKZ2U5M-0g0V1O0c7cohlVIiYkhQZTGF"},
  {title: "Away", genre:"Drama", year:"2020" ,img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8F19Ovfd8B1E3k3IjSwX5TOxL-SpeiNXaKeNtjyTmu01Gf7u5"},
  {title: "Loki", genre:"Superhero", year:"2021" ,img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFCumqCVMfau0D5190VoNjQnaibQoc-ksyHQhYA5uiboLYCglm"},
  {title: "Sightless", genre:"Thriller", year:"2020" ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKoNcZ-qNfp9mGpxBPci0-iravAmwiGWghj6QWi7wW1QMHew6H"},
  {title: "A Whisker Away", genre:"Fantasy/Romance ", year:"2020" ,img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZNNATSKWeg0SqETnYeXHhNsc4D1sE4Hilz0F6jobGLra8gQWE"},
  {title: "Weathering with You", genre:"Fantasy/Romance ", year:"2019" ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSta2mXOxPyDZXdpURdbwrhuplK2d8CoU5Wo9ZY9d_GZsgaeOmZ"},
  {title: "Your Name", genre:"Romance/fantasy", year:"2016" ,img: "https://contentserver.com.au/assets/525768_gnau_yourname_p_v7_aa.jpg"},
  {title: "Bubble", genre:"Anime/Animation ", year:"2022" ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbq1Qc0uRvpW1rx3RRTzMKJCnIrHmnPFav0IUf8L6VWV9RaDHV"},
  {title: "5 Centimeters per Second", genre:"Romance/Drama", year:"2007" ,img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7NjLJAQIXOGdS0SP9pQUu6SkRo3CsJPsPKb4NTxZY8Ib90WK0"},
  {title: "A Silent Voice", genre:"Drama\Romance", year:"2016" ,img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJrlYXvqlm1bAFMMfjhlX970K4B0z2AJv66KKb1Y9gW-4eml2X"},
  {title: "1917", genre:"War/Drama", year:"2019" ,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQedT5I8H5M81ZKk5q887MnDxH8aWWt9h26XThN1vtkMkS2bF"},
  {title: "Stand by Me Doraemon 2", genre:"Sci-fi", year:"2020" ,img: "https://upload.wikimedia.org/wikipedia/en/3/3c/Stand_by_Me_Doraemon_2.jpg"}
 ]
 


function App() {
  return (

    <div className='movie-container'>
      
    {
      movies.map((movie)=>{
        return <MovieCard title={movie.title} img={movie.img} year={movie.year} genere={movie.genre} desc={movie.description}  />
      })
   }


         

         {/* <Modal/> */}
</div>


  );
}

export default App;
