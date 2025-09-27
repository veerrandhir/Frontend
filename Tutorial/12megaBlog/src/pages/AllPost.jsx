{
  /* To show all post in a page */
}

import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index.js";
import appwriteService from "../appwrite/config.js";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);

  appwriteService.getPosts([]).then((posts) => setPosts(posts));

  return <div>AllPost</div>;
}

export default AllPost;
