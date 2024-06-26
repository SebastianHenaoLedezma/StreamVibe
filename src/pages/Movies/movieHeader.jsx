const MovieHeader = ({img}) => {
  return (

    <div className="h-full">
      <div className="h-[60vh] w-[100%]">
        <img src={img} alt="Logo" className="h-full max-h-full"/>
      </div>
    </div>
  )
}

export default MovieHeader