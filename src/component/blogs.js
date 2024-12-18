"use client";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(5);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 5);
  };

  const loadLess = () => {
    setVisiblePosts((prev) => prev - 5);
  };
  if (loading) {
    return (
      <div className="blogs" id="blogs">
        <h1>Blogs</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="blogs" id="blogs">
      <h1>Blogs</h1>
      <div className="blogs-container">
        {posts.slice(0, visiblePosts).map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post?.cover_image} alt={post.title} />
            <div className="blog-content">
              <p className="blog-title">{post.title}</p>
              <div className="blog-meta">
                <p className="time">
                  {post.readable_publish_date},{post.published_at.slice(0, 4)}
                </p>

                <p className="read-time">
                  {post.reading_time_minutes} min read
                </p>
              </div>
              <p className="blog-description">{post.description}</p>
              <div className="tags-container">
                {post.tag_list.map((tag, index) => (
                  <span key={index} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}

        <div className="more-buttons">
          {visiblePosts < posts.length && (
            <button onClick={loadMore} className="load-more-button">
              Load More
            </button>
          )}

          {visiblePosts > 5 && (
            <button onClick={loadLess} className="load-more-button">
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
