import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllPosts } from "redux/blog/operetions";
import { selectPosts } from "redux/blog/selectors";
import BlogSwiper from "./BlogSwiper"
import Section from "./Section";

const Blog = () => {
const dispatch = useDispatch();
const posts = useSelector(selectPosts);

useEffect(() => {
dispatch(getAllPosts())
}, [dispatch])

  return (
    <Section>
        {posts.length > 0 &&  <BlogSwiper posts={posts}/>}
    </Section>
  )
}

export default Blog
