const ReviewsAuthore = ({name, dateAdded, images}) => {

  const day = new Date(dateAdded).getDate();
  const month = new Date(dateAdded).getMonth();
  const year = new Date(dateAdded).getFullYear();

  return <div className='pt-[15px] border-t border-solid border-[#484848]'>
    <h3 className='mb-[17px]'>{name}</h3>
    <p className='mb-[15px]'>Опубліковано: {day}.{month < 10 ? '0' + month : month}.{year}</p>

<div className='flex items-center gap-[15px]'>
{images?.map(item => {
      return <img
      src={item}
      alt="Review img"
      width="80"
      height="80"
    />
    })}
</div>

  </div>
}

export default ReviewsAuthore
