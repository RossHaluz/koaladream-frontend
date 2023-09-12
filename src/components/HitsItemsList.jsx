import HitsItemsListItem from "./HitsItemsListItem"

const HitsItemsList = ({items}) => {
  return <>
  <ul className="grid gap-[20px] grid-cols-1 tb:grid-cols-3 lg:grid-cols-4 lg:gap-[32px]">
    {items?.map(({_id: id, images, oldPrice, price, status, article, title}) => {
        return <HitsItemsListItem key={id} images={images} oldPrice={oldPrice} price={price} status={status} article={article} title={title}/>
    })}
  </ul>
  <button type="button" className="bg-[#7FAA84] rounded-[5px] px-[17.5px] py-[11.5px] text-[#fff] tracking-[0.28px] font-semibold mt-[30px] flex mx-auto">Перейти в каталог</button>
  </>
}

export default HitsItemsList
