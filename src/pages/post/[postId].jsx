import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PostDetail = ({ singlePost }) => {
  // const [singlePost, setSinglePost] = useState({});
  // const router = useRouter();

  // const postId = router?.query?.postId;

  // console.log("getId---->", router?.query?.postId);

  // useEffect(() => {
  //   const getPostDetailsById = async () => {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/posts/${postId}`
  //     );

  //     const singlePostData = await response.json();
  //     console.log("singlePostData----->", singlePostData);
  //     setSinglePost(singlePostData);
  //   };

  //   getPostDetailsById();
  // }, []);

  // console.log("singlePost--->", singlePost);

  return (
    <>
      <Navbar />
      <section className="flex justify-center h-screen items-center">
        <div className="bg-blue-400/20 h-fit border border-blue-600 rounded-lg p-3 space-y-2 hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="">
            <h1 className="text-3xl font-semibold text-gray-700">
              {singlePost?.id}
            </h1>
            <h3 className="text-lg font-semibold text-blue-900">
              {singlePost?.title}
            </h3>
          </div>
          <p className="text-gray-600 text-sm">{singlePost?.body}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const paths = posts.map((post) => ({
    params: { postId: `${post.id}` },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { postId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const singlePost = await response.json();
  return {
    props: {
      singlePost,
    },
  };
}

export default PostDetail;
