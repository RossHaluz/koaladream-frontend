import { useDispatch, useSelector } from "react-redux";
import Section from "./Section";
import { getHitsItems } from "redux/items/operetions";
import { useEffect } from "react";
import HitsItemsList from "./HitsItemsList";
import { selectHitsItems } from "redux/items/selectors";

const HitsItems = () => {
const dispatch = useDispatch();
const items = useSelector(selectHitsItems);

useEffect(() => {
dispatch(getHitsItems())
}, [dispatch])

  return (
    <Section title='Хіти продаж'>
    <div className="container">
      <HitsItemsList items={items}/>
      </div>
    </Section>
  )
}

export default HitsItems
